import MovieDetails from "../../components/MovieDetails/MovieDetails"
import MovieSlider from "../../components/MovieSlider/MovieSlider"
import Navbar from "../../components/Navbar/Navbar"

import "./home.scss"

const Home = () => {
    return (
        <div className="home">
          <Navbar />
          <MovieDetails />
          <MovieSlider />
          </div>
    )
}

export default Home
