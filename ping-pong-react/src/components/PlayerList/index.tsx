import * as React from 'react';
import { usePlayerListQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  id?: number;
  handleIdChange: (newId: number) => void;
}

const PlayerList: React.FC<Props> = ({ handleIdChange }) => {
  const { data, error, loading } = usePlayerListQuery({variables: {limit: 100}});

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  const className = 'PlayerList';

  return (
  <div className={className}>
    <h3>Ranked Players</h3>
    <ol className={`${className}__list`}>
      {!!data.players &&
        data.players.map(
          (Player, i) =>
            !!Player && (
              <li key={i} className={`${className}__item`} onClick={() => handleIdChange(Player._id!)}>
                {Player.lastName?.toUpperCase()} {Player.firstName} ({Player.points})
              </li>
            ),
        )}
    </ol>
  </div>
  );
}

export default PlayerList;