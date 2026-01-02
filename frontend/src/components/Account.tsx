import { Btn } from "..";
import { arrowRight2, help, support, user } from "../assets";

const Account = () => {
  return (
    <div className="py-6 px-5 *:text-[#323231] *:text-lg flex gap-4 flex-col">
      <div className="flex gap-3 items-center">
        <div>
          <img src={user} alt="user" className="rounded-sm" />
        </div>
        <h3>Account</h3>
      </div>
      <div className="flex gap-3 items-center">
        <div>
          <img src={help} alt="help" className="rounded-sm" />
        </div>
        <h3>Help</h3>
      </div>
      <div className="flex gap-3 items-center">
        <div>
          <img src={support} alt="support" className="rounded-sm" />
        </div>
        <h3>Customer Care</h3>
      </div>
      <div className="pt-8" onClick={() => localStorage.removeItem("isUser")}>
        <Btn btn="btn_red" to="/Login" text="Log Out" rightIcon={arrowRight2} />
      </div>
    </div>
  );
};

export default Account;
