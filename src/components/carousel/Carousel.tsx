import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import styles from "./Carousel.module.scss";
import tove from "../Assets/img/tove_linkedin.jpg";
import contact from "../Assets/img/contact.jpg";
import toolbox from "../Assets/img/toolbox.jpg";
import lama from "../Assets/img/curious_lama.jpg";
import texts from "../Assets/data/Texts.json"
import CarouselCard from '../carouselCard/CarouselCard';


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
                            <CarouselCard ImgPath={tove} ImgAltText="Picture of Tove" Text={texts.ProfileText}/>
                        </Slide>
                        <Slide className={styles.slide} index={1}>
                        <CarouselCard ImgPath={lama} ImgAltText="Picture of a curious lama" Text={texts.ExtendedProfileText} ButtonUrl="/about"/>
                        </Slide>
                        <Slide className={styles.slide} index={2}>
                        <CarouselCard ImgPath={toolbox} ImgAltText="Picture of tool boxes" Text={texts.ProjectText} ButtonUrl="/portfolio"/>
                        </Slide>
                        <Slide className={styles.slide} index={3}>
                        <CarouselCard ImgPath={contact} ImgAltText="Picture of a typewriting printing the words contact" Text={texts.ContactText} ButtonUrl="/"/>
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
