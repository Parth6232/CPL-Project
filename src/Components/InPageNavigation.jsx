import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function InPageNavigation({ teams, children }) {
  const [index, setindex] = useState(0);
  let tablineRef = useRef();
  let btnRef = useRef();

  function toggleBtn(btn, i) {
    let { offsetWidth, offsetLeft } = btn;
    tablineRef.current.style.width = offsetWidth + "px";
    tablineRef.current.style.left = offsetLeft + "px";
    setindex(i);
  }

  useEffect(() => {
    toggleBtn(btnRef.current, 0);
  }, []);

  return (
    <div className="w-full">
      {/* 🔹 Button container updated */}
      <div
        className={
          "bg-blue-800 w-full flex justify-center items-end relative " +
          (teams.length > 2 ? "h-[100px]" : "h-[50px]")
        }
      >
        {teams.length > 2 ? (
          teams.map(({ title, path }, i) => (
            <Link to={path} key={i}>
              <button
                ref={i === 0 ? btnRef : null}
                className={
                  "hover:bg-gray-200/20 font-bold px-7 py-5 lg:px-16 text-sm rounded-t-lg " +
                  (index === i
                    ? "text-white bg-gray-200/20"
                    : "text-gray-200")
                }
                onClick={(e) => toggleBtn(e.target, i)}
              >
                {title}
              </button>
            </Link>
          ))
        ) : (
          teams.map((data, i) => (
            <button
              ref={i === 0 ? btnRef : null}
              key={i}
              className={
                "bg-gray-200 px-10 py-2 rounded-t-lg " +
                (index === i ? "text-black" : "text-gray-400")
              }
              onClick={(e) => toggleBtn(e.target, i)}
            >
              {data}
            </button>
          ))
        )}
        <hr
          ref={tablineRef}
          className="border-white absolute bottom-0 border-2 duration-300 w-0"
        />
      </div>
      {teams.length > 2 ? "" : children[index]}
    </div>
  );
}

export default InPageNavigation;
