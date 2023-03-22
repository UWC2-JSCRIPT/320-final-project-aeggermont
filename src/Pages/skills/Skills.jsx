import React from "react";

const skillsContent = [
  {
    name: "React.Js",
    skillPercent: "80",
  },
  {
    name: "Angular.Js",
    skillPercent: "95",
  },
  {
    name: "Django",
    skillPercent: "90",
  },
  {
    name: "iOS",
    skillPercent: "70",
  },
  {
    name: "Figma",
    skillPercent: "95",
  },
  {
    name: "Python",
    skillPercent: "90",
  },
  {
    name: "Typecript",
    skillPercent: "90",
  },
  {
    name: "SwiftUI",
    skillPercent: "70",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
