import { Card } from "../../components/card/Card";
import { TextBlock } from "../../components/textBlock/TextBlock";
import styles from "./About.module.scss";

export const About = () => (
    <div className={styles.about}>
        <div className={styles.aboutContainer}>
            {/* <TextBlock
        Heading="Mamma, fru, hundnörd, träningstok"
        Text="Ja, de där orden sammanfattar nog privata Tove ganska bra. På fritiden hittar man mig antingen i löpspåret, i växthuset, hängandes med barnen eller ockuperad med diverse renoveringsprojekt.
        Stilla är jag sällan när jag inte jobbar."
        /> */}
        <div className={styles.cardContainer}>
            <Card className={styles.card}>
                <p>Om Tove</p>
                <ul>
                    <li>
                        <p><span className={styles.bulletLabel}>Bor:</span> Laholm</p>
                        
                    </li>
                    <li>
                        <p><span className={styles.bulletLabel}>Familj:</span> Man, två barn på 4 & 6, två hundar & två kaniner</p>
                        
                    </li>
                    <li>
                        <p><span className={styles.bulletLabel}>Jobbar just nu:</span> På Epical som konsult inom Modern Workspace</p>
                        
                    </li>

                </ul>
            </Card>
            <Card className={styles.card}>
                <p>Fem helt onödiga fakta</p>
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
                </ol>
            </Card>
        </div>
        </div>
    </div>
)
