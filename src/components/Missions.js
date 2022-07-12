import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { joinMission, fetchMissions } from '../redux/missions/missions';

const bgVariant = {
  backgroundColor: '#D3D3D3',
};

const bgWhite = {
  backgroundColor: '#fff',
};

const Missions = () => {
  const missions = useSelector((state) => state.missions);

  const dispatch = useDispatch();
  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return (
    <table className="missions-table">
      <thead>
        <tr>
          <th className="mission-title">Mission</th>
          <th className="mission-description">Description</th>
          <th className="mission-status">status</th>
          <th className="mission-status"> </th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr
            key={mission.mission_id}
            style={missions.indexOf(mission) % 2 === 0 ? bgVariant : bgWhite}
          >
            <td>{mission.name}</td>
            <td>{mission.description}</td>
            <td>
              <p className="membership-btn">
                {!mission.reserved && 'NOT A MEMBER'}
                {mission.reserved && 'ACTIVE MEMBER'}
              </p>
            </td>
            <td>
              {!mission.reserved && (
              <button
                type="button"
                onClick={() => {
                  handleJoinMission(mission.id);
                }}
                className="join-btn"
              >
                join mission
              </button>
              )}
              {mission.reserved && (
              <button
                type="button"
                onClick={() => { handleJoinMission(mission.id); }}
                className="join-btn"
              >
                leave mission
              </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
