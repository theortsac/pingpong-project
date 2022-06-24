import './styles.css';
import { usePlayerProfileQuery } from '../../generated/graphql';

interface IdInterface {
  _id: number;
}

const className = 'PlayerProfile';

const PlayerProfile = ({ _id }: IdInterface) => {
  if (!_id)
  {
    _id = 1;
  }
  const { data, error, loading } = usePlayerProfileQuery({ variables: { id: _id } });
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a player from the panel</div>;
  }
  return (
    <div className={className}>
      <h1 className={`${className}__title`}>
        {data.player?.lastName?.toUpperCase()} {data.player?.firstName} ({data.player?.points})
      </h1>
      <p>
        <ul>
            <li>Id: {data.player?._id}</li>
            <li>Points: {data.player?.points}</li>
            <li>First Name: {data.player?.firstName}</li>
            <li>Last Name: {data.player?.lastName}</li>
        </ul>
      </p>
    </div>
  );
};

export default PlayerProfile;
