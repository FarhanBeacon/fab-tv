import { useContext, useState } from "react";
import LoginLottie from "../assets/lotties/login.json";
import Lottie from "lottie-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import swal from "sweetalert";

const Login = () => {
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const {
    createGoogleUser,
    loginWithEmailPass,
    setUser,
    setLoading,
    logOutUser,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");

    loginWithEmailPass(email, password)
      .then((result) => {
        const user = result.user;
        if (user.emailVerified) {
          setUser(user);
          swal("Success", "Login Successful", "success");
          navigate("/");
        } else {
          logOutUser();
          swal("Error", "Email is not verified Yet", "warning");
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleSignin = () => {
    createGoogleUser()
      .then((result) => {
        const user = result.user;
        setUser(user);
        swal("Success", "Login Successful", "success");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <Banner />
      <div className="hero bg-base-200 min-h-screen items-start md:items-center">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div>
            <Lottie animationData={LoginLottie} loop={true} />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 drop-shadow-[0_0_2px_rgba(0,0,0,0.25)]">
            <div className="card-body">
              <form onSubmit={handleSignIn} className="fieldset">
                <h1 className="text-4xl font-semibold text-center mb-2">
                  !!!Login!!!
                </h1>
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                    required
                  />
                  <>
                    {showPass ? (
                      <FaEyeSlash
                        onClick={() => setShowPass(false)}
                        className="absolute z-10 text-lg right-5 md:right-6 top-3 cursor-pointer"
                      />
                    ) : (
                      <FaEye
                        onClick={() => setShowPass(true)}
                        className="absolute z-10 text-lg right-5 md:right-6 top-3 cursor-pointer"
                      />
                    )}
                  </>
                </div>
                <p className="text-red-600">{error}</p>
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
              <div>
                <p>
                  Don't Have An Account?{" "}
                  <Link to={"/register"} className="text-blue-500">
                    Register
                  </Link>
                </p>
              </div>
              <div className="divider">OR</div>
              <div className="w-full flex justify-center">
                <button
                  onClick={handleGoogleSignin}
                  className="btn w-full bg-base-200 text-black border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
