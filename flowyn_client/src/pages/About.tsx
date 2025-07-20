import { Fragment } from "react/jsx-runtime";
import { NavBar } from "../components/NavBar";
import logo from "../assets/flowyn-logo-name.png";
import AnimatedContent from "../types/AnimatedContent";
import FadeContent from "../types/FadeContent";
import { Footer } from "../components/Footer";
import { Collapse } from "../components/Colllapse";
import type { Questions } from "../types/Questions";
import BlurText from "../types/BlurText";

export const About = () => {
  const topQuestionList: Questions[] = [
    {
      question: "Why should I use Flowyn for managing my clients?",
      answer: `Flowyn helps you stay organized by keeping all your client details, communications, and schedules in one place. 
    It is designed to streamline your workflow, save time, and improve how you connect with your clients.`,
    },
    {
      question: "Who is Flowyn designed for?",
      answer: `Flowyn is perfect for freelancers, consultants, small business owners, and service providers who handle multiple clients. 
    Whether you're managing a few clients or dozens, Flowyn adapts to your needs.`,
    },
    {
      question:
        "How can Flowyn help me build better relationships with my clients?",
      answer: `Flowyn keeps track of client preferences, past interactions, and upcoming tasks so you never miss a detail. 
    By staying organized and responsive, you show clients that you value their time—leading to stronger, more professional relationships.`,
    },
  ];

  return (
    <Fragment>
      <div className="bg-[#110d0d]">
        <NavBar />
        <div className="flex flex-col items-center justify-center bg-base-300 my-23">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={true}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <img src={logo} alt="Flowyn Logo" className="w-80 h-25 mb-2 mt-2" />
          </AnimatedContent>

          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={true}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <h1 className="text-2xl items-center mb-10 text-green-600 font-bold text-center">
              "Lead with Service. Master your workflow"
            </h1>
          </AnimatedContent>

          <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-7xl mx-auto">
            <div className="text-center lg:text-left w-full lg:w-2/3">
              <div className="flex items-center justify-center lg:justify-start">
                <FadeContent
                  blur={true}
                  duration={1000}
                  easing="ease-out"
                  initialOpacity={0}
                >
                  <div className="text-3xl font-bold">What is FLOWYN?</div>
                </FadeContent>
              </div>

              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
                <p className="pt-4 text-lg text-justify">
                  Flowyn is a modern client management app designed to
                  streamline collaboration between developers and their clients.
                  Built with simplicity and efficiency in mind, Flowyn enhances
                  every step of the workflow—from project updates and task
                  tracking to communication and feedback—ensuring that nothing
                  gets lost in translation. Whether you're a freelance developer
                  or part of a growing team, Flowyn helps you stay aligned,
                  organized, and focused on delivering results. With Flowyn, you
                  don’t just manage clients—you build lasting partnerships.
                </p>
              </FadeContent>
            </div>
          </div>
        </div>
        <span className="divider divider-success mx-50 bg-[#110d0d] sm:px-6 md:px-15 lg:px-10 xl:px-0" />

        <BlurText
          text="Top Questions"
          delay={150}
          animateBy="words"
          direction="bottom"
          className="text-green-600 text-5xl font-bold text-center justify-center m-10"
        />

        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="max-lg:mb-20 px-4 sm:px-6 md:px-15 lg:px-30 xl:px-60 mb-30">
            <Collapse questions={topQuestionList} />
          </div>
        </FadeContent>

        <Footer />
      </div>
    </Fragment>
  );
};
