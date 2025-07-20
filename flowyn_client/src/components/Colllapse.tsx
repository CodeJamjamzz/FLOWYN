import { Fragment } from "react/jsx-runtime";
import type { Questions } from "../types/Questions";

interface Props {
  questions: Questions[];
}

export const Collapse = ({ questions }: Props) => {
  return (
    <Fragment>
      {questions.map((item, index) => (
        <div
          tabIndex={0}
          key={index}
          className="collapse collapse-arrow bg-base-100 border-base-300 border mb-5"
        >
          <div className="collapse-title font-semibold">{item.question}</div>
          <div className="collapse-content text-sm">{item.answer}</div>
        </div>
      ))}
    </Fragment>
  );
};
