import { useContext, useState } from "react";
import Lottie from "lottie-react";
import registerLottie from "../assets/lotties/register.json";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import swal from "sweetalert";

const Register = () => {
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const {
    createUserWithEmailPass,
    createGoogleUser,
    setLoading,
    setUser,
    updateUserInfo,
    verifyEmail,
    logOutUser,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError([
        "Password must be at least 8 characters long and  one uppercase letter and one digit (number)",
      ]);
      return;
    } else if (username.length > 8) {
      setError("Username can be a maximum of 8 characters");
      return;
    }

    createUserWithEmailPass(email, password)
      .then(() => {
        updateUserInfo(username);
        verifyEmail();
        logOutUser();
        swal("Good job!", "Now Verify Your Email to Login", "success");
        navigate("/login");
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
            <Lottie animationData={registerLottie} className="md:w-[400px]" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 drop-shadow-[0_0_2px_rgba(0,0,0,0.25)]">
            <div className="card-body">
              <form onSubmit={handleRegister} className="fieldset">
                <h1 className="text-4xl font-semibold text-center mb-2">
                  Register!
                </h1>
                <label className="label">Username</label>
                <input
                  type="text"
                  name="username"
                  className="input"
                  placeholder="Username"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
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
                <button className="btn btn-neutral mt-4">Register</button>
              </form>
              <div>
                <p>
                  Already Have An Account?{" "}
                  <Link to={"/login"} className="text-blue-500">
                    Login
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
                  SignUp with Google
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

export default Register;
