import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rockets';
import Rocket from './rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketList);

  const dispatch = useDispatch();
  const handleReservedRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  return (
    <div>
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          name={rocket.name}
          description={rocket.description}
          flickrImages={rocket.flickr_images}
          reserved={rocket.reserved}
          reservedRocket={() => handleReservedRocket(rocket.id)}
        />
      ))}
    </div>
  );
};

export default Rockets;
