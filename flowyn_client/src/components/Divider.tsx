interface Props {
  type?: string;
  className?: string;
}

export const Divider = ({ type = "", className = "" }: Props) => {
  return (
    <div className={className}>
      {type !== "" ? (
        <div className={`divider divider-${type}`}></div>
      ) : (
        <div className="divider"></div>
      )}
    </div>
  );
};
