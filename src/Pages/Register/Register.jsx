import { AuthContext } from "../../context/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { useAuth } from "../../Hooks/useAuth";
import googleIcon from "../../assets/icons8-google-40.png";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Register = () => {
  const { register, user } = useAuth();
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;
    console.log(photoURL);

    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordValidation.test(password)) {
      Swal.fire({
        position: "center",
        title: "Error!",
        text: "Password must contain uppercase, lowercase and minimum 6 characters.",
        icon: "error",
        confirmButtonText: "Cool",
      });
      return;
    }

    register(email, password)
      .then(() => {
        Swal.fire({
          position: "top",
          title: "Success",
          text: "Register  Successfully",
          icon: "success",
          timer: 1500,
        });
        navigate(from, { replace: true });
      })

      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          position: "center",
          title: "Error!",
          text: `${errorMessage}`,
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };

  const handleGoogleSignIn = () => {
    if (user) {
      Swal.fire({
        position: "center",
        text: "User Already Login",
        confirmButtonText: "Cool",
      });
      return;
    } else {
      signInWithPopup(auth, provider)
        .then(() => {
          Swal.fire({
            position: "top",
            title: "Success",
            text: "Login  Successfully",
            icon: "success",
            timer: 1500,
          });
          navigate(from, { replace: true });
        })

        .catch((error) => {
          const errorMessage = error.message;
          Swal.fire({
            position: "center",
            title: "Error!",
            text: `${errorMessage}`,
            icon: "error",
            confirmButtonText: "Cool",
          });
        });
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center  p-4">
        <div className="w-full max-w-md bg-linear-to-r from-blue-100 to-green-100 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

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
            {/* PhotoURL */}
            <div>
              <label className="block mb-1 font-semibold">Photo</label>
              <input
                type="photoURL"
                name="photoURL"
                placeholder="Enter your PhotoURL"
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
              className="w-full bg-[#206b7a] hover:bg-[#05313a]  rounded-lg text-white p-3 font-semibold transition"
            >
              Register
            </button>
            <h1>
              Already have an account?{" "}
              <Link className="text-gray-950 font-bold underline" to="/login">
                Login
              </Link>{" "}
            </h1>
          </form>
          <h1 className="text-center text-gray-500 my-2 text-[20px] font-bold">
            OR
          </h1>
          <button
            onClick={() => handleGoogleSignIn()}
            className="w-full  bg-[#206b7a] hover:bg-[#05313a]  rounded-lg"
          >
            <div className="flex justify-center items-center gap-1 p-2 w-full">
              <img className="w-7 h-7" src={googleIcon} alt="Google Icon" />
              <span className="text-white  font-semibold">
                Continue with Google
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
