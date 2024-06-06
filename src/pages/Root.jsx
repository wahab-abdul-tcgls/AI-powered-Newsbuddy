import MegaNews from "../components/MegaNews";
import Content from "../components/Content";
import FrameComponent from "../components/FrameComponent";
import styles from "./Root.module.css";

const Root = () => {
  return (
    <div className={styles.root}>
      <MegaNews />
      <Content />
      <FrameComponent />
    </div>
  );
};

export default Root;
