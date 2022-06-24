import './styles.css';
import { useMatchProfileQuery } from '../../generated/graphql';

interface IdInterface {
  _id: number;
}

const className = 'MatchProfile';

const MatchProfile = ({ _id }: IdInterface) => {
  if (!_id)
  {
    _id = 1;
  }
  const { data, error, loading } = useMatchProfileQuery({ variables: { id: _id } });
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a match from the panel</div>;
  }
  return (
    <div className={className}>
      <h1 className={`${className}__title`}>
        {data.match?.winnerId?.lastName?.toUpperCase()} {data.match?.winnerId?.firstName} VS {data.match?.loserId?.lastName?.toUpperCase()} {data.match?.loserId?.firstName}
      </h1>
      <p>
        <h2>Match Id: {data.match?._id}</h2>
        <ul>
            <h2>Winner: {data.match?.winnerId?.lastName?.toUpperCase()} {data.match?.winnerId?.firstName} with {data.match?.winnerPoints} points</h2>
            <li>Id: {data.match?.winnerId?._id}</li>
            <li>First Name: {data.match?.winnerId?.firstName}</li>
            <li>Last Name: {data.match?.winnerId?.lastName}</li>
            <li>Current total points: {data.match?.winnerId?.points}</li>
            <h2>Loser: {data.match?.loserId?.lastName?.toUpperCase()} {data.match?.loserId?.firstName} with {data.match?.loserPoints} points</h2>
            <li>Id: {data.match?.loserId?._id}</li>
            <li>First Name: {data.match?.loserId?.firstName}</li>
            <li>Last Name: {data.match?.loserId?.lastName}</li>
            <li>Current total points: {data.match?.loserId?.points}</li>
        </ul>
      </p>
    </div>
  );
};

export default MatchProfile;
