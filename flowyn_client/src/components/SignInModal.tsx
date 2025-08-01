import { Fragment } from "react/jsx-runtime";
import { UserNameInput } from "./UserNameInput";
import { EmailInput } from "./EmailInput";
import { PasswordInput } from "./PasswordInput";
import { Divider } from "./Divider";
import { Select } from "./Select";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setUsername: (username: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  setUserType: (userType: string) => void;
  email: string;
  password: string;
  username: string;
  confirmPassword: string;
  error: string;
}

export const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  setEmail,
  setPassword,
  setUsername,
  setConfirmPassword,
  setUserType,
  email,
  password,
  username,
  confirmPassword,
  error,
}: Props) => {
  const inputMargin = "mt-3";
  const choices = ["Developer", "Client"];
  return (
    <Fragment>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl text-center text-green-600">
            Sign Up
          </h3>
          <p className="text-center mt-3 px-8">
            Create an account to stay connected and get the latest updates!
          </p>
          <fieldset className="fieldset px-12">
            <UserNameInput
              margin="mt-5"
              setUsername={setUsername}
              username={username}
            />
            <EmailInput
              margin={inputMargin}
              setEmail={setEmail}
              email={email}
            />
            <Select options={choices} setUserType={setUserType} margin={inputMargin} />
            <PasswordInput
              placeholder="Password"
              margin={inputMargin}
              setPassword={setPassword}
              password={password}
            />
            <PasswordInput
              placeholder="Confirm password"
              margin={inputMargin}
              setPassword={setConfirmPassword}
              password={confirmPassword}
            />
            <Divider type="success" />
            <button
              className="btn btn-soft btn-primary w-2/3 m-auto"
              onClick={() => {
                onSubmit();
              }}
            >
              Sign Up
            </button>
            <p
              className={
                error
                  ? `text-error text-center mt-3`
                  : `text-error text-center mt-3 hidden`
              }
            >
              {error}
            </p>
          </fieldset>
        </div>
      </dialog>
    </Fragment>
  );
};
