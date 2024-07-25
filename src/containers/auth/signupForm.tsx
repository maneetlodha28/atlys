import { FunctionComponent } from "react";
import Button from "src/components/form/button";
import { SignUpFormProps } from "./types";
import Label from "src/components/form/label";
import Field from "src/components/form/field";

const fields = [
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
  },
  {
    id: "username",
    type: "text",
    placeholder: "Choose a preferred username",
    label: "Username",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Choose a strong password",
    label: "Password",
  },
];

const SignUpForm: FunctionComponent<SignUpFormProps> = ({
  handleLogin,
  onRegisterSuccess,
}) => {
  return (
    <div className=" text-left flex flex-col">
      <div className="text-center mb-11">
        <p className="text-sm font-medium text-secondary mb-2">SIGN UP</p>
        <p className="text-lg text-white font-semibold">
          Create an account to continue
        </p>
      </div>
      <form>
        {fields.map((field) => (
          <div className="mb-4" key={field.id}>
            <Label htmlFor={field.id} text={field.label} className="mb-2" />
            <Field
              type={field.type}
              id={field.id}
              className="w-full"
              placeholder={field.placeholder}
            />
          </div>
        ))}
        <Button onClick={onRegisterSuccess} className="mt-1" fullWidth>
          Continue
        </Button>
      </form>
      <p className="mt-3 text-secondary text-sm text-left flex">
        Not registered yet?{" "}
        <div onClick={handleLogin} className="text-primary cursor-pointer ml-1">
          Login →
        </div>
      </p>
    </div>
  );
};

export default SignUpForm;
