import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import fetchJson from "../http/httpClient";
import '../style/planets.css';

const Planets = ({ setPlanet }) => {

    const history = useHistory();
    const location = useLocation();

    const [state, setstate] = useState('STE');

    const getLuke = async () => {
        const response = await fetch('http://localhost:5000/luke');
        const body = await response.json();
        if (response.status !== 200) throw new Error(body.message);

        setstate(body);
        return body;
    }
    const getR2 = async () => {
        const response = await fetch('http://localhost:5000/R2-D2');
        const body = await response.json();
        if (response.status !== 200) throw new Error(body.message);

        setstate(body);
        return body;
    }
    const getDarth = async () => {
        const response = await fetch('http://localhost:5000/DarthVader');
        const body = await response.json();
        if (response.status !== 200) throw new Error(body.message);

        setstate(body);
        return body;
    }

    const goToTatooine = () => {
        setPlanet('Tatooine');
        history.push('/AllCharacters/Tatooine');
    };
    const goToAlderaan = () => {
        setPlanet('Alderaan');
        history.push('/AllCharacters/Alderaan');
    };
    const goToNaboo = () => {
        setPlanet('Naboo');
        history.push('/AllCharacters/Naboo');
    };
    const goToKamino = () => {
        setPlanet('Kamino');
        history.push('/AllCharacters/Kamino');
    };

    return (
        <>
            <h1 className="planets-header"> Choose a Planet!</h1>

            <ul className="planet-buttons">
                {state.name}
                <input className="tatooine all-planets" onClick={goToTatooine} type="image" src="https://jkhub.org/wiki/images/archive/0/01/20200315143942%21Tatooine.png" />
                <input className="alderaan all-planets" onClick={goToAlderaan} type="image" src="https://zam.zamimg.com/images/e/8/e86ba81c42e39563675f248e8366f9b4.png" />
                <input className="naboo all-planets" onClick={goToNaboo} type="image" src="https://custom.swcombine.com/static/8/4/34-13715-1558966795-large.png" />
                <input className="kamino all-planets" onClick={goToKamino} type="image"  src="https://lh3.googleusercontent.com/proxy/3amvkw5tofSaA2wXgDOBDDB2tvQIOkk0xmTSPePXVwpOLpdHyu0npk-1StTTChHC8jpcPqrpim6q6OQUWt8l1BceVgoWY9EE0kMdmdHWiW3M_33iYdFYOmj_ygU" />
            </ul>
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
export default connect(mapStateToProps, mapDispatchToProps)(Planets);