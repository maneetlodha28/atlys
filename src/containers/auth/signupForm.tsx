import { FunctionComponent } from "react";
import Button from "src/components/form/button";
import { SignUpFormProps } from "./types";

const SignUpForm: FunctionComponent<SignUpFormProps> = (props) => {
  const { handleLogin, onRegisterSuccess } = props;
  return (
    <div className=" text-white text-left flex flex-col ">
      <div className="text-center mb-6">
        <h2 className="text-lg font-semibold mb-2">SIGN UP</h2>
        <h1 className="text-xl font-bold">Create an account to continue</h1>
      </div>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Choose a preferred username"
            required
          />
        </div>
        <div className="mb-6 relative">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Choose a strong password"
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <Button onClick={onRegisterSuccess} fullWidth>
          Continue
        </Button>
      </form>
      <p className="mt-6  text-sm text-left flex">
        Not registered yet?{" "}
        <div
          onClick={handleLogin}
          className="text-blue-400 cursor-pointer ml-1 hover:underline"
        >
          Login →
        </div>
      </p>
    </div>
  );
};

export default SignUpForm;
