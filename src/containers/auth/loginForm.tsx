import React, { FunctionComponent } from "react";
import "./style.css";
import Button from "src/components/form/button";
import { LoginFormProps } from "./types";
import Label from "src/components/form/label";
import Field from "src/components/form/field";

const LoginForm: FunctionComponent<LoginFormProps> = (props) => {
  const { onLoginSuccess, handleRegister } = props;

  return (
    <div>
      <p className="text-tertiary text-sm mb-2">WELCOME BACK</p>
      <h1 className="text-white text-lg font-semibold mb-11">
        Log into your account
      </h1>

      <form className="text-left">
        <div className="mb-4">
          <Label
            htmlFor="email"
            text=" Email or Username"
            className="block mb-2 text-sm"
          />
          <Field
            id="email"
            type="text"
            placeholder="Enter your email or username"
          />
        </div>

        <div className="mb-5">
          <div className="flex justify-between items-center mb-2">
            <Label
              text="Password"
              htmlFor="password"
              className="text-sm"
              additionalElement={
                <p className="cursor-pointer text-primary text-xs">
                  Forgot password?
                </p>
              }
            />
          </div>
          <Field
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <Button onClick={onLoginSuccess} fullWidth>
          Login now
        </Button>
      </form>

      <p className="mt-3 text-secondary text-sm font-medium  text-left flex">
        Not registered yet?{" "}
        <div
          onClick={handleRegister}
          className="text-primary font-medium cursor-pointer ml-1"
        >
          Register →
        </div>
      </p>
    </div>
  );
};

export default LoginForm;
