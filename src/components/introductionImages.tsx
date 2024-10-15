import fistImage from "../assets/images/component-01/Image-01.jpg";
import secondImage from "../assets/images/component-01/Image-02.jpg";
import thirdImage from "../assets/images/component-01/Image-03.jpg";
const IntroductionImages = () => {
  return (
    <div className="flex flex-row gap-4 w-2/3 max-h-[600px]">
      <div><img className="row-span-3" src={fistImage} /></div>
      <div className="flex flex-col justify-between ">
      <img className="col-span-2" src={secondImage}/>
      <img className="col-span-2" src={thirdImage}/>
      </div>
    </div>
  );
};

export default IntroductionImages;
