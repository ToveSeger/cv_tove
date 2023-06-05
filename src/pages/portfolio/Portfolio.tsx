import { FlipCard } from "../../components/flipCard/FlipCard";
import styles from "./Portfolio.module.scss";
import shoppingListan from "../../components/Assets/img/shoppingListan.jpg";
import animalGallery from "../../components/Assets/img/animalGallery.jpg";
import texts from "../../components/Assets/data/Texts.json";


export const Portfolio = () => {
  return (
    <div className={styles.portfolio}>       
      <main className={styles.cardContainer}>
        <FlipCard className={styles.flipCard} ImgPath={shoppingListan} ImgAltText="Screenshot of a project called ShoppingListan" Text={texts.ShoppingListan} HasBackside={false} RoutePath={"https://symphonious-cuchufli-64a3fc.netlify.app/"}/>
        <FlipCard className={styles.flipCard} ImgPath={animalGallery} ImgAltText="Screenshot of a project called AnimalGallery" Text={texts.AnimalGallery} HasBackside={false} RoutePath={"https://playful-duckanoo-845ee4.netlify.app/"}/>
      </main> 
    </div>
  )
}
