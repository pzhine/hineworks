import React from "react";
import cx from "classnames";
import MediaQuery from "react-responsive";
import config from "../../content/config.json";
import styles from "./styles.scss";
import { Link } from "react-router-dom";

export default ({ work, target, linked }) => {
  const { mobile } = config.breakpoints;
  const mq = target.match("mobile")
    ? { maxWidth: mobile - 1 }
    : { minWidth: mobile };
  return (
    <MediaQuery {...mq}>
      {work.media[target].index.map((src) => {
        const ext = src.match("photo") ? "jpg" : "png";
        if (linked) {
          return (
            <Link to={`/on/${work.slug}/play/${src}.${ext}`} key={target + src}>
              <img
                className={cx("main-photo", target)}
                src={`${config.mediaUrl}/${work.slug}/${src}.${ext}`}
                alt={"detail photo thumbnail"}
              />
            </Link>
          );
        }
        return (
          <div
            style={{
              backgroundImage: `url('${config.mediaUrl}/${work.slug}/${src}.${ext}')`,
            }}
            className={cx("thumb", target, {
              twoRows: work.media[target].index.length === 2,
            })}
          />
        );
      })}
    </MediaQuery>
  );
};
