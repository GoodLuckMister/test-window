import Aside from "../Aside";
import MakingSlider from "../Slider/Slider";
import './herro.css'
import MobileBody from "./Mobile";


export default function SimpleSlider() {

    return (
        <>
            <MobileBody />
            <div className="for-flex">
                <Aside />
                <MakingSlider />
            </div>
        </>
    );
}