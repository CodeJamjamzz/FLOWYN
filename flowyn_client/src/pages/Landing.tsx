import { SideBar } from "../components/SideBar";
import { Data } from "../components/Data";
import { LandingNavbar } from "../components/LandingNavBar";
import { TableList } from "../components/TableList";

export const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingNavbar />

      {/* Horizontal layout: sidebar left, data right */}
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 p-4">
          <div className="flex mx-5">
            <Data/>
            </div>
            <div className=" flex-2 px-5">
              <TableList isDeveloper={true} />
            </div>
        </main>
      </div>
    </div>
  );
};
