import { DynamicIcon } from "lucide-react/dynamic";
import { Fragment } from "react/jsx-runtime";

interface Props {
  isDeveloper?: boolean;
}

export const TableList = ({ isDeveloper }: Props) => {
  const clientTableFields = [
    "ID",
    "Name",
    "Email",
    "Phone",
    "Company",
    "Deadline",
    "Status",
    "Progress",
    "Actions",
  ];

  return (
    <Fragment>
      <div className="font-bold text-3xl text-[#00a96e]">
        {" "}
        {isDeveloper ? "Client" : "Project"} List
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="text-sm">
            {isDeveloper
              ? "Track client activity and assigned projects"
              : "Manage project details and progress"}
          </div>

          <div className="flex items-center gap-2">
            <label className="input flex items-center">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                className="grow"
                autoComplete="off"
                placeholder="Search"
              />
            </label>
            <button className="btn btn-square btn-primary">
              <DynamicIcon name="plus" className="w-4 h-4 font-bold" />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-[#161212] mt-3 min-h-95">
        <table className="table overflow-x-auto w-full table-auto">
          {/* head */}
          <thead>
            <tr>
              {clientTableFields.map((item, index) => (
                <th key={index} className="text-secondary font-bold">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};
