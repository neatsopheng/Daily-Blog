import { Link } from "react-router-dom";
import "./Login.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useUserContext } from "../features/auth/authSlice";

export interface ILogin {
  email: string;
  password: string;
}

const Login = () => {
  const [showPw, setShowPw] = useState(false);
  const [formData, setFormData] = useState<ILogin>({
    email: "",
    password: "",
  });

  const { login, isLoading, errorMessage, setErrorMessage } = useUserContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrorMessage("");
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {

      // validate empty field
      if (!formData.email || !formData.password) {
        setErrorMessage("Please input all field");
        return;
      }

      // success
      login(formData);
    } catch (error) {
      throw Error(
        (error instanceof Error && error.message) ||
          "Error submitting register form"
      );
    }
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <>
      <div className="login-container">
        <h1>Login</h1>
        <span style={{ color: "red", marginTop: "50px" }}>{errorMessage}</span>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder=""
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-group">
            <input
              type={showPw ? "text" : "password"}
              name="password"
              id="password"
              placeholder=""
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <span className="show-pw" onClick={() => setShowPw(!showPw)}>
              {showPw ? "Hide password" : "Show Password"}
            </span>
          </div>
          <div className="login-help">
            <span>Forgot password?</span>
            <span>
              Don't have account?{" "}
              <Link to={"/register"} style={{ textDecoration: "none" }}>
                Register
              </Link>
            </span>
          </div>
          <button type="submit" disabled={isLoading} className="login-button">
            {isLoading ? "Loading" : "Login"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
