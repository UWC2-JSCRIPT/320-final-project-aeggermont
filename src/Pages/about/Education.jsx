import React from "react";

const educationContent = [
  {
    year: "2022",
    degree: "MS - Human Centered Design",
    school: "UNIVERSITY OF WASHINGTOWN",
    details: `Research and course work includes Human Centered Design, Design Thinking,
              User Interaction Design and Prototyping, Visual Communication, VR/AR prototyping,
              Usability Studies, Digital Fabrication, IoT and Physical Computing, Information Design,
              Design and Management of Complex Systems.`,
  },
  {
    year: "2007",
    degree: "MA - Media Arts",
    school: "EMERSON COLLEGE",
    details: `My course work included television studio production, graduate film production,
              computer animation using Maya, digital compositing, research methods in media arts,
              and traditional cinematography. `,
  },
  {
    year: "2003",
    degree: "GRADUATE CERTIFICATE",
    school: "HARVARD UNIVERSITY",
    details: `My course work included introduction to computer science using C and C++, 
    data structures and algorithms, communication systems and technology, Web programming in Perl,
    Unix systems programming, Java for distributed systems, communication protocols and
    Internet architectures, and the study of computer network systems and the development of
    multimedia applications over high speed networking systems.
    `,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src="img/about/book.png" alt="icon" />
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.school}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
