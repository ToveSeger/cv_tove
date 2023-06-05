import styles from "./MiniComponents.module.scss";
import { SiLinkedin } from 'react-icons/si';

export function BgContentSlide1(){

    return(
        <div className={styles.bgContentSlide1}>
        <p className={styles.listHeading}>Fem helt onödiga fakta</p>
        <ol>
            <li>
                Jag får alldeles för mycket handsvett av att fickparkera för att det ens ska vara ett alternativ för mig
            </li>
            <li>
                Personer som tycker om hundar är per automatik liiite bättre människor enligt mig
            </li>
            <li>
                En gång hackade jag habanero utan handskar, helt ovetandes om hur stark den var. Maten gick inte att äta och jag fick spendera resten av kvällen med händerna i skålar med kallt vatten
            </li>
            <li>
                Jag kan sjunga med stängd mun
            </li>
            <li>
                Jag har dragit 100kg i marklyft
            </li>
        </ol>
    </div>
    )
}

export function BgContentSlide2(){
    return(
        <div className={styles.bgContentSlide2}>
           <span className={styles.itemContainer}>
                <p className={styles.label}>Mobil:</p>
                <p>070 84 58 395</p>
            </span>             
            <span className={styles.itemContainer}>
                <p className={styles.label}>e-mail:</p>
                <p>tove.seger@outlook.com</p>
            </span>
            <a className={styles.itemContainer} href={"https://www.linkedin.com/in/tove-seger-2940318b/"}>
                <SiLinkedin className={styles.linkedinIcon}/>
            </a>
        </div>
    )
}