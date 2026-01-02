import { Form } from "..";
import { Link } from "react-router-dom";
import { clrFacebook, clrGoogle, clrTwitter } from "../assets";

const Signup = () => {
  return (
    <div className="flex items-center min-h-screen justify-center relative">
      {/* <div className="bg-black w-2/5 hidden md:block"></div> */}
      <div className="md:w-3/5 w-full self-center">
        <div className="w-4/5 md:w-4/5 lg:w-3/5 sm:w-3/5 mx-auto max-md:text-center">
          <div className="md:text-right pb-4">
            <Link
              to="/"
              className="text-[#ef0d04] underline underline-offset-4 font-medium hover:text-[#b80a03]"
            >
              FaithStore
            </Link>
          </div>
          <div>
            <h1 className="text-2xl font-medium">Create Account</h1>
            <p className="text-[#858585]">
              It is easy to get started and start shopping at faith store.
            </p>
          </div>
          <Form type="signup" />
          <div className="pt-5 text-center">
            <p className="text-[#858585] text-sm">
              By Registering, you agree to Faith Store's{" "}
              <span className="text-[#141212]">User Agreement</span> and{" "}
              <span className="text-[#141212]">
                Cookie & Internet Advertising.
              </span>
            </p>
            <div className="w-4/5 mx-auto">
              <div className="flex items-center py-6">
                <div className="w-full mt-2 border-t border-[#E4E4EE]"></div>
                <div className="px-4">or</div>
                <div className="w-full mt-2 border-t border-[#E4E4EE]"></div>
              </div>
              <div className="flex justify-between gap-4 lg:gap-8 items-center">
                <div className="flex w-full py-4 justify-center bg-[#F6F7F9]">
                  <img src={clrGoogle} alt="Google" />
                </div>
                <div className="flex w-full py-4 justify-center bg-[#F6F7F9]">
                  <img src={clrFacebook} alt="Facebook" />
                </div>
                <div className="flex w-full py-4 justify-center bg-[#F6F7F9]">
                  <img src={clrTwitter} alt="Twitter" />
                </div>
              </div>
              <p className="pt-7 text-[#81818F]">
                Already a Member? {" "}
                <Link
                  to="/login"
                  className="text-[#ef0d04] underline underline-offset-4 font-medium hover:text-[#b80a03]"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
