import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Rokers " },
  { meta: "last name", metaInfo: "Nelson" },
  { meta: "Age", metaInfo: "25 Years" },
  { meta: "Nationality", metaInfo: "USA" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "New York" },
  { meta: "phone", metaInfo: "+3456374647" },
  { meta: "Email", metaInfo: "you@mail.com" },
  { meta: "Skype", metaInfo: " rokers.nelson" },
  { meta: "langages", metaInfo: "French, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
