import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PostCards.module.css";

export type PostCardsType = {
  className?: string;
  imgsport05?: string;
  title?: string;
  explanation?: string;
  imgavatar12?: string;
  header?: string;
  subhead?: string;

  /** Style props */
  propLineHeight?: CSSProperties["lineHeight"];
  imgsport05IconFlex?: CSSProperties["flex"];
};

const PostCards: FunctionComponent<PostCardsType> = ({
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
  const title2Style: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  const imgsport05IconStyle: CSSProperties = useMemo(() => {
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

export default PostCards;
