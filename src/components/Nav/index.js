import React from "react";
import styles from "./styles.scss";
import { githubUrl, linkedinUrl } from "../../content/config.json";
import GithubIcon from "../../icons/github.svg";
import LinkedinIcon from "../../icons/linkedin.svg";

const Nav = () => (
  <div className="nav">
    <a target="_blank" rel="nofollow" href={githubUrl} alt={"Github"}>
      <GithubIcon />
    </a>
    <a target="_blank" rel="nofollow" href={linkedinUrl} alt={"LinkedIn"}>
      <LinkedinIcon />
    </a>
  </div>
);

export default Nav;
