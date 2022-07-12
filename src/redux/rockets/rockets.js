import axios from 'axios';

const GET_ROCKET = 'GET_ROCKET';
const RESERVE_ROCKET = 'RESERVE_ROCKET';

export const getRocket = (payload) => ({ type: GET_ROCKET, payload });
export const reserveRocket = (id) => ({ type: RESERVE_ROCKET, id });

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRocket = () => async (dispatch) => {
  const response = await axios.get(url);
  const data = await response.data;
  const rockets = [];
  data.forEach((rocket) => {
    rockets.push({
      id: rocket.id,
      name: rocket.rocket_name,
      description: rocket.description,
      flickr_images: rocket.flickr_images[0],
      reserved: false,
    });
  });
  dispatch(getRocket(rockets));
};

const rocketReducer = (state = [], action) => {
  if (action.type === GET_ROCKET) {
    return action.payload;
  }

  if (action.type === RESERVE_ROCKET) {
    const newState = state.map((rocket) => {
      if (rocket.id !== action.id) {
        return rocket;
      }
      return { ...rocket, reserved: !rocket.reserved };
    });
    return newState;
  }

  return state;
};

export default rocketReducer;
