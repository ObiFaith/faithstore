import { Form } from "..";
import { Link } from "react-router-dom";
import { clrFacebook, clrGoogle, clrTwitter } from "../assets";

const ForgotPassword = () => {
  return (
    <div className="flex items-stretch min-h-screen place-items-center">
      <div className="bg-black w-2/5 hidden md:block"></div>
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
            <h1 className="text-2xl font-medium">Recover your password</h1>
            <p className="text-[#858585] py-2">
              You can request a password reset below. We will send a security
              code to the email address, please make sure it is correct.
            </p>
          </div>
          <Form type="forgotpassword" />
          <div className="pt-5 text-center">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
