import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import styles from "./Carousel.module.scss";
import tove from "../Assets/img/tove_linkedin.jpg";
import contact from "../Assets/img/contact.jpg";
import toolbox from "../Assets/img/toolbox.jpg";
import lama from "../Assets/img/curious_lama.jpg";
import texts from "../Assets/data/Texts.json"
import CarouselCard from '../carouselCard/CarouselCard';
import { FlipCard } from '../flipCard/FlipCard';
import {BgContentSlide1, BgContentSlide2} from '../miniComponents/MiniComponents';



export const Carousel = () => {
    const back= "<";
    const next= ">"


    return (
        <div className={styles.carouselContainer}>
            <CarouselProvider
            naturalSlideWidth={600}
            naturalSlideHeight={800}
            totalSlides={4}
            >
            <div className={styles.sliderWrapper}>
                <p className={styles.hiddenText}>Nothing here to see</p>
                    <Slider className={styles.slider}>
                         <Slide className={styles.slide} index={0}>
                            <FlipCard ImgPath={tove} ImgAltText="Picture of Tove" Text={texts.ProfileText} HasBackside={false}/>
                        </Slide>
                        <Slide className={styles.slide} index={1}>
                            <FlipCard ImgPath={lama} ImgAltText="Picture of a curious lama" Text={texts.ExtendedProfileText} HasBackside={true} BacksideContent={<BgContentSlide1/>}/>
                        </Slide>
                        <Slide className={styles.slide} index={2}>
                            <FlipCard ImgPath={toolbox} ImgAltText="Picture of tool boxes" Text={texts.ProjectText} HasBackside={false} RoutePath={"/portfolio"}/>
                        </Slide>
                        <Slide className={styles.slide} index={3}>
                            <FlipCard ImgPath={contact} ImgAltText="Picture of a typewriting printing the words contact" Text={texts.ContactText} HasBackside={true} BacksideContent={<BgContentSlide2/>}/>
                        </Slide>
                    </Slider>
                    <div className={styles.carouselButtons}>
                        <ButtonBack className={styles.navButton}>{back}</ButtonBack>
                        <ButtonNext className={styles.navButton}>{next}</ButtonNext>
                    </div>
            </div>
            </CarouselProvider>
        </div>
        );
}
