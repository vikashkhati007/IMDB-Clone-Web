import ImageSlider from "../components/ImageSlider";
import UpNext from "./UpNext";

const HomeBody = () => {
  return (
    <div className="w-full h-screen flex justify-around flex-wrap">
    <ImageSlider/>
      <UpNext/>
    </div>
  )
}

export default HomeBody
