import {fetchingData, CouldNotLoadData, LoadData} from '../actions/actions';

const fetchJson = () => {
  console.log("Running fetch ...");

  return (dispatch) => {
    dispatch(fetchingData());
    fetch("http://localhost:5000/express")
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res;
      })
      .then(res => res.json())
      .then(data => dispatch(LoadData(data)))
      .catch((err) => dispatch(CouldNotLoadData(err)));
  }
}

export default fetchJson;