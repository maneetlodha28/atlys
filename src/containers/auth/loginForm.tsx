import React, { FunctionComponent } from "react";
import "./style.css";
import Button from "src/components/form/button";
import { LoginFormProps } from "./types";

const LoginForm: FunctionComponent<LoginFormProps> = (props) => {
  const { onLoginSuccess, handleRegister } = props;
  return (
    <div>
      <h2 className="text-gray-500 text-sm mb-2">WELCOME BACK</h2>
      <h1 className="text-white text-2xl font-bold mb-6">
        Log into your account
      </h1>

      <form className="text-left">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm">
            Email or Username
          </label>
          <input
            type="text"
            id="email"
            className="w-full bg-gray-800 rounded px-3 py-2 text-white placeholder-gray-500"
            placeholder="Enter your email or username"
          />
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <p className="text-sm text-blue-400 hover:underline">
              Forgot password?
            </p>
          </div>
          <div className="relative">
            <input
              type="password"
              id="password"
              className="w-full bg-gray-800 rounded px-3 py-2 text-white placeholder-gray-500"
              placeholder="Enter your password"
            />
            <button
              onClick={onLoginSuccess}
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {/* Eye icon would go here */}
              👁
            </button>
          </div>
        </div>

        <Button onClick={onLoginSuccess} fullWidth>
          Login now
        </Button>
      </form>

      <p className="mt-6  text-sm text-left flex">
        Not registered yet?{" "}
        <div
          onClick={handleRegister}
          className="text-blue-400 cursor-pointer ml-1 hover:underline"
        >
          Register →
        </div>
      </p>
    </div>
  );
};

export default LoginForm;
