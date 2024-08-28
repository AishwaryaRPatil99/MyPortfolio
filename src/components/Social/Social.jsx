import React from 'react';
import "./Social.css";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

const Social = ({DevToLogo, color}) => {
    const handleLinkedInClick = () => {
        // window.location.href = 'https://www.linkedin.com/in/aishwarya-patil99/'       open in this tab only
        // open in a new tab
        window.open("https://www.linkedin.com/in/aishwarya-patil99/");
      };
      const handleGitGubClick = () => {
        window.open("https://github.com/AishwaryaRPatil99");
      };
  return (
<div className="intr-ct-con-div" style={{color: color || '#000'}}>
          <TiSocialLinkedin
            size={25}
            className="intr-con-icon"
            onClick={handleLinkedInClick}
          />
          <FaGithub
            size={20}
            className="intr-con-icon"
            onClick={handleGitGubClick}
          />
        </div>  )
}

export default Social;