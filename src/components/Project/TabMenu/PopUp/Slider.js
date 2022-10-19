import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';

import styles from './PopUp.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './Swiper.css';

const cx = classNames.bind(styles);

function Slider({ data }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const sliderImage = data.img;

    const [imgContain, setImgContain] = useState(sliderImage);

    useEffect(() => {
        setImgContain(sliderImage);
    }, [sliderImage]);
    return (
        <div>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                navigation={true}
                modules={[FreeMode, Navigation, Thumbs]}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                className="mySwiper2"
            >
                {imgContain.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img className={cx('slide-img')} src={img} alt="pic"></img>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* sub-slide */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {imgContain.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img className={cx('sub-img')} src={img} alt="pic"></img>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slider;
