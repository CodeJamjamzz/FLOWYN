import { Fragment } from "react";

interface Props {
  header: string;
  text?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  buttonName: string;
}

export const Modal = ({ header, text, children,isOpen,onClose,buttonName="Submit"}: Props) => {
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
            {header}
          </h3>
          <p className="text-center mt-3 px-8">
            {text}
          </p>
          <fieldset className="fieldset px-12">
            {children}
            <button className="btn btn-soft btn-primary w-2/3 m-auto">
              {buttonName}
            </button>
          </fieldset>
        </div>
      </dialog>
    </Fragment>
  );
};
