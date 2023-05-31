import styles from "./CarouselCard.module.scss"
import { TbHandClick } from 'react-icons/tb';


export interface ICarouselCard{
    ImgPath?:string;
    ImgAltText?:string;
    Text:string;
    ButtonUrl?:string;
}

const CarouselCard = (props:ICarouselCard) => {
  return (
    <div className={styles.cardContainer}>
    {props.ImgPath&&
        <img className={styles.pic} src={props.ImgPath} alt={props.ImgAltText}/>
    }
    <p>{props.Text}</p>
    {props.ButtonUrl&&
      <a className={styles.button} href={props.ButtonUrl}>
        <TbHandClick/>
      </a>
    }
    </div>
  )
}

export default CarouselCard