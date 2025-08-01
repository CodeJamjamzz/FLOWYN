import { Fragment } from "react/jsx-runtime";

interface Props {
    options : string[];
    setUserType: (userType: string) => void;
    margin: string;
}

export const Select = ({options, setUserType, margin} : Props) => {
  return (
    <Fragment>
      <select defaultValue={`${options[0]}`} className={`select w-full ${margin}`} onChange={(e) => {
        setUserType(e.target.value);
      }}>
        {options.map((item, index) =>
          index === 0 ? (
            <option key={index} disabled={true} value={item}>{item}</option>
          ) : (
            <option key={index} value={item}>{item}</option>
          )
        )}
      </select>
    </Fragment>
  );
};
