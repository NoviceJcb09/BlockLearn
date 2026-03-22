import Button from "../../components/Button";
import Input from "../../components/Input";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login">
        <img src="/src/assets/login/LoginImage.webp" alt="login" />

        <div className="form-section">
          <div className="top-section">
            <h2>Login to your account</h2>
            <p>Hey, enter your details to sign in to your account</p>
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
              autoComplete="current-password"
            />
            <Button className="btn-login-submit">Login</Button>
          </form>

          <p>
            Don't have an account?
            <a href="#"> Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
