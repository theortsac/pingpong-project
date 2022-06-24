import { gql } from '@apollo/client';

export const QUERY_MATCH_LIST = gql`
    query MatchList($limit: Int!) {
      matches(sortBy: _ID_DESC, limit: $limit) {
        _id
        winnerId {
          firstName
          lastName
        }
        loserId {
          firstName
          lastName
        }
      }
    }
`;