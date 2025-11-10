import Avatar from "./Avatar";
import Interactions from "./Interactions";

const ContentBody = () => {
  return (
    <div className="relative w-90 sm:w-100 mx-auto border-2 border-gray-50 sm:h-1/2 my-auto">
      <div className="flex justify-between">
        <Interactions
          interactionname={"Capabilities"}
          interactionlink={"/capabilities"}
          svgpath={
            "M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
          }
        />

        <Interactions
          interactionname={"Works"}
          interactionlink={"/works"}
          svgpath={
            "M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z"
          }
        />
      </div>
      <div className="relative group">
        <a href="/resume" title="Download my resume">
          <Avatar
            styles="mx-auto w-50 h-50 sm:w-75 sm:h-75 rounded-full border-4 border-r-15 border-r-purple-300 my-20 transition delay-200 duration-400 ease-in-out saturate-200 sm:grayscale-200 sm:hover:grayscale-0 sm:hover:saturate-200 cursor:pointer"
            src="https://ps-profile-pictures-production.s3.us-west-2.amazonaws.com/profile-pictures/a0866c59-4ad9-442a-a59b-4f068d50a0a2?time=1761204381054"
            alt="Codedat Owner"
          />
        </a>
        <span className="absolute font-light text-white top-33 bg-fuchsia-400 rounded p-2 rounded-l-2xl transition-all duration-200 ease-in-out sm:group-hover:-left-43 w-53 left-46 opacity-0 sm:group-hover:opacity-100">
          Information Security Analyst
        </span>
        <span className="absolute font-light text-white top-33 bg-fuchsia-400 rounded p-2 rounded-r-2xl transition-all duration-200 ease-in-out sm:group-hover:left-89 w-53 left-46 opacity-0 sm:group-hover:opacity-100">
          Full Stack Developer
        </span>
      </div>

      <div className="flex justify-between">
        <Interactions
          interactionname={"Bio"}
          interactionlink={"/bio"}
          svgpath={
            "M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          }
        />

        <Interactions
          interactionname={"Contact me"}
          interactionlink={"/contact"}
          svgpath={
            "m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          }
        />
      </div>
    </div>
  );
};

export default ContentBody;
