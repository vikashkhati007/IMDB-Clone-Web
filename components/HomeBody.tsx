import ImageSlider from "../components/ImageSlider";
import UpNext from "./UpNext";
import FeaturedToday from "./FeaturedToday";

const HomeBody = () => {
  return (
    <div className="w-full h-screen flex justify-around flex-wrap">
      <ImageSlider />
      <UpNext />
      <FeaturedToday />
    </div>
  )
}

export default HomeBody
