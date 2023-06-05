import { FlipCard } from "../../components/flipCard/FlipCard";
import tove from "../../components/Assets/img/tove_linkedin.jpg";
import contact from "../../components/Assets/img/contact.jpg";
import toolbox from "../../components/Assets/img/toolbox.jpg";
import girl from "../../components/Assets/img/girlWithRedHat.jpg";
import texts from "../../components/Assets/data/Texts.json";
import styles from "./Home.module.scss";
import { BgContentSlide1, BgContentSlide2 } from "../../components/miniComponents/MiniComponents";

export const Home = () => {
  return (
    <div className={styles.home}>
        <div className={styles.flipCardContainer}>
          <section className={styles.firstCardSection}>
            <FlipCard ImgPath={tove} ImgAltText="Profile picture of Tove" Text={texts.ProfileText} HasBackside={false}/>
            <FlipCard ImgPath={girl} ImgAltText="Arrangement with sunglasses and other items to form a face on a pink background" Text={texts.ExtendedProfileText} HasBackside={true} BacksideContent={<BgContentSlide1/>}/>
          </section>
          <section className={styles.secondCardSection}>
            <FlipCard ImgPath={toolbox} ImgAltText="A green and red tool box" Text={texts.ProjectText} HasBackside={false} RoutePath={"/portfolio"}/>
            <FlipCard ImgPath={contact} ImgAltText="Arrangement with sunglasses and other items to form a face on a gray background. Hand is pointing up." Text={texts.ContactText} HasBackside={true} BacksideContent={<BgContentSlide2/>}/>
          </section>
        </div>
    </div>
  )
}
