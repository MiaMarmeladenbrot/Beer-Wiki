import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Detailpage.css";
import { Link, useParams } from "react-router-dom";

const Detailpage = () => {
  // state für gefetchte Daten:
  const [beerData, setBeerData] = useState([]);

  // state für gefilterte Daten:
  const [filteredBeer, setFilteredBeer] = useState([]);

  // useEffect, in dem die Daten gefetcht und im state gespeichert werden:
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => setBeerData(data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(beerData); //--> läuft

  // Link auslesen:
  const { id } = useParams();
  // console.log(id); //--> läuft

  // Find-Methode und gefilterte Daten im state speichern:
  useEffect(() => {
    const find = beerData.find((item) => item._id === id);
    // console.log(find); //--> läuft

    setFilteredBeer(find);
  }, [beerData]);
  // console.log(filteredBeer); //--> läuft

  return (
    <>
      {filteredBeer ? (
        <section className="detailpage">
          <img src={filteredBeer.image_url} alt="" />
          <article>
            <h1>{filteredBeer.name}</h1>
            <h3>{filteredBeer.tagline}</h3>
            <div>
              <p className="grey">First brewed:</p>
              <p className="grey">{filteredBeer.first_brewed}</p>
            </div>
            <div>
              <p className="grey">Attenuation level:</p>
              <p className="grey">{filteredBeer.attenuation_level}</p>
            </div>
            <p>{filteredBeer.description}</p>
            <Link to="/all">
              <img src="/img/arrow.png" alt="" />
            </Link>
          </article>
        </section>
      ) : (
        <p>Daten werden geladen</p>
      )}

      <Navbar />
    </>
  );
};

export default Detailpage;
