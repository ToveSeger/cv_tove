import { useState } from 'react';
import styles from './FlipCard.module.scss';
import IFlipCard from '../../interfaces/IFlipCard';
import { TbHandClick } from 'react-icons/tb';


export const FlipCard = (props:IFlipCard) => {

  const [turn,setTurn]=useState(false);

  const toggleTurn=()=>{
    turn?setTurn(false):setTurn(true);
  }

  return (
      <div className={turn ? styles.flipCard + " " + props.className + " " + styles.turn : styles.flipCard + " " + props.className}>
          <div className={styles.flipCardContent}>
              <div className={styles.flipCardFront}>
              {props.ImgPath&&
                <div className={styles.picContainer}>
                  <img className={styles.pic} src={props.ImgPath} alt={props.ImgAltText}/>
                </div>
                    }
               <p className={styles.cardText}>{props.Text}</p>
               {props.HasBackside&&
                 <a className={styles.button} onClick={()=>toggleTurn()}>
                      <TbHandClick/>
                    </a>
                }
                 {props.RoutePath&&
                 <a className={styles.button} href={props.RoutePath}>
                      <TbHandClick/>
                    </a>
                }
                </div>
              <div className={styles.flipCardBack}>
                  {props.BacksideContent}
                  <a className={styles.button} onClick={()=>toggleTurn()}>
                    <TbHandClick/>
                  </a>
              </div>
          </div>
      </div>
  )
}

