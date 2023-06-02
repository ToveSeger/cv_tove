import ICarouselCard from "../../interfaces/ICarouselCard";
import styles from "./CarouselCard.module.scss"


const CarouselCard = (props:ICarouselCard) => {
  return (
    <div className={styles.cardContainer}>
      {props.ImgPath&&
          <img className={styles.pic} src={props.ImgPath} alt={props.ImgAltText}/>
      }
      <p>{props.Text}</p>
    </div>
  )
}

export default CarouselCard