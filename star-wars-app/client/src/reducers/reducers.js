import { combineReducers } from 'redux';

function LoadData(state = [], action) {
  switch (action.type) {
    case 'LOAD_DATA':
      return {
        loading: false,
        data: action.payload,
        error: "",
      }
    default:
      return state;
  }
}

function fetchingData(state = false, action) {
  switch (action.type) {
    case 'DATA_IS_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

function CouldNotLoadData(state = false, action) {
  switch (action.type) {
    case 'COULD_NOT_LOAD_DATA':
      return {
        loading: false,
        data: [],
        error: action.payload.msg,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({isLoading: fetchingData, error: CouldNotLoadData, data: LoadData});

export default rootReducer