/* eslint-disable jsx-a11y/anchor-is-valid */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}


export default function MakingSlider() {
    const settings = {
        customPaging(i) {
            return (

                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a href="#">
                    <div className="point_slider-mobile"></div>
                </a>

            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <div>
                <Slider {...settings}>
                    <div>
                        <div >
                            <div className="body-slide">
                                <button className="button-mobile__slider">Скидки -20 %</button>
                                <div className="mobile-body__image"></div>
                                <div>
                                    <h3 className="title-mobile">Доступные цены на окна Rehau</h3>
                                    <p className="text-mobile">Акция к лету</p>
                                    <p className="text-data">Металлопластиковые окна и двери уже почти
                                        два десятилетия активно используются
                                        на рынке остекления, что объясняется
                                        большим разнообразием дизайнерских решений,
                                        отличными эксплуатационными характеристиками,
                                        длительным сроком использования.
                                        Компания «Орнет» с 2004 года выполняет остекление
                                        квартир, частных домов.</p>


                                    <a href="#" className="link">Подробнее...</a>
                                </div></div>

                        </div>
                    </div>
                    <div>
                        <div className="body-slide">
                            <button className="button-mobile__slider">Скидки -20 %</button>
                            <div className="mobile-body__image1"></div>
                            <div>
                                <h3 className="title-mobile">Доступные цены на окна Rehau</h3>
                                <p className="text-mobile">Акция к лету</p>
                                <p className="text-data">Металлопластиковые окна и двери уже почти
                                    два десятилетия активно используются
                                    на рынке остекления, что объясняется
                                    большим разнообразием дизайнерских решений,
                                    отличными эксплуатационными характеристиками,
                                    длительным сроком использования.
                                    Компания «Орнет» с 2004 года выполняет остекление
                                    квартир, частных домов.</p>


                                <a href="#" className="link">Подробнее...</a>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="body-slide">
                            <button className="button-mobile__slider">Скидки -20 %</button>
                            <div className="mobile-body__image2"></div>
                            <div>
                                <h3 className="title-mobile">Доступные цены на окна Rehau</h3>
                                <p className="text-mobile">Акция к лету</p>
                                <p className="text-data">Металлопластиковые окна и двери уже почти
                                    два десятилетия активно используются
                                    на рынке остекления, что объясняется
                                    большим разнообразием дизайнерских решений,
                                    отличными эксплуатационными характеристиками,
                                    длительным сроком использования.
                                    Компания «Орнет» с 2004 года выполняет остекление
                                    квартир, частных домов.</p>


                                <a href="#" className="link">Подробнее...</a>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}