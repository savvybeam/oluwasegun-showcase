import { useMemo } from "react";
import { technologies } from "../helpers/technologies.js";

export default function Watermark() {
  const list = [];

  let xpos = 0;
  let ypos = 0;
  const stacks = technologies();

  const stackList = useMemo(() => {
    //generate coordinates on the DOM to place each icon

    for (let item of stacks) {
      xpos = Math.floor(Math.random() * window.innerWidth - 300);
      ypos = Math.floor(Math.random() * window.innerHeight - 300);

      //pick only icons with svgicon, and put them in an array
      if (item.svgpath) {
        list.push({
          id: item.id,
          name: item.name,
          path: item.svgpath,
          color: item.color,
          xloc: xpos,
          yloc: ypos,
        });
      }
    }

    return list;
  }, [stacks]); //load them once! No re-render

  return (
    <div className="opacity-11 bg-slate-500 max-h-screen min-w-screen">
      {
        // render item in the position
        stackList.map((s) => (
          <div
            key={s.id}
            className="absolute w-24 h-24 animate-spin [animation-duration:50s]"
            style={{ top: `${s.yloc}px`, left: `${s.xloc}px` }}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={s.color}
                className="size-20"
              >
                <path d={s.path} fillRule="evenodd" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        ))
      }
    </div>
  );
}
