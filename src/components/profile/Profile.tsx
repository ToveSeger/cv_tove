import styles from "./Profile.module.scss"
import tove from "../../img/tove_linkedin.jpg"

export default function Profile() {
  return (
    <div className={styles.profileContainer} >
        <img className={styles.profilePic} src={tove} alt="Picture of Tove"/>
        <section className={styles.profileText}>
            <p>
            En idésprudlande arbetsmyra med konstant många järn i elden.
            I hetluften trivs och presterar jag bäst.
            Jag fullkomligt älskar att lära mig nya saker och hoppar gärna på projekt där jag initialt sett
            känner att jag tagit mig vatten över huvudet. Hittills har det aldrig varit sanningen –
            bara som ett svettigt intervallpass: gränstestande och krävande under tiden,
            med slutresultatet att man blir en stoltare och starkare person!
            </p>
        </section>
    </div>
  )
}
