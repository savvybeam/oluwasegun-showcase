import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Interactions = ({ interactionlink, interactionname, svgpath }) => {
  let [color, setColor] = useState("");

  const colors = [
    "text-fuchsia-500",
    "text-amber-400",
    "text-emerald-400",
    "text-teal-400",
    "text-slate-700",
    "text-pink-400",
  ];

  let colorPicked;

  useEffect(() => {
    colorPicked = colors[Math.floor(Math.random() * colors.length)];
    setColor(colorPicked + " sm:text-md font-semibold");
    console.log(colorPicked);
  }, []);

  return (
    <Link to={interactionlink}>
      <div className="group flex justify-between w-30 items-center h-auto">
        <span className={color}>{interactionname}</span>
        <span className="sm:hidden sm:group-hover:block transition delay-300 duration-400 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 animate-bounce"
          >
            <path d={svgpath} fillRule="evenodd" clipRule="evenodd" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default Interactions;
