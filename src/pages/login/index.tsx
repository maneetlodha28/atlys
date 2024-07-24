import { ReactComponent as Logo } from "src/assets/icons/atlysApplLogo.svg";
import AuthContainer from "src/containers/auth";

const Login = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full">
      <div className="mb-12">
        <Logo />
      </div>
      <AuthContainer showLoginForm />
    </div>
  );
};

export default Login;
