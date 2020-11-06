import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import fetchJson from "../http/httpClient";
import '../style/character.css';

const Character = ({ character, planet }) => {
    const history = useHistory();
    const location = useLocation();

    const backToPlanets = () => {
        const goBack = `/AllCharacters/${planet}`;
        history.push(goBack);
      }

    return (
        <>
            <h1 className="character-header">{character.name}</h1>
            <section className="character">
                <img className="character-image" src={character.image} />
                <section className="characterInfo">
                    <p>Name: {character.apiData.name}</p>
                    <p>Height: {character.apiData.height}</p>
                    <p>Mass: {character.apiData.mass}</p>
                    <p>Hair Color: {character.apiData.hair_color}</p>
                    <p>Skin Color: {character.apiData.skin_color}</p>
                    <p>Eye Color: {character.apiData.eye_color}</p>
                    <p>Birth Year: {character.apiData.birth_year}</p>
                    <p>Gender: {character.apiData.gender}</p>
                </section>
            </section>
            <button className="character-back" onClick={backToPlanets}>BACK</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(Character);