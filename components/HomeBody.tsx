import ImageSlider from "../components/ImageSlider";
import UpNext from "./UpNext";
import FeaturedToday from "./FeaturedToday";
import Borntoday from "./borntoday";
import UpcomingMovies from "./UpcomingMovies";
const HomeBody = () => {
  return (
    <div className="w-full flex justify-around flex-col">
      <div className="flex flex-col lg:flex-row w-full items-center">
      <ImageSlider />
      <UpNext />
      </div>
      <FeaturedToday />
      <Borntoday/>
      <UpcomingMovies/>
    </div>
  )
}

export default HomeBody
