export interface AuthContainerProps {
  showLoginForm?: boolean;
  onClose?: () => void;
}

export interface LoginFormProps {
  onLoginSuccess: () => void;
  handleRegister: () => void;
}

export interface SignUpFormProps {
  onRegisterSuccess: () => void;
  handleLogin: () => void;
}
