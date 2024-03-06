import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./All.css";
import { Link } from "react-router-dom";

const All = () => {
  // state für gefetchte Daten:
  const [beerData, setBeerData] = useState();

  // useEffect, in dem die Daten gefetcht und im state gespeichert werden:
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => setBeerData(data))
      .catch((err) => console.log(err));
  }, []);
  //   console.log(beerData);

  return (
    <section className="all">
      {beerData ? (
        beerData.map((item, index) => (
          <div key={index}>
            <img src={item.image_url} alt={item.name} />
            <article>
              <h2>{item.name}</h2>
              <h3>{item.tagline}</h3>
              <p>Created by: {item.name}</p>
              <Link to={`/all/${item._id}`} className="button">
                Details
              </Link>
            </article>
          </div>
        ))
      ) : (
        <p>Produkte werden geladen</p>
      )}

      <Navbar />
    </section>
  );
};

export default All;
