import { Fragment } from "react";
import Profile from "../assets/user-round.svg";
import { useProfile } from "../store/useProfile";
import { Divider } from "./Divider";
import { Link, useLocation } from "react-router-dom";
import { DynamicIcon } from "lucide-react/dynamic";

export const SideBar = () => {
  const location = useLocation();
  const pagesList = [
    { icon: "layout-dashboard", page: "Landing" },
    { icon: "settings", page: "Settings" },
  ];

  const username = useProfile((state) => state.username);
  const email = useProfile((state) => state.email);

  return (
    <Fragment>
      <aside className="max-[900px]:hidden w-60 min-h-screen bg-base-200">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        {/* 💡 Add flex-col and justify-between to split top/bottom */}
        <ul className="menu bg-base-200 text-base-content min-h-full w-60 flex flex-col justify-between">
          {/* --- Top Content --- */}
          <div>
            <li>
              <div className="mt-4">
                <div>
                  <img
                    src={Profile}
                    alt="Logo"
                    className="w-11 h-11 rounded-full mx-auto p-1.5 bg-[#1b1717] hover:bg-transparent"
                  />
                </div>
                <div>
                  <p className="font-bold">{username}</p>
                  <p>{email}</p>
                </div>
              </div>
            </li>

            <Divider className="mx-2 h-8" type="success" />

            {pagesList.map((item, index) => (
              <li key={index} className="flex flex-row w-full mb-1">
                <div className="w-full ml-5">
                  <DynamicIcon
                    name={item.icon as any}
                    color="#00a96e"
                    className="inline-block w-5 h-5 mr-1"
                  />
                  <Link
                    className={
                      location.pathname === `/${item.page}`
                        ? "justify-center text-left font-bold text-[#00a96e]"
                        : "justify-center text-left"
                    }
                    to={`/${item.page}`}
                  >
                    {item.page === "Landing" ? "Dashboard" : item.page}
                  </Link>
                </div>
              </li>
            ))}
          </div>

          {/* --- Bottom Content (Divider + Logout) --- */}
          <div>
            <Divider className="mx-2 h-8" type="success" />
            <div className="flex flex-col w-full mb-2 btn btn-primary" >
              <div className="w-full">
                <DynamicIcon
                  name="log-out"
                  color="black"
                  className="inline-block w-5 h-5 mr-1 justify-center"
                />
                <Link className=" text-left" to="/Products">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </ul>
      </aside>
    </Fragment>
  );
};
