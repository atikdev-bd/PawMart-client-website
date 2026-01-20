import { AuthContext } from "../../context/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { useAuth } from "../../Hooks/useAuth";
import googleIcon from "../../assets/icons8-google-40.png";
import { Link } from "react-router";

const Register = () => {
  const { register, user } = useAuth();
  const provider = new GoogleAuthProvider();
  console.log(register);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    register(email, password)
      .then((result) => {
        // Signed up
        console.log(result);
        // ...
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  const handleGoogleSignIn = () => {
    if (user) {
      return alert("You are already logged in");
    } else {
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
