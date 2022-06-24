import { gql } from '@apollo/client';

export const QUERY_MATCH_PROFILE = gql`
  query MatchProfile($id: Int!) {
    match(query: {_id: $id}) {
        _id
        loserPoints
        winnerPoints
        winnerId {
            _id
            firstName
            lastName
            points
        }
        loserId {
            _id
            firstName
            lastName
            points
        }
    }
  }
`;