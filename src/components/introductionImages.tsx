import fistImage from "../assets/images/component-01/Image-01.jpg";
import secondImage from "../assets/images/component-01/Image-02.jpg"
import thirdImage from "../assets/images/component-01/Image-03.jpg"
const IntroductionImages = () => {
    return (
        <div>
            <img src={fistImage}/>
            <img src={secondImage}/>
            <img src={thirdImage}/>
        </div>
    )
}

export default IntroductionImages;