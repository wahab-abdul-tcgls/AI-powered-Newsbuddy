import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./PostCards.module.css";

const PostCards = ({
  className = "",
  imgsport05,
  title,
  explanation,
  imgavatar12,
  header,
  subhead,
  propLineHeight,
  imgsport05IconFlex,
}) => {
  const title2Style = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  const imgsport05IconStyle = useMemo(() => {
    return {
      flex: imgsport05IconFlex,
    };
  }, [imgsport05IconFlex]);

  return (
    <div className={[styles.postCards, className].join(" ")}>
      <img
        className={styles.imgsport05Icon}
        loading="lazy"
        alt=""
        src={imgsport05}
        style={imgsport05IconStyle}
      />
      <div className={styles.title}>
        <h1 className={styles.title1} style={title2Style}>
          {title}
        </h1>
      </div>
      <div className={styles.explanation}>
        <p className={styles.explanation1}>{explanation}</p>
      </div>
      <div className={styles.info}>
        <div className={styles.content}>
          <img
            className={styles.imgavatar12Icon}
            loading="lazy"
            alt=""
            src={imgavatar12}
          />
          <div className={styles.text}>
            <div className={styles.header}>{header}</div>
            <div className={styles.subhead}>{subhead}</div>
          </div>
        </div>
        <div className={styles.cardIcon}>
          <div className={styles.v6IconFree}>
            <div className={styles.icon}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

PostCards.propTypes = {
  className: PropTypes.string,
  imgsport05: PropTypes.string,
  title: PropTypes.string,
  explanation: PropTypes.string,
  imgavatar12: PropTypes.string,
  header: PropTypes.string,
  subhead: PropTypes.string,

  /** Style props */
  propLineHeight: PropTypes.any,
  imgsport05IconFlex: PropTypes.any,
};

export default PostCards;
