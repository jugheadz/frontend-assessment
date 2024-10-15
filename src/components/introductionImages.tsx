import fistImage from "../assets/images/component-01/Image-01.jpg";
import secondImage from "../assets/images/component-01/Image-02.jpg";
import thirdImage from "../assets/images/component-01/Image-03.jpg";
import ImageDialog from "./imageDialog";

const IntroductionImages = () => {
  return (
    <div className="flex flex-col gap-4 w-full items-center lg:w-2/3 md:flex-row">
      <div>
        <ImageDialog>
          <img src={fistImage} />
        </ImageDialog>
      </div>
      <div className="flex flex-col justify-between gap-y-4">
        <ImageDialog>
          <img src={secondImage} />
        </ImageDialog>
        <ImageDialog>
          <img src={thirdImage} />
        </ImageDialog>
      </div>
    </div>
  );
};

export default IntroductionImages;
