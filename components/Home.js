import styles from '../styles/Home.module.css';
import Phantom from '../components/Phantom';
import Enceinte from './Enceinte';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingBag, faLocationDot, faUser} from '@fortawesome/free-solid-svg-icons';

function Home() {

  const phantom = { 'fontSize': '15px' };
  const implosiveSound = {'fontSize': '35px', 'fontWeight': 'bold' };

  const background = []
  for (let i=1; i < 5; i++) {
      background.push(<Phantom number={i} />) 
  }

  return (
    <div>
      <main className={styles.main}>
        <main className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.menu}>
              <button className={styles.btn}>
              <FontAwesomeIcon icon={faBars} className={styles.icon}/>
              </button>
            </div>
            <span className={styles.title}>MUSIC STORE</span>
            <div className={styles.menu}>
              <button className={styles.btn}><FontAwesomeIcon icon={faUser} className={styles.icon}/></button>
              <button className={styles.btn}><FontAwesomeIcon icon={faLocationDot} className={styles.icon}/></button>
              <button className={styles.btn}><FontAwesomeIcon icon={faShoppingBag} className={styles.icon}/></button>
            </div>
          </div>
          <div className={styles.headerBottom}>
            <div className={styles.headerTxt}>
              <span style={phantom}>PHANTOM</span>
              <span style={implosiveSound}>IMPLOSIVE SOUND</span>
            </div>
            <div className={styles.headerBtn}>
              <button className={styles.discoverBtn}>DISCOVER</button>
              <button className={styles.buyBtn}>BUY</button>
            </div>
          </div>
        </main>
        <main className={styles.container1}>
          <div className={styles.container1Txt}>
            <span className={styles.latest}>LATEST LAUNCH</span>
            <span className={styles.dione}>DIONE SOUNDBAR</span>
          </div>
          <img className={styles.image} src="soundbar.png" alt="Soundbar" />   
          <Enceinte />     
        </main>
        <main className={styles.container2}>
          {background}
        </main>
        <main className={styles.footer}>
          <button className={styles.footerBtn}>ABOUT</button>
          <button className={styles.footerBtn}>CONTACT</button>
          <button className={styles.footerBtn}>SUPPORT</button>
          <button className={styles.footerBtn}>STORES</button>
        </main>
      </main>
    </div>
  );
}

export default Home;
