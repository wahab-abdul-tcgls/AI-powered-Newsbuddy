import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SingleContent.module.css";

export type SingleContentType = {
  className?: string;
  imgcar05?: string;
  title?: string;
  explanation?: string;

  /** Style props */
  imgcar05IconFlex?: CSSProperties["flex"];
  titleFlex?: CSSProperties["flex"];
  titleHeight?: CSSProperties["height"];
  titleDisplay?: CSSProperties["display"];
  titleMinWidth?: CSSProperties["minWidth"];
  titlePadding?: CSSProperties["padding"];
  titleAlignSelf?: CSSProperties["alignSelf"];
};

const SingleContent: FunctionComponent<SingleContentType> = ({
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
  const imgcar05IconStyle: CSSProperties = useMemo(() => {
    return {
      flex: imgcar05IconFlex,
    };
  }, [imgcar05IconFlex]);

  const titleStyle: CSSProperties = useMemo(() => {
    return {
      flex: titleFlex,
    };
  }, [titleFlex]);

  const title1Style: CSSProperties = useMemo(() => {
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

export default SingleContent;
