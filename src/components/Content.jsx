import SingleContent from "./SingleContent";
import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <SingleContent
        imgcar05="/imgcar05@2x.png"
        title="How to Drive a Car Safely"
        explanation="Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them. "
      />
      <SingleContent
        imgcar05="/imgmusic08@2x.png"
        title="How to Make Dance Music"
        explanation="Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users. "
        imgcar05IconFlex="1"
        titleFlex="0.7377"
        titleHeight="unset"
        titleDisplay="unset"
        titleMinWidth="unset"
        titlePadding="unset"
        titleAlignSelf="stretch"
      />
      <div className={styles.slider}>
        <img
          className={styles.imgtechnology01Icon}
          loading="lazy"
          alt=""
          src="/imgtechnology01@2x.png"
        />
        <div className={styles.arrowSlider}>
          <div className={styles.arrow}>
            <div className={styles.background} />
            <div className={styles.strocke} />
            <div className={styles.v6IconFree}>
              <div className={styles.icon}></div>
            </div>
          </div>
          <div className={styles.arrow1}>
            <div className={styles.background1} />
            <div className={styles.strocke1} />
            <div className={styles.v6IconFree1}>
              <div className={styles.icon1}></div>
            </div>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.contentSlider}>
            <div className={styles.title}>
              <h1 className={styles.title1}>
                Why I Stopped Using Multiple Monitor
              </h1>
            </div>
            <div className={styles.explanation}>
              <p className={styles.explanation1}>
                A Single Monitor Manifesto — Many developers believe multiple
                monitors improve productivity. Studies have proven it, right?
                Well, keep in mind, many of those studies are commissioned from
                monitor manufacturers like
              </p>
            </div>
          </div>
          <div className={styles.dotSliderContainer}>
            <div className={styles.dotSlider}>
              <div className={styles.dotSliderChild} />
              <div className={styles.dotSliderItem} />
              <div className={styles.dotSliderInner} />
              <div className={styles.ellipseDiv} />
              <div className={styles.dotSliderChild1} />
            </div>
          </div>
        </div>
        <div className={styles.play}>
          <div className={styles.playChild} />
          <div className={styles.v6IconFree2}>
            <div className={styles.icon2}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
