import { Fragment } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import Profile from "../assets/user-round.svg";
import FadeContent from "../types/FadeContent";

export const Data = () => {
  return (
    <Fragment>
      <div className="w-full text-left">
        <div className="font-bold text-3xl text-[#00a96e]">Dashboard</div>
        <div className="mt-1.5 text-sm">
          Track your progress and stay organized.
        </div>

        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            <div className="stats shadow bg-[#161212] pr-3">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <DynamicIcon
                    color="#1eb853"
                    className="inline-block w-8 h-8"
                    name="check-square"
                  />
                </div>
                <div className="stat-title">Total Projects Completed</div>
                <div className="stat-value text-primary ml-2">00</div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div>
            <div className="stats shadow bg-[#161212] pr-3">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <DynamicIcon
                    color="#1eb88e"
                    className="inline-block w-8 h-8"
                    name="users"
                  />
                </div>
                <div className="stat-title">Active Clients</div>
                <div className="stat-value text-secondary ml-2">00</div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div>

            <div className="stats shadow bg-[#161212] pr-3">
              <div className="stat">
                <div className="stat-figure text-[#FFFF00]">
                  <DynamicIcon
                    color="#FFFF00"
                    className="inline-block w-8 h-8"
                    name="star"
                  />
                </div>
                <div className="stat-title">Average Client Rating</div>
                <div className="stat-value text-[#FFFF00] ml-2">00</div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div>

            <div className="stats shadow bg-[#161212] pr-3">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <div className="avatar">
                    <div className="w-14 bg-[#1b1717] rounded-full p-2">
                      <img src={Profile} />
                    </div>
                  </div>
                </div>
                <div className="stat-value text-[#00a96e]">0%</div>
                <div className="stat-title">Upcoming Deadlines</div>
                <div className="stat-desc text-secondary">
                  31 tasks remaining
                </div>
              </div>
            </div>
          </div>
        </FadeContent>
      </div>
    </Fragment>
  );
};
