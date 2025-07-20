import { Fragment } from "react/jsx-runtime";
import FadeContent from "../types/FadeContent";
import GithubIcon from "../assets/github-green.svg";
import GmailIcon from "../assets/mail-green.svg";
import MapIcon from "../assets/map-pin.svg";

export const ContactInfo = () => {
  const info = [
    { img: GithubIcon, msg: "jamiel062705@gmail.com" },
    { img: GmailIcon, msg: "https://github.com/CodeJamjamzz" },
    { img: MapIcon, msg: "Toledo City, Cebu, Philippines" },
  ];

  return (
    <Fragment>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl mt-8 lg:mt-0">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <div className="card-body">
                <fieldset className="fieldset">
                  <h2 className="text-2xl font-bold justify-center items-center text-center">
                    Contact Form
                  </h2>
                  <label className="label text-lg text-gray-400">Name</label>
                  <input type="text" className="input mb-2 w-full" />
                  <label className="label text-lg text-gray-400">Email</label>
                  <input type="email" className="input mb-2 w-full" />
                  <label className="label text-lg text-gray-400">Message</label>
                  <textarea className="textarea w-full"></textarea>
                  <div></div>
                  <button className="btn btn-soft btn-primary mt-3">
                    Login
                  </button>
                </fieldset>
              </div>
            </FadeContent>
          </div>
          <div>
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <div className="flex justify-center items-center px-5">
                <h1 className="text-5xl font-bold text-green-600">Contacts</h1>
              </div>
              <p className="pt-6 text-lg text-justify max-w-200">
                I'm open to new opportunities, collaborations, or simply
                connecting with fellow tech enthusiasts. Whether you have a
                project in mind, need assistance, or just want to chat about
                tech, feel free to reach out through any of the channels below.
              </p>
              <div className="py-8 space-y-4 items-center">
                {info.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img src={item.img} alt="icon" className="w-7 h-7 " />
                    <span className="text-white text-md">{item.msg}</span>
                  </div>
                ))}
              </div>
            </FadeContent>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
