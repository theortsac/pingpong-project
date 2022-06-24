import { gql } from '@apollo/client';

export const QUERY_PLAYER_RANKED_LIST = gql`
  query PlayerList($limit: Int!) {
    players(sortBy: POINTS_DESC, limit: $limit) {
      _id
      firstName
      lastName
      points
    }
  }
`;