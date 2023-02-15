import Enceinte from './Enceinte';
import styles from '../styles/Phantom.module.css';

function Phantom(props) {

    
    const phantomsData = [
        {light: 'PHANTOM I White', bold: 'A class of its own.'},
        {light: 'PHANTOM II Gold', bold: 'Pure sound.'},
        {light: 'PHANTOM II Black', bold: 'Deeply nomadic.'},
        {light: 'PHANTOM II White', bold: 'Intensively immersive.'},
    ]

    const phantomToDisplay = (
        <div className={styles.displayTxt}>
            <span className={styles.light}>{phantomsData[props.number-1].light}</span>
            <span className={styles.bold}>{phantomsData[props.number-1].bold}</span>
        </div>
    )

    
    const background = {'background-image': `url('/phantom${props.number}.png')`, 'background-size': 'cover'}

    return (
        <div className={styles.phantom} style={background} >
            <div className={styles.txtPerso}>
                {phantomToDisplay}
                <Enceinte />
            </div>
        </div>  
    )
}

export default Phantom;