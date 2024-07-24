import { FunctionComponent, useCallback, useEffect, useState } from "react";
import LoginForm from "./loginForm";
import SignUpForm from "./signupForm";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Cross } from "src/assets/icons/cross.svg";
import { AuthContainerProps } from "./types";

const AuthContainer: FunctionComponent<AuthContainerProps> = (props) => {
  const { showLoginForm, onClose } = props;
  const [isLoginForm, setIsLoginForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (showLoginForm !== undefined) setIsLoginForm(showLoginForm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSuccess = useCallback(() => {
    navigate("/");
    if (onClose) onClose();
  }, [navigate, onClose]);

  return (
    <div className="login-container text-gray-300 py-10 relative px-6 rounded-lg shadow-lg w-96 text-center">
      {onClose && typeof onClose === "function" ? (
        <div
          className="p-2 absolute top-4 right-4 cursor-pointer rounded-full"
          style={{ background: "#131319" }}
          onClick={onClose}
        >
          <Cross />
        </div>
      ) : null}
      {isLoginForm ? (
        <LoginForm
          onLoginSuccess={handleSuccess}
          handleRegister={() => setIsLoginForm(false)}
        />
      ) : (
        <SignUpForm
          onRegisterSuccess={handleSuccess}
          handleLogin={() => setIsLoginForm(true)}
        />
      )}
    </div>
  );
};

export default AuthContainer;
