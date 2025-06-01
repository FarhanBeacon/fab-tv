import { useRef, useState, useEffect } from "react";
import ChannelUI from "./ChannelUI";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router";

const TVUI = ({ otherChannel, chName, chUrl }) => {
  const videoContainerRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [videoSrc, setVideoSrc] = useState(chUrl); // State to store the autoplay URL

  // Modify video URL to ensure autoplay
  useEffect(() => {
    if (chUrl.includes("autoplay=1")) {
      setVideoSrc(chUrl);
    } else {
      const autoplayUrl = chUrl.includes("?")
        ? `${chUrl}&autoplay=1`
        : `${chUrl}?autoplay=1`;
      setVideoSrc(autoplayUrl);
    }
  }, [chUrl]);

  // Handle fullscreen change
  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);

      // Rotate to landscape on mobile when fullscreen is activated
      if (document.fullscreenElement && window.innerWidth < 768) {
        screen.orientation?.lock?.("landscape").catch(console.warn);
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  const handleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    } else if (videoContainerRef.current) {
      videoContainerRef.current.requestFullscreen?.();
    }
  };

  return (
    <div>
      {/* Video Section */}
      <div className="mb-1.5 sticky md:relative top-0 z-20">
        <div
          ref={videoContainerRef}
          className="relative w-full aspect-video"
          onMouseEnter={() => setShowButton(true)}
          onMouseLeave={() => setShowButton(false)}
        >
          <iframe
            className="w-full h-full"
            src={videoSrc}
            title={chName}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          {/* Fullscreen Button (Only Visible on Hover) */}
          {showButton && (
            <button
              onClick={handleFullScreen}
              className="absolute bottom-2 right-2 p-1 rounded-full transition-opacity duration-300 bg-black/60 text-white opacity-50 hover:opacity-100"
              aria-label={isFullScreen ? "Exit fullscreen" : "Enter fullscreen"}
            ></button>
          )}
        </div>

        {/* Channel Name */}
        <div className="bg-black text-white border border-blue-300 p-2 text-center">
          <h3 className="text-xs md:text-xl font-semibold">{chName}</h3>
        </div>
      </div>

      {/* Other Channels Section */}
      <div className="relative my-2 md:my-4 p-2 md:p-4">
        <h3 className="text-lg md:text-xl font-semibold">Other Channels</h3>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {otherChannel.map((channel, index) => (
            <ChannelUI
              key={index}
              name={channel.name}
              image={channel.image}
              navLink={channel.navLink}
            />
          ))}
        </div>

        {/* Floating Home Button Inside Other Channels Section */}
        <div className="sticky bottom-4 flex justify-end p-4">
          <Link to={"/"}>
            <button className="w-12 h-12 flex justify-center items-center text-2xl font-bold text-white bg-black border rounded-full transition transform hover:bg-gray-800 active:scale-90">
              <IoHomeOutline />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TVUI;
