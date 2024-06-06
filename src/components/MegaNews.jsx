import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./MegaNews.module.css";

const MegaNews = ({ className = "" }) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const menuOpen = Boolean(menuAnchorEl);
  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };
  return (
    <header className={[styles.megaNews, className].join(" ")}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <a className={styles.meganews}>Gist-genie</a>
          <div className={styles.menu}>
            <div className={styles.menu1} />
            <div className={styles.menu2}>
              <div className={styles.topMenu}>
                <div className={styles.pagesContainer}>
                  <a className={styles.pages}>Pages</a>
                  <div className={styles.freeIconContainer}>
                    <div className={styles.v6IconFree}>
                      <div className={styles.icon}></div>
                    </div>
                  </div>
                </div>
                <div className={styles.rectangle} />
              </div>
              <div className={styles.bottomMenu}>
                <div className={styles.elementsMunu}>
                  <div className={styles.childItem}>sub menu one</div>
                </div>
                <div className={styles.elementsMunu1}>
                  <div className={styles.childItem1}>sub menu two</div>
                </div>
                <div className={styles.elementsMunu2}>
                  <div className={styles.childItem2}>sub menu Three</div>
                </div>
                <div className={styles.elementsMunu3}>
                  <div className={styles.childItem3}>sub menu four</div>
                </div>
              </div>
            </div>
            <div className={styles.contactUs}>
              <a className={styles.item}>contact us</a>
              <div className={styles.rectangle1} />
            </div>
            <div className={styles.menu3}>
              <a className={styles.item1}>about us</a>
              <div className={styles.rectangle2} />
            </div>
          </div>
        </div>
        <div className={styles.rightHeader}>
          <div className={styles.search}>
            <div className={styles.search1}>
              <div className={styles.v6IconFree1}>
                <div className={styles.icon1}></div>
              </div>
              <div className={styles.searchAnything}>Search anything</div>
              <div className={styles.v6IconFree2}>
                <div className={styles.icon2}></div>
              </div>
            </div>
            <div className={styles.bottomSearch}>
              <div className={styles.elementsMunu4}>
                <div className={styles.childItem4}>sub menu one</div>
              </div>
              <div className={styles.elementsMunu5}>
                <div className={styles.childItem5}>sub menu two</div>
              </div>
              <div className={styles.elementsMunu6}>
                <div className={styles.childItem6}>sub menu Three</div>
              </div>
              <div className={styles.elementsMunu7}>
                <div className={styles.childItem7}>sub menu four</div>
              </div>
            </div>
          </div>
          <div className={styles.userSection}>
            <div className={styles.user}>
              <div className={styles.user1}>
                <img
                  className={styles.imgavatar13Icon}
                  alt=""
                  src="/imgavatar13@2x.png"
                />
                <a className={styles.behzad}>Tyler Durdan</a>
                <div className={styles.v6IconFree3}>
                  <div className={styles.icon3}></div>
                </div>
              </div>
              <div className={styles.bottomMenu1}>
                <div className={styles.elementsMunu8}>
                  <div className={styles.v6IconFree4}>
                    <div className={styles.icon4}></div>
                  </div>
                  <div className={styles.childItem8}>profile</div>
                </div>
                <div className={styles.elementsMunu9}>
                  <div className={styles.v6IconFree5}>
                    <div className={styles.icon5}></div>
                  </div>
                  <div className={styles.childItem9}>marked</div>
                </div>
                <div className={styles.elementsMunu10}>
                  <div className={styles.v6IconFree6}>
                    <div className={styles.icon6}></div>
                  </div>
                  <div className={styles.childItem10}>Exit</div>
                </div>
              </div>
            </div>
            <div className={styles.icon7}>
              <div className={styles.background} />
              <div className={styles.v6IconFree7}>
                <div className={styles.icon8}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.topTags}>
        <div className={styles.topTagsChild} />
        <Button
          className={styles.arrow}
          disableElevation={true}
          variant="contained"
          sx={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #f5f5f5 52.44%, rgba(245, 245, 245, 0.38) 82.29%, rgba(245, 245, 245, 0))",
            borderRadius: "12px",
            "&:hover": {
              background:
                "radial-gradient(50% 50% at 50% 50%, #f5f5f5 52.44%, rgba(245, 245, 245, 0.38) 82.29%, rgba(245, 245, 245, 0))",
            },
            width: 144,
            height: 68,
          }}
        />
        <div className={styles.tags}>
          <div className={styles.hashtag}>
            <img
              className={styles.imgfood01Icon}
              loading="lazy"
              alt=""
              src="/imgfood01@2x.png"
            />
            <a className={styles.food}>#food</a>
          </div>
          <div className={styles.hashtag1}>
            <img
              className={styles.imganimal10Icon}
              loading="lazy"
              alt=""
              src="/imganimal10@2x.png"
            />
            <a className={styles.food1}>#animal</a>
          </div>
          <div className={styles.hashtag2}>
            <img
              className={styles.imgcar04Icon}
              loading="lazy"
              alt=""
              src="/imgcar04@2x.png"
            />
            <a className={styles.food2}>#car</a>
          </div>
          <div className={styles.hashtag3}>
            <img
              className={styles.imgsport06Icon}
              loading="lazy"
              alt=""
              src="/imgsport06@2x.png"
            />
            <a className={styles.food3}>#sport</a>
          </div>
          <div className={styles.hashtag4}>
            <img
              className={styles.imgmusic06Icon}
              loading="lazy"
              alt=""
              src="/imgmusic06@2x.png"
            />
            <a className={styles.food4}>#music</a>
          </div>
          <div className={styles.hashtag5}>
            <img
              className={styles.imgtechnology03Icon}
              loading="lazy"
              alt=""
              src="/imgtechnology03@2x.png"
            />
            <a className={styles.food5}>#technology</a>
          </div>
          <div className={styles.hashtag6}>
            <img
              className={styles.imgabstract07Icon}
              loading="lazy"
              alt=""
              src="/imgabstract07@2x.png"
            />
            <a className={styles.food6}>#abstract</a>
          </div>
          <div className={styles.hashtag7}>
            <img
              className={styles.imganimal08Icon}
              alt=""
              src="/imganimal08-1@2x.png"
            />
            <a className={styles.food7}>#Nature</a>
          </div>
        </div>
      </div>
    </header>
  );
};

MegaNews.propTypes = {
  className: PropTypes.string,
};

export default MegaNews;
