import PostCards from "./PostCards";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.headerSectionParent, className].join(" ")}>
      <div className={styles.headerSection}>
        <div className={styles.titleSectionWrapper}>
          <div className={styles.titleSection}>
            <div className={styles.rectangleWrapper}>
              <div className={styles.rectangle} />
            </div>
            <div className={styles.title}>popular posts</div>
          </div>
        </div>
        <div className={styles.arrowParent}>
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
      </div>
      <footer className={styles.footerSection}>
        <PostCards
          imgsport05="/imgsport05@2x.png"
          title="Opening Day of Boating Season, Seattle WA"
          explanation="Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge"
          imgavatar12="/imgavatar12@2x.png"
          header="James"
          subhead="August 18 , 2022"
        />
        <PostCards
          imgsport05="/imgtechnology07@2x.png"
          title="How to choose the right laptop for programming"
          explanation="Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs"
          imgavatar12="/imgavatar01@2x.png"
          header="Louis Hoebregts"
          subhead="July 25 , 2022"
          propLineHeight="19.33px"
          imgsport05IconFlex="1"
        />
        <PostCards
          imgsport05="/imgcar02-1@2x.png"
          title="How we built the first real self-driving car"
          explanation="Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when"
          imgavatar12="/imgavatar02@2x.png"
          header="Mary"
          subhead="July 14 , 2022"
          propLineHeight="unset"
          imgsport05IconFlex="1"
        />
        <PostCards
          imgsport05="/imgfood07-1@2x.png"
          title="How to Persuade Your Parents to Buy Fast Food"
          explanation="Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time."
          imgavatar12="/imgavatar10@2x.png"
          header="Jon Kantner"
          subhead="May 10 , 2022"
          propLineHeight="19.33px"
          imgsport05IconFlex="1"
        />
      </footer>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
