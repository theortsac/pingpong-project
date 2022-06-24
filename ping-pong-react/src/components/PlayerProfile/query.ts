import { gql } from '@apollo/client';

export const QUERY_PLAYER_PROFILE = gql`
  query PlayerProfile($id: Int!) {
    player(query: {_id: $id}) {
      points
      _id
      firstName
      lastName
    }
  }
`;