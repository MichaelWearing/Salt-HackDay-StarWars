import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import fetchJson from "../http/httpClient";

const StarWars = ({ data, fetchJson }) => {
  
  useEffect(() => {
    fetchJson();
    console.log('UseEffect ran fetchJson()');
  }, [fetchJson]);

  const allMovies = () => {
    if (data) {
      console.log("working");
    }
  }

  const [state, setstate] = useState('STE');

  const getResponse = async () => {
    const response = await fetch('http://localhost:5000/luke');
    const body = await response.json();
    if (response.status !== 200) throw new Error(body.message);

    setstate(body);
    return body;
  }

  return (
    <>
      <h1>Movie List!</h1>

      <ul>
        {allMovies()}
        <h2> Hey you! {state.name} He is this tall: {state.height} </h2>
        <button onClick={getResponse}>Hey</button>
      </ul>
    </>
  );
};
const mapStateToProps = (state) => ({
  data: state.data,
});
const mapDispatchToProps = (dispatch) => {
  return {
    fetchJson: () => dispatch(fetchJson()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StarWars);