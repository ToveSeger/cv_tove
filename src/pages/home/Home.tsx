import { Carousel } from "../../components/carousel/Carousel";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={styles.home}>
        <div className={styles.carousel}>
        <Carousel/>
        </div>
  </div>
  )
}
