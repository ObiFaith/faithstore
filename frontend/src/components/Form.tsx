import { Btn, Notify } from "..";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../store/api";

const Form = ({ type }: { type: string }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>("");
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/api/User/${type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setMessage(data.message);
      setShowMessage(true);

      if (response.ok) {
        localStorage.setItem("isUser", data.userId);
        navigate("/");
      }
    } catch (error) {
      console.error(`Error during ${type}:`, error);
    }
  };

  const handleShowMessage = () => {
    setShowMessage(false);
  };
  return (
    <>
      {showMessage && <Notify message={message} onHide={handleShowMessage} />}
      <form
        onSubmit={handleSubmit}
        className="*:px-4 *:py-2 w-full *:w-full md:*:mt-6 *:mt-4 *:border *:placeholder:text-[#B2B2C2] *:rounded-md *:border-[#E4E4EE]"
      >
        {type === "signup" && (
          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
          />
        )}
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
        />
        {type !== "forgotpassword" && (
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
          />
        )}
        <Btn
          text={
            type === "login"
              ? "Log In"
              : type === "signup"
              ? "Create your account"
              : "Reset Password"
          }
        />
      </form>
    </>
  );
};

export default Form;
