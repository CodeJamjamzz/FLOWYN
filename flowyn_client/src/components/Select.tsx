import { Fragment } from "react/jsx-runtime";

interface Props {
    options : string[],
}

export const Select = ({options} : Props) => {
  return (
    <Fragment>
      <select defaultValue={`${options[0]}`} className="select">
        {options.map((item, index) =>
          index === 0 ? (
            <option key={index} disabled={true}>{item}</option>
          ) : (
            <option key={index}>{item}</option>
          )
        )}
      </select>
    </Fragment>
  );
};
