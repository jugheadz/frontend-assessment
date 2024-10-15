import fistImage from "../assets/images/component-01/Image-01.jpg";
import secondImage from "../assets/images/component-01/Image-02.jpg";
import thirdImage from "../assets/images/component-01/Image-03.jpg";
const IntroductionImages = () => {
  return (
    <div className="flex flex-col gap-4 w-full items-center lg:w-2/3 md:flex-row">
      <div><img src={fistImage} /></div>
      <div className="flex flex-col justify-between gap-y-4">
      <img src={secondImage}/>
      <img src={thirdImage}/>
      </div>
    </div>
  );
};

export default IntroductionImages;
