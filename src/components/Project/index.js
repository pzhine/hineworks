import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import styles from "./styles.scss";
import works from "../../content/works.json";
import config from "../../content/config.json";

import Thumb from "./Thumb";
import Summary from "./Summary";
import VideoThumbs from "./VideoThumbs";
import Body from "./Body";
import Gallery from "./Gallery";

import BackIcon from "../../icons/back.svg";

const getWork = ({ match, slug }) => {
  // if project was specified in component props, use that to fetch
  if (slug) {
    return works.projects.find((p) => p.slug === slug);
  }
  // otherwise, we're loading server-side, use the route params
  try {
    return works.projects.find((p) => p.slug === match.params.project);
  } catch (e) {
    return false;
  }
};

const Project = ({ match, slug }) => {
  const work = getWork({ match, slug });
  if (!work) {
    return <h2>Project not found</h2>;
  }
  // are we viewing the summary (for index page) or detail
  const isDetail = match && match.params.slug === work.slug;
  const isDetailView = Boolean(match);
  const { desktop } = config.breakpoints;
  return (
    <article
      className={cx("project", {
        isDetail: isDetail,
        isDetailView: isDetailView,
      })}
    >
      <Link className="back" to={"/"}>
        <BackIcon />
      </Link>
      <MediaQuery minWidth={desktop + 1}>
        {(isDesktop) => (
          <div className="indexContainer">
            {!isDesktop && (
              <h3>
                <Link to={`/on/${work.slug}`}>{work.title}</Link>
              </h3>
            )}
            <div className="indexRow">
              {(!isDesktop || !isDetail) && (
                <Link to={`/on/${work.slug}`} className="indexThumbs">
                  <Thumb work={work} target={"mobile"} key={"tm"} />
                  <Thumb work={work} target={"desktop"} key={"td"} />
                </Link>
              )}
              <div className="summaryContainer">
                {isDesktop && (
                  <h3>
                    <Link to={`/on/${work.slug}`}>{work.title}</Link>
                  </h3>
                )}
                {(!isDesktop || !isDetail) && (
                  <Summary work={work} isDetail={isDetail} />
                )}
                {isDesktop &&
                  isDetail &&
                  ((work.media.desktop.videos.length && (
                    <VideoThumbs target={"desktop"} work={work} key={"vtd"} />
                  )) || <Thumb work={work} target={"desktop"} key={"td"} />)}
              </div>
            </div>
          </div>
        )}
      </MediaQuery>
      {isDetail && (
        <div className="detailContainer">
          <MediaQuery maxWidth={desktop}>
            <VideoThumbs target={"mobile"} work={work} key={"vtm"} />
            <VideoThumbs target={"desktop"} work={work} key={"vtd"} />
          </MediaQuery>
          <MediaQuery minWidth={desktop + 1}>
            <Summary work={work} isDetail />
          </MediaQuery>
          <Body work={work} key={"body"} />
          <Gallery target={"mobile"} work={work} key={"gm"} />
          <Gallery target={"desktop"} work={work} key={"gd"} />
        </div>
      )}
    </article>
  );
};

export default Project;
