import ImageSlider from "../components/ImageSlider";
import UpNext from "./UpNext";
import FeaturedToday from "./FeaturedToday";
import Borntoday from "./borntoday";
const HomeBody = () => {
  return (
    <div className="w-full flex justify-around flex-wrap">
      <ImageSlider />
      <UpNext />
      <FeaturedToday />
      <Borntoday/>
    </div>
  )
}

export default HomeBody
