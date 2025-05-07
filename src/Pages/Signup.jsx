import Image from "../assets/free-photo-of-idyllic-english-countryside-with-rolling-hills 1.svg";
import Logo from "../assets/tumbuhin-logo.svg";
import { useNavigate } from "react-router-dom";

export default function Signup() {
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
          <h1 className="text-4xl font-medium">Create your account here</h1>
          <form className="flex flex-col space-y-5 md:w-[60%] w-[70%]">
          <div className="flex justify-between gap-x-6">
              {/* Checkbox Input 1 */}
              <div className="flex bg-[#FDFFFA] rounded-lg p-3 w-1/2">
                <input type="checkbox" className="mr-2" />
                <input
                  type="text"
                  placeholder="Farmer"
                  className="bg-transparent focus:outline-none text-base placeholder:text-gray-300 w-full"
                />
              </div>

              {/* Checkbox Input 2 */}
              <div className="flex bg-[#FDFFFA] rounded-lg p-3 w-1/2">
                <input type="checkbox" className="mr-2" />
                <input
                  type="text"
                  placeholder="Only Shop"
                  className="bg-transparent focus:outline-none text-base placeholder:text-gray-300 w-full"
                />
              </div>
            </div>
            <input
              type="text"
              placeholder="Username"
              className="rounded-lg p-3 bg-[#FDFFFA] placeholder:text-gray-300"
            />
             <input
              type="text"
              placeholder="Email"
              className="rounded-lg p-3 bg-[#FDFFFA] placeholder:text-gray-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="rounded-lg p-3 bg-[#FDFFFA] placeholder:text-gray-300"
            />
            {/* Button SignIns */}
             <button
              type="button"
              onClick={() => navigate("/")}
              className="bg-[#B7EB47] text-[#294B29] text-lg py-3 rounded-full font-medium"
            >
              Sign Up
            </button>

            <div className="flex flex-col gap-4">
              <button
                 type="button"
                 onClick={() => navigate("/login")}
                >Already have an account <span className="text-blue-600">Sign In</span></button> 
              <button>Or</button>
              
            </div>
            <button className="bg-[#B7EB47] text-[#294B29] text-lg py-3 rounded-full font-medium">
              Signup with Facebook
            </button>
            <button className="bg-[#F5F7ED] text-[#294B29] text-lg py-3 px-4 rounded-full font-medium border border-[#294B29]">
              Signup with Google
            </button>

          </form>
         
        </div>
      </div>
    </div>
  );
}
