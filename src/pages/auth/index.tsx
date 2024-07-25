import { ReactComponent as Logo } from "src/assets/icons/atlysApplLogo.svg";
import AuthContainer from "src/containers/auth";
const Auth = () => {
  return (
    <div className="auth flex flex-col items-center justify-center w-full h-screen">
      <div className="mb-12">
        <Logo />
      </div>
      <AuthContainer showLoginForm />
    </div>
  );
};

export default Auth;
