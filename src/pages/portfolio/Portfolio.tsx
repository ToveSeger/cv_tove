import { FlipCard } from "../../components/flipCard/FlipCard";
import styles from "./Portfolio.module.scss";
import shoppingListan from "../../components/Assets/img/shoppingListan.jpg";
import animalGallery from "../../components/Assets/img/animalGallery.jpg";
import reactWebShop from "../../components/Assets/img/reactWebShop.jpg";
import texts from "../../components/Assets/data/Texts.json";


export const Portfolio = () => {
  return (
    <div className={styles.portfolio}>       
      <main className={styles.cardContainer}>
        <FlipCard className={styles.flipCard} ImgPath={shoppingListan} ImgAltText="Screenshot of a project called ShoppingListan" Text={texts.ShoppingListan.Description} Link={texts.ShoppingListan.GitHubLink} RoutePath={"https://symphonious-cuchufli-64a3fc.netlify.app/"}/>
        <FlipCard className={styles.flipCard} ImgPath={animalGallery} ImgAltText="Screenshot of a project called AnimalGallery" Text={texts.AnimalGallery.Description} Link={texts.AnimalGallery.GitHubLink} RoutePath={"https://playful-duckanoo-845ee4.netlify.app/"}/>
        <FlipCard className={styles.flipCard} ImgPath={reactWebShop} ImgAltText="Screenshot of a project called AnimalGallery" Text={texts.ReactWebShop.Description} Link={texts.ReactWebShop.GitHubLink} RoutePath={"https://silver-unicorn-1bc6c2.netlify.app/"}/>
      </main> 
    </div>
  )
}
