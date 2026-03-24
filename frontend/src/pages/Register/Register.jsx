import "./Register.css";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register">
        <img src="/src/assets/register/CreateAccountImage.webp" alt="login" />

        <div className="form-section">
          <div className="top-section">
            <h2>Account Sign Up</h2>
            <p>Hey, enter your details to create your account</p>
          </div>

          <form>
            <Input
              type="text"
              placeholder="Username"
              leftIcon="user"
              id="username"
              name="username"
              autoComplete="username"
            />
            <Input
              type="password"
              placeholder="Password"
              leftIcon="lock"
              id="password"
              name="password"
              autoComplete="new-password"
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              leftIcon="lock"
              id="confirm-password"
              name="confirm-password"
              autoComplete="new-password"
            />
            <Button className="btn-login-submit">Sign Up</Button>
          </form>

          <p>
            Already have an account?
            <a href="#"> Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
