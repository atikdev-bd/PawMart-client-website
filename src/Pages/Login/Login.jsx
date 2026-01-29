import googleIcon from "../../assets/icons8-google-40.png";
import { AuthContext } from "../../context/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { useAuth } from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
  const { user, login } = useAuth();
  console.log(user);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const provider = new GoogleAuthProvider();
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    login(email, password)
      .then((result) => {
        console.log(result);
        navigate(from, { replace: true });
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    if (user) {
      return alert("You are already logged in");
    } else {
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
          navigate(from, { replace: true });
        })

        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center  p-4">
        <div className="w-full max-w-md bg-linear-to-br from-[#F5F2F2] to-[#f5bc80] p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 font-semibold">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Forget Password */}
            <div className="text-right">
              <button
                type="button"
                className="text-blue-700 text-sm hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#206b7a] text-white p-3 rounded-lg font-semibold hover:bg-[#05313a] transition"
            >
              Login
            </button>
            <h1>
              Don't have an account?{" "}
              <Link
                className="text-gray-950 font-bold underline"
                to="/register"
              >
                Register
              </Link>{" "}
            </h1>
            <h1 className="text-center text-gray-500 my-2 text-[20px] font-bold">
              OR
            </h1>
            <button
              onClick={() => handleGoogleSignIn()}
              className="w-full pointer bg-[#206b7a] hover:bg-[#05313a]  rounded-lg"
            >
              <div className="flex justify-center items-center gap-1 p-2 w-full">
                <img className="w-7 h-7" src={googleIcon} alt="Google Icon" />
                <span className="text-white  font-semibold">
                  Continue with Google
                </span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
