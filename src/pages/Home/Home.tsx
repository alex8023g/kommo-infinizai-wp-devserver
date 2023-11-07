import React, { useState } from 'react';
import styles from './home.module.css';
import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';
import Flame from '../../img/flame.svg';
import Underline from '../../img/underline.svg';
import { Button2 } from '../../components/Button2';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { SideBar } from '../../components/SideBar';
import { menuData } from '../../App';
import imgCharMin1 from '../../img/char-min-1.png';
import imgCharMin2 from '../../img/char-min-2.png';
import imgCharMin3 from '../../img/char-min-3.png';
// import imgCharMin4 from '../../img/char-min-4.png';
// import imgChar1 from '../../img/character-1.png';
// import imgChar2 from '../../img/character-2.png';
// import imgChar3 from '../../img/character-3.png';
// import imgChar4 from '../../img/character-4.png';
// import imgGamepad from '../../img/gamepad.png';
// import imgGamer from '../../img/gamer.png';
// import imgPc from '../../img/pc.png';
// import imgKeyboard from '../../img/keyboard.png';
// import imgEva from '../../img/eva.png';
import { nanoid } from 'nanoid';
import { Footer } from '../../components/Footer';

const tabData = [
  { id: '', src: imgCharMin1 },
  { id: '', src: imgCharMin2 },
  { id: '', src: imgCharMin3 },
  // { id: '', src: '/img/char-min-1.png' },
].map((item) => ({ ...item, id: nanoid() }));

// const chars = [imgChar1, imgChar2, imgChar3, imgChar4];
const chars2 = ['tab1', 'tab2', 'tab3', 'tab4'];

export function Home() {
  // { isSBOpen }: { isSBOpen: boolean }
  // const [isSBOpen, setIsSBOpen] = useState(false);
  const [activeChar, setActiveChar] = useState(0);
  const homeMData = menuData.map((item) =>
    item.name === 'Home' ? { ...item, isActive: true } : { ...item, isActive: false }
  );
  return (
    <>
      {/* <Header menuData={homeMData} isSBOpen={isSBOpen} setIsSBOpen={setIsSBOpen} /> */}
      <section className={styles.section1}>
        <Layout>
          <div className={styles.s1Wrap}>
            <div className={styles.futureWrap}>
              <Flame />
              <span className={styles.futureSpan}>FUTURE OF eSPORTS</span>
            </div>
            <h2 className={styles.h1}>
              Unleash the Next Generation of Gaming
              <div className={styles.underline}>
                <Underline />
              </div>
            </h2>
            <p className={styles.p1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in
              morbi pulvinar. Enim non pulvinar neque.
            </p>
            <Link to='#'>
              <Button2 name='Explore More' />
            </Link>
            <Link to='#'>
              <span className={styles.ourTeam}>View our team</span>
            </Link>
            <ul className={styles.socialUl}>
              <li className={cx(styles.socialLi, styles.mr60)}>
                <Link to='#'>FACEBOOK</Link>
              </li>
              <li className={cx(styles.socialLi, styles.mr50)}>
                <Link to='#'>INSTAGRAM</Link>
              </li>
              <li className={styles.socialLi}>
                <Link to='#'>TWITCH</Link>
              </li>
            </ul>
          </div>
        </Layout>
        {/* <SideBar isSBOpen={isSBOpen} menuData={menuData} /> */}
      </section>
      <section className={styles.section2}>
        <Layout>
          <div className={cx(styles.s2Wrap, styles[chars2[activeChar]])}>
            <div className={cx(styles.s2Empty, styles[chars2[activeChar]])}>
              {/* <img src={chars[activeChar]} alt='' /> */}
            </div>
            <div className={styles.s2Content}>
              <div className={styles.futureWrap}>
                <Flame />
                <span className={styles.futureSpan}>FUTURE OF eSPORTS</span>
              </div>
              <h2 className={cx(styles.h2, styles.s2h2)}>Customize your Own Character</h2>
              <p className={styles.s2p1}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                inventore veritatis et quasi architecto beatae.
              </p>
              <ul className={styles.tabs}>
                {tabData.map(({ id, src }, i) => (
                  <li
                    key={id}
                    className={cx(styles.tab, { [styles.activeTab]: i === activeChar })}
                    onClick={() => {
                      setActiveChar(i);
                    }}
                  >
                    <img src={src} alt='' />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Layout>
      </section>
      <section className={styles.section3}>
        <Layout>
          <div className={styles.s3top}>
            <div className={styles.s3topLeft}>
              <div className={styles.futureWrap}>
                <Flame />
                <span className={styles.futureSpan}>FUTURE OF eSPORTS</span>
              </div>
              <h2 className={cx(styles.h2, styles.s3h2)}>Latest News & Articles</h2>
            </div>
            <Button2 name='Read More' />
          </div>
          <div className={styles.s3content}>
            <div className={styles.gamepad}>
              {/* <img src={imgGamepad} alt='' /> */}
              <div className={styles.gamepadImg}></div>
              <p className={styles.datev1}>April 2.2021</p>
              <Link to='#'>
                <h3 className={styles.h3v1}>
                  Esports Group teams up with the Indianapolis Colts
                </h3>
              </Link>
            </div>
            <div className={styles.gamer}>
              {/* <img src={imgGamer} alt='' /> */}
              <div className={styles.gamerImg}></div>
              <p className={styles.datev2}>April 2.2021</p>
              <Link to='#'>
                <h3 className={styles.h3v2}>NAVI reveals s1mple fifth anniversary</h3>
              </Link>
            </div>
            <div className={styles.pc}>
              {/* <img src={imgPc} alt='' /> */}
              <div className={styles.pcImg}></div>
              <p className={styles.datev2}>April 2.2021</p>
              <Link to='#'>
                <h3 className={styles.h3v2}>A1esports Shares new picture</h3>
              </Link>
            </div>
            <div className={styles.keyboard}>
              {/* <img src={imgKeyboard} alt='' /> */}
              <div className={styles.keyboardImg}></div>
              <p className={styles.datev2}>April 2.2021</p>
              <Link to='#'>
                <h3 className={styles.h3v2}>T1 unveil partnership with Razer</h3>
              </Link>
            </div>
            <div className={styles.eva}>
              {/* <img src={imgEva} alt='' /> */}
              <div className={styles.evaImg}></div>
              <p className={styles.datev2}>April 2.2021</p>
              <Link to='#'>
                <h3 className={styles.h3v2}>RX secures content partnership with</h3>
              </Link>
            </div>
          </div>
        </Layout>
      </section>
      {/* <Footer /> */}
    </>
  );
}
