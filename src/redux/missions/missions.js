import axios from 'axios';

const GET_MISSION = 'GET_MISSION';
const JOIN_MISSION = 'JOIN_MISSION';

export const getMissions = (payload) => ({ type: GET_MISSION, payload });
export const joinMission = (id) => ({ type: JOIN_MISSION, id });

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = () => async (dispatch) => {
  const response = await axios.get(url);
  const data = await response.data;
  const missions = [];
  data.forEach((mission) => {
    missions.push({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      reserved: false,
    });
  });
  dispatch(getMissions(missions));
};

const missionReducer = (state = [], action) => {
  if (action.type === GET_MISSION) {
    if (state.length === 0) {
      return action.payload;
    }
    return state;
  }

  if (action.type === JOIN_MISSION) {
    const newState = state.map((mission) => {
      if (mission.id !== action.id) {
        return mission;
      }
      return { ...mission, reserved: !mission.reserved };
    });
    return newState;
  }

  return state;
};

export default missionReducer;
