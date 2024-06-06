import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./SingleContent.module.css";

const SingleContent = ({
  className = "",
  imgcar05,
  title,
  explanation,
  imgcar05IconFlex,
  titleFlex,
  titleHeight,
  titleDisplay,
  titleMinWidth,
  titlePadding,
  titleAlignSelf,
}) => {
  const imgcar05IconStyle = useMemo(() => {
    return {
      flex: imgcar05IconFlex,
    };
  }, [imgcar05IconFlex]);

  const titleStyle = useMemo(() => {
    return {
      flex: titleFlex,
    };
  }, [titleFlex]);

  const title1Style = useMemo(() => {
    return {
      height: titleHeight,
      display: titleDisplay,
      minWidth: titleMinWidth,
      padding: titlePadding,
      alignSelf: titleAlignSelf,
    };
  }, [titleHeight, titleDisplay, titleMinWidth, titlePadding, titleAlignSelf]);

  return (
    <div className={[styles.singleContent, className].join(" ")}>
      <img
        className={styles.imgcar05Icon}
        loading="lazy"
        alt=""
        src={imgcar05}
        style={imgcar05IconStyle}
      />
      <div className={styles.contentSlider}>
        <div className={styles.background} />
        <div className={styles.title} style={titleStyle}>
          <h1 className={styles.title1} style={title1Style}>
            {title}
          </h1>
        </div>
        <div className={styles.explanation}>
          <p className={styles.explanation1}>{explanation}</p>
        </div>
      </div>
    </div>
  );
};

SingleContent.propTypes = {
  className: PropTypes.string,
  imgcar05: PropTypes.string,
  title: PropTypes.string,
  explanation: PropTypes.string,

  /** Style props */
  imgcar05IconFlex: PropTypes.any,
  titleFlex: PropTypes.any,
  titleHeight: PropTypes.any,
  titleDisplay: PropTypes.any,
  titleMinWidth: PropTypes.any,
  titlePadding: PropTypes.any,
  titleAlignSelf: PropTypes.any,
};

export default SingleContent;
