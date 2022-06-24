import * as React from 'react';
import { useMatchListQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  id?: number;
  handleIdChange: (newId: number) => void;
}

const MatchList: React.FC<Props> = ({ handleIdChange }) => {
  const { data, error, loading } = useMatchListQuery({variables: {limit: 100}});

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  const className = 'MatchList';

  return (
  <div className={className}>
    <h3>Most recent matches</h3>
    <ol className={`${className}__list`}>
      {!!data.matches &&
        data.matches.map(
          (Match, i) =>
            !!Match && (
              <li key={i} className={`${className}__item`} onClick={() => handleIdChange(Match._id!)}>
                {Match.winnerId?.lastName?.toUpperCase()} {Match.winnerId?.firstName} VS {Match.loserId?.lastName?.toUpperCase()} {Match.loserId?.firstName}
              </li>
            ),
        )}
    </ol>
  </div>
  );
}

export default MatchList;