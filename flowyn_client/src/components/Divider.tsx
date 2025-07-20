import { Fragment } from "react/jsx-runtime";

interface Props {
  type?: string;
}

export const Divider = ({ type = "" }: Props) => {
  return (
    <Fragment>
      {type !== "" ? (
        <div className={`divider divider-${type}`}></div>
      ) : (
        <div className="divider"></div>
      )}
    </Fragment>
  );
};
