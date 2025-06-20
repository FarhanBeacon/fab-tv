import { useContext, useState } from "react";
import LoginLottie from "../assets/lotties/login.json";
import Lottie from "lottie-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
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
                  className="btn btn-ghost w-full bg-base-200 border-[#e5e5e5]"
                >
                  <FcGoogle />
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
