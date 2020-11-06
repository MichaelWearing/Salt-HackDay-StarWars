import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import fetchJson from "../http/httpClient";
import '../style/allCharacters.css';

const AllCharacters = ({ planet, setCharacter }) => {
  const history = useHistory();
  const location = useLocation();


  const [state, setstate] = useState('STE');

  const fetchData = async (id) => {
    const response = await fetch(`http://localhost:5000/${id}`);
    const body = await response.json();
    if (response.status !== 200) throw new Error(body.message);
    return body;
  }

  const lukeSkywalker = async () => {
    const apiData = await fetchData(1);
    setCharacter({
      name: 'Luke Skywalker',
      image: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png',
      apiData: apiData,
    });
    history.push('/lukeSkywalker');
  }
  const c3p0 = async () => {
    const apiData = await fetchData(2);
    setCharacter({
      name: 'C3-PO',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png',
      apiData: apiData,
    });
    history.push('/c3p0');
  }
  const darthVader = async () => {
    const apiData = await fetchData(3);
    setCharacter({
      name: 'Darth Vader',
      image: 'https://upload.wikimedia.org/wikipedia/en/7/76/Darth_Vader.jpg',
      apiData: apiData,
    });
    history.push('/darthVader');
  }

  const princessLeia = async () => {
    const apiData = await fetchData(5);
    setCharacter({
      name: 'Princess Leia',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg',
      apiData: apiData,
    });
    history.push('/princessLeia');
  }
  const bailOrgana = async () => {
    const apiData = await fetchData(68);
    setCharacter({
      name: 'Bail Organa',
      image: 'https://upload.wikimedia.org/wikipedia/en/d/db/BailOrgana.jpeg',
      apiData: apiData,
    });
    history.push('/bailOrgana');
  }

  const r2d2 = async () => {
    const apiData = await fetchData(3);
    setCharacter({
      name: 'R2D2',
      image: 'https://upload.wikimedia.org/wikipedia/en/3/39/R2-D2_Droid.png',
      apiData: apiData,
    });
    history.push('/r2d2');
  }
  const palpatine = async () => {
    const apiData = await fetchData(21);
    setCharacter({
      name: 'Palpatine',
      image: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Emperor_RotJ.png',
      apiData: apiData,
    });
    history.push('/palpatine');
  }
  const padméAmidala = async () => {
    const apiData = await fetchData(35);
    setCharacter({
      name: 'Padmé Amidala',
      image: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Amidala.png',
      apiData: apiData,
    });
    history.push('/padméAmidala');
  }
  const jarJarBinks = async () => {
    const apiData = await fetchData(36);
    setCharacter({
      name: 'Jar Jar Binks',
      image: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Jjportrait.jpg',
      apiData: apiData,
    });
    history.push('/jarJarBinks');
  }

  const bobaFett = async () => {
    const apiData = await fetchData(22);
    setCharacter({
      name: 'Boba Fett',
      image: 'https://upload.wikimedia.org/wikipedia/en/3/3e/FettbobaJB.png',
      apiData: apiData,
    });
    history.push('/bobaFett');
  }



  const whichPlanet = () => {
    if (planet === 'Tatooine') {
      return (
        <>
          <ul className="charactersFromPlanet">
            <input className="all-characters luke-skywalker" onClick={lukeSkywalker} type="image" src="https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png" />
            <input className="all-characters c3p0" onClick={c3p0} type="image" src="https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png" />
            <input className="all-characters darth-vader" onClick={darthVader} type="image" src="https://upload.wikimedia.org/wikipedia/en/7/76/Darth_Vader.jpg" />
          </ul>
        </>
      );
    }
    if (planet === 'Alderaan') {
      return (
        <>
          <ul className="charactersFromPlanet">
            {state.name}
            <input className="all-characters princess-leia" onClick={princessLeia} type="image" src="https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg" />
            <input className="all-characters bail-organa" onClick={bailOrgana} type="image" src="https://upload.wikimedia.org/wikipedia/en/d/db/BailOrgana.jpeg" />
          </ul>
        </>
      );
    }
    if (planet === 'Naboo') {
      return (
        <>
          <ul className="charactersFromPlanet">
            {state.name}
            <input className="all-characters r2d2" onClick={r2d2} type="image" src="https://upload.wikimedia.org/wikipedia/en/3/39/R2-D2_Droid.png" />
            <input className="all-characters palpatine" onClick={palpatine} type="image" src="https://upload.wikimedia.org/wikipedia/en/8/8f/Emperor_RotJ.png" />
            <input className="all-characters padmé-amidala" onClick={padméAmidala} type="image" src="https://upload.wikimedia.org/wikipedia/en/e/ee/Amidala.png" />
            <input className="all-characters jar-jar-binks" onClick={jarJarBinks} type="image" src="https://upload.wikimedia.org/wikipedia/en/4/4b/Jjportrait.jpg" />
          </ul>
        </>
      );
    }
    if (planet === 'Kamino') {
      return (
        <>
          <ul className="charactersFromPlanet">
            {state.name}
            <input className="all-characters boba-fett" onClick={bobaFett} type="image" src="https://upload.wikimedia.org/wikipedia/en/3/3e/FettbobaJB.png" />
          </ul>
        </>
      );
    }
  }

  const backToPlanets = () => {
    history.push('/');
  }

  return (
    <>
      <h1 className="planets-header">{planet}</h1>
      {whichPlanet()}
      <button className="all-characters-back" onClick={backToPlanets}>BACK</button>
    </>
  );
};
const mapStateToProps = (state) => ({
  movies: state.movies,
});
const mapDispatchToProps = (dispatch) => {
  return {
    fetchJson: () => dispatch(fetchJson()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllCharacters);