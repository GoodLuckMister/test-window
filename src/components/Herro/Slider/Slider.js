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
                    <div className="point_slider"></div>
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
            <div className="herro-page">
                <Slider {...settings}>
                    <div>
                        <div >
                            <div className="circle-slider"></div>

                        </div>
                    </div>
                    <div>
                        <div className="circle-slider1"></div>
                    </div>
                    <div>
                        <div className="circle-slider2"></div>
                    </div>
                </Slider>
            </div>
        </>
    )
}