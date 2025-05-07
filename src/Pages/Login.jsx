import Image from "../assets/free-photo-of-idyllic-english-countryside-with-rolling-hills 1.svg";
import Logo from "../assets/tumbuhin-logo.svg";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate(); //buat pangil route

  return (
    <div className="h-screen flex overflow-hidden">
      <div className="relative w-[50%] sm:flex hidden">
        <img
          src={Image}
          alt="Farmer in rice field"
          className="absolute w-[97%] h-[97%] object-cover m-3 rounded-lg"
        />
      </div>
      <div className="flex flex-col sm:w-[50%] w-[100%] bg-[#F5F7ED] h-auto">
        <div className="flex flex-col items-center justify-center h-full w-full px-4 space-y-6">
          <img src={Logo} alt="" className="w-16 h-16" />
          <h1 className="text-4xl font-medium">Hai, Welcome back! 👋🏻 </h1>
          <h1 className="w-[70%] text-center text-lg">
            Masuk untuk mengakses berbagai artikel pertanian pilihan dan temukan
            wawasan baru untuk mendukung keberhasilan pertanianmu.
          </h1>
          <form className="flex flex-col space-y-5 md:w-[60%] w-[70%]">
            <input
              type="text"
              placeholder="Username"
              className="rounded-lg p-3 bg-[#FDFFFA] placeholder:text-gray-300 border border-[#D9D9D9]"
            />
            <input
              type="password"
              placeholder="Password"
              className="rounded-lg p-3 bg-[#FDFFFA] placeholder:text-gray-300 border border-[#D9D9D9]"
            />
            {/* Button SignUp */}
           <button
              type="button"
              onClick={() => navigate("/")}
              className="bg-[#B7EB47] text-[#294B29] text-lg py-3 rounded-full font-medium"
            >
              Sign In
            </button>

            <div className="flex flex-col gap-4">
              <button 
                type="button"
                onClick={() => navigate("/signup")}
              >Don't have an account <span className="text-blue-600">Sign Up</span></button> 
              <button>Or</button>
              
            </div>

            <button className="bg-[#B7EB47] text-[#294B29] text-lg py-3 rounded-full font-medium">
              Login with Facebook
            </button>
            <button className="bg-[#F5F7ED] text-[#294B29] text-lg py-3 px-4 rounded-full font-medium border border-[#294B29]">
              Login with Google
            </button>


            
          </form>
        </div>
      </div>
    </div>
  );
}
