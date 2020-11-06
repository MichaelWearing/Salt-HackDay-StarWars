import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import fetchJson from "../http/httpClient";
import '../style/startPage.css';

const StartPage = ({ character }) => {
    const history = useHistory();
    const location = useLocation();

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log('do validate');
            history.push('/');
            return;
        }
    }

    return (
        <div className="start-page-body">
            <div className="wrapper">
                <div className="scroll-text">
                    <h1 className="first-header">STAR WARS</h1>

                    <h2 className="second-header">In a Galaxy far far away...</h2>
                    <p className="first-p-tag">
                        There was a man named Michael and this was his Star Wars app! I hope you enjoyed your hack day! This is an app that uses the Star Wars api (SWAPI).
                        My backend makes a fetch to the an external api (SWAPI) before sending data to my front end. The flow of the app is as follows:
                </p>
                    <p className="second-p-tag">
                        You start by choosing a home planet. Once you have made your choice you are able to choose from some of the characters from the Star Wars universe
                        that come from that planet! Once you have made your choice, you are able to get some information from SWAPI!
                </p>
                    <p className="finish-p-tag">
                        Press Enter to proceed to the App
                </p>
                    <input type="text" onKeyDown={handleKeyDown} />
                </div>
            </div>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(StartPage);