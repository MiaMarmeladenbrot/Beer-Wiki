import "./Home.css";

import { useEffect, useState } from "react";
import HomePreview from "../../components/HomePreview/HomePrevies";

const Home = () => {
  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => res.json())
      .then((data) => setRandomBeer(data))
      .catch((err) => console.log(err));
  }, []);

  // console.log(randomBeer); //--> läuft

  return (
    <section className="home">
      <HomePreview
        img="/img/beerwall.jpg"
        h2="See all Beers"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis."
        link="/all"
      />

      <HomePreview
        img="/img/beerglasses.png"
        h2="Get random Beer"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis."
        link={`/all/${randomBeer._id}`}
      />
    </section>
  );
};

export default Home;
