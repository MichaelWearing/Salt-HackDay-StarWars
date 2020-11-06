export const fetchingData = () => {
    return {
        type: 'MOVIES_ARE_LOADING',
    };
}

export const CouldNotLoadData = (err) => {
    return {
        type: 'COULD_NOT_LOAD_MOVIES',
        payload: { bool: true, msg: err },
    };
}

export const LoadData = (arr) => {
    return {
        type: 'LOAD_MOVIES',
        payload: arr,
    };
}

export default { fetchingData, CouldNotLoadData, LoadData };