import React from "react";
import "./Projects.css";
import ProjectTemplate from "./ProjectTemplate";
import content from "../../content/content";
import PortfolioVideo from "../../assets/videos/Aishwarya-Portfolio.mp4";
import D3GraphsVideo from "../../assets/videos/D3Graphs.mp4";
import ProjectPortfolio from "./ProjectPortfolio";

const Projects = () => {
  const { projectContent } = content;
  const ToolsUsedPf = [
    "React js",
    "HTML",
    "CSS",
    "Bootstrap",
    "javaScript",
    "Git",
    "Git Hub",
    "Netlify",
  ];
  const ToolsUsedGraphs = [
    "React js",
    "HTML",
    "CSS",
    "D3.js",
    "Bootstrap",
    "javaScript",
    "Git",
    "Git Hub",
    "React Bootstrap",
  ];
 
  const handleLiveLinkPo = () => {
    window.open("https://aishwaryapatilfrontenddeveloper.netlify.app/");
  };
  const handleLiveLinkGraphs = () => {
    window.open("https://aishwaryapatil-assidussglobal-reactjs.netlify.app/");
  }

  return (
    <div className="projects-div" id="projects">
      <div>
        <h1 className="prjct-title">Projects - Past Work.</h1>
      </div>
       <ProjectTemplate
        ProjecTitle="Portfolio"
        ProjectDescription={projectContent.prjdescrpPo}
        ProjectVideo={PortfolioVideo}
        ToolsUsed={ToolsUsedPf}
        ProjectOverview={
          <>
            <p>
              {projectContent.prjPortfolioOv1}
              {projectContent.prjPortfolioOv2}
            </p>
            <p>{projectContent.prjPortfolioOv3}</p>
            <p>{projectContent.prjPortfolioOv4}</p>
          </>
        }
        handleLiveLink1={handleLiveLinkPo}
      /> 
       {/* <ProjectPortfolio
        ProjecTitle=" Project:1 Portfolio"
        ProjectDescription={projectContent.prjdescrpPo}
        ToolsUsed={ToolsUsedPf}
        ProjectOverview={
          <>
            <p>
              {projectContent.prjPortfolioOv1}
              {projectContent.prjPortfolioOv2}
            </p>
            <p>{projectContent.prjPortfolioOv3}</p>
            <p>{projectContent.prjPortfolioOv4}</p>
          </>
        }
        handleLiveLink1={handleLiveLinkPo}
      />  */}

      <ProjectTemplate
        ProjecTitle="Randomized Data Graphs"
        ProjectDescription={projectContent.prjdescrpHh}
        ProjectVideo={D3GraphsVideo}
        ToolsUsed={ToolsUsedGraphs}
        ProjectOverview={
          <>
            <p>
              {projectContent.prjDescriptionHh1}
              {projectContent.prjDescriptionHh2}
            </p>
            <p>{projectContent.prjDescriptionHh3}</p>
            <p>{projectContent.prjDescriptionHh4}</p>
          </>
        }
        handleLiveLink1={handleLiveLinkGraphs}
      />

     
    </div>
  );
};

export default Projects;
