import React from "react";

const experienceContent = [
  {
    year: "   2017 - Present",
    position: "Lead Engineer",
    compnayName: "The Walt Disney Company",
    details: ` Develops front-end applications and provides technical leadership and mentor ship
               to the UI/UX team to adopt best software development practices and modern UI frameworks
               for the implementation of Web base interactive dashboards, Web sites, and Web APIs
               integrations with back-end databases, Machine Learning systems, and marketing platforms.
    `,
  },
  {
    year: "2013 - 2017",
    position: "Senior Software Engineer",
    compnayName: "The Walt Disney Company",
    details: `Developed Web applications in content management systems and data access systems,ç
              tools for data exploration, data visualizations, backend services, and proof of
              concepts to define requirements for data driven workflows.
    
    `,
  },
  {
    year: "2011 - 2012",
    position: "Senior Applications Developer",
    compnayName: "Akamai Technologies",
    details: `Developed web applications and an API for the support of the GNET project which
              visualizes global traffic patterns among Akamai customers`,
  },
  {
    year: "2008 - 2010",
    position: "Technical Director",
    compnayName: "The Walt Disney Company",
    details: `Developed and engineered media file based workflows for the production of
              stereoscopic imagery. Projects involved developing applications APIs to 
              extend and implement features for 3D animation, bitmap manipulation, encoding 
              of media and integration of queuing systems and management controls of
              high-performance server enclosures for the rendering of stereoscopic imagery.`,
  },
  {
    year: "2008 - 2010",
    position: "Technical Director",
    compnayName: "The Walt Disney Company",
    details: `Developed and engineered media file based workflows for the production of
              stereoscopic imagery. Projects involved developing applications APIs to 
              extend and implement features for 3D animation, bitmap manipulation, encoding 
              of media and integration of queuing systems and management controls of
              high-performance server enclosures for the rendering of stereoscopic imagery.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src="img/about/briefcase.png" alt="icon" />
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
