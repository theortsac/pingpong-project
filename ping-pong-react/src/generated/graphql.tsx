import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ObjectId: any;
};

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  deletedCount: Scalars['Int'];
};

export type HighestId = {
  __typename?: 'HighestId';
  _id?: Maybe<Scalars['Int']>;
  highestMatchId?: Maybe<Scalars['Int']>;
  highestPlayerId?: Maybe<Scalars['Int']>;
};

export type HighestIdInsertInput = {
  _id?: InputMaybe<Scalars['Int']>;
  highestMatchId?: InputMaybe<Scalars['Int']>;
  highestPlayerId?: InputMaybe<Scalars['Int']>;
};

export type HighestIdQueryInput = {
  AND?: InputMaybe<Array<HighestIdQueryInput>>;
  OR?: InputMaybe<Array<HighestIdQueryInput>>;
  _id?: InputMaybe<Scalars['Int']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['Int']>;
  _id_gte?: InputMaybe<Scalars['Int']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  _id_lt?: InputMaybe<Scalars['Int']>;
  _id_lte?: InputMaybe<Scalars['Int']>;
  _id_ne?: InputMaybe<Scalars['Int']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  highestMatchId?: InputMaybe<Scalars['Int']>;
  highestMatchId_exists?: InputMaybe<Scalars['Boolean']>;
  highestMatchId_gt?: InputMaybe<Scalars['Int']>;
  highestMatchId_gte?: InputMaybe<Scalars['Int']>;
  highestMatchId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  highestMatchId_lt?: InputMaybe<Scalars['Int']>;
  highestMatchId_lte?: InputMaybe<Scalars['Int']>;
  highestMatchId_ne?: InputMaybe<Scalars['Int']>;
  highestMatchId_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  highestPlayerId?: InputMaybe<Scalars['Int']>;
  highestPlayerId_exists?: InputMaybe<Scalars['Boolean']>;
  highestPlayerId_gt?: InputMaybe<Scalars['Int']>;
  highestPlayerId_gte?: InputMaybe<Scalars['Int']>;
  highestPlayerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  highestPlayerId_lt?: InputMaybe<Scalars['Int']>;
  highestPlayerId_lte?: InputMaybe<Scalars['Int']>;
  highestPlayerId_ne?: InputMaybe<Scalars['Int']>;
  highestPlayerId_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum HighestIdSortByInput {
  HighestmatchidAsc = 'HIGHESTMATCHID_ASC',
  HighestmatchidDesc = 'HIGHESTMATCHID_DESC',
  HighestplayeridAsc = 'HIGHESTPLAYERID_ASC',
  HighestplayeridDesc = 'HIGHESTPLAYERID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type HighestIdUpdateInput = {
  _id?: InputMaybe<Scalars['Int']>;
  _id_inc?: InputMaybe<Scalars['Int']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  highestMatchId?: InputMaybe<Scalars['Int']>;
  highestMatchId_inc?: InputMaybe<Scalars['Int']>;
  highestMatchId_unset?: InputMaybe<Scalars['Boolean']>;
  highestPlayerId?: InputMaybe<Scalars['Int']>;
  highestPlayerId_inc?: InputMaybe<Scalars['Int']>;
  highestPlayerId_unset?: InputMaybe<Scalars['Boolean']>;
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type Match = {
  __typename?: 'Match';
  _id?: Maybe<Scalars['Int']>;
  loserId?: Maybe<Player>;
  loserPoints?: Maybe<Scalars['Int']>;
  winnerId?: Maybe<Player>;
  winnerPoints?: Maybe<Scalars['Int']>;
};

export type MatchInsertInput = {
  _id?: InputMaybe<Scalars['Int']>;
  loserId?: InputMaybe<MatchLoserIdRelationInput>;
  loserPoints?: InputMaybe<Scalars['Int']>;
  winnerId?: InputMaybe<MatchWinnerIdRelationInput>;
  winnerPoints?: InputMaybe<Scalars['Int']>;
};

export type MatchLoserIdRelationInput = {
  create?: InputMaybe<PlayerInsertInput>;
  link?: InputMaybe<Scalars['Int']>;
};

export type MatchQueryInput = {
  AND?: InputMaybe<Array<MatchQueryInput>>;
  OR?: InputMaybe<Array<MatchQueryInput>>;
  _id?: InputMaybe<Scalars['Int']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['Int']>;
  _id_gte?: InputMaybe<Scalars['Int']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  _id_lt?: InputMaybe<Scalars['Int']>;
  _id_lte?: InputMaybe<Scalars['Int']>;
  _id_ne?: InputMaybe<Scalars['Int']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  loserId?: InputMaybe<PlayerQueryInput>;
  loserId_exists?: InputMaybe<Scalars['Boolean']>;
  loserPoints?: InputMaybe<Scalars['Int']>;
  loserPoints_exists?: InputMaybe<Scalars['Boolean']>;
  loserPoints_gt?: InputMaybe<Scalars['Int']>;
  loserPoints_gte?: InputMaybe<Scalars['Int']>;
  loserPoints_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  loserPoints_lt?: InputMaybe<Scalars['Int']>;
  loserPoints_lte?: InputMaybe<Scalars['Int']>;
  loserPoints_ne?: InputMaybe<Scalars['Int']>;
  loserPoints_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  winnerId?: InputMaybe<PlayerQueryInput>;
  winnerId_exists?: InputMaybe<Scalars['Boolean']>;
  winnerPoints?: InputMaybe<Scalars['Int']>;
  winnerPoints_exists?: InputMaybe<Scalars['Boolean']>;
  winnerPoints_gt?: InputMaybe<Scalars['Int']>;
  winnerPoints_gte?: InputMaybe<Scalars['Int']>;
  winnerPoints_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  winnerPoints_lt?: InputMaybe<Scalars['Int']>;
  winnerPoints_lte?: InputMaybe<Scalars['Int']>;
  winnerPoints_ne?: InputMaybe<Scalars['Int']>;
  winnerPoints_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum MatchSortByInput {
  LoseridAsc = 'LOSERID_ASC',
  LoseridDesc = 'LOSERID_DESC',
  LoserpointsAsc = 'LOSERPOINTS_ASC',
  LoserpointsDesc = 'LOSERPOINTS_DESC',
  WinneridAsc = 'WINNERID_ASC',
  WinneridDesc = 'WINNERID_DESC',
  WinnerpointsAsc = 'WINNERPOINTS_ASC',
  WinnerpointsDesc = 'WINNERPOINTS_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type MatchUpdateInput = {
  _id?: InputMaybe<Scalars['Int']>;
  _id_inc?: InputMaybe<Scalars['Int']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  loserId?: InputMaybe<MatchLoserIdRelationInput>;
  loserId_unset?: InputMaybe<Scalars['Boolean']>;
  loserPoints?: InputMaybe<Scalars['Int']>;
  loserPoints_inc?: InputMaybe<Scalars['Int']>;
  loserPoints_unset?: InputMaybe<Scalars['Boolean']>;
  winnerId?: InputMaybe<MatchWinnerIdRelationInput>;
  winnerId_unset?: InputMaybe<Scalars['Boolean']>;
  winnerPoints?: InputMaybe<Scalars['Int']>;
  winnerPoints_inc?: InputMaybe<Scalars['Int']>;
  winnerPoints_unset?: InputMaybe<Scalars['Boolean']>;
};

export type MatchWinnerIdRelationInput = {
  create?: InputMaybe<PlayerInsertInput>;
  link?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteManyHighestIds?: Maybe<DeleteManyPayload>;
  deleteManyMatches?: Maybe<DeleteManyPayload>;
  deleteManyPlayers?: Maybe<DeleteManyPayload>;
  deleteOneHighestId?: Maybe<HighestId>;
  deleteOneMatch?: Maybe<Match>;
  deleteOnePlayer?: Maybe<Player>;
  insertManyHighestIds?: Maybe<InsertManyPayload>;
  insertManyMatches?: Maybe<InsertManyPayload>;
  insertManyPlayers?: Maybe<InsertManyPayload>;
  insertOneHighestId?: Maybe<HighestId>;
  insertOneMatch?: Maybe<Match>;
  insertOnePlayer?: Maybe<Player>;
  replaceOneHighestId?: Maybe<HighestId>;
  replaceOneMatch?: Maybe<Match>;
  replaceOnePlayer?: Maybe<Player>;
  updateManyHighestIds?: Maybe<UpdateManyPayload>;
  updateManyMatches?: Maybe<UpdateManyPayload>;
  updateManyPlayers?: Maybe<UpdateManyPayload>;
  updateOneHighestId?: Maybe<HighestId>;
  updateOneMatch?: Maybe<Match>;
  updateOnePlayer?: Maybe<Player>;
  upsertOneHighestId?: Maybe<HighestId>;
  upsertOneMatch?: Maybe<Match>;
  upsertOnePlayer?: Maybe<Player>;
};


export type MutationDeleteManyHighestIdsArgs = {
  query?: InputMaybe<HighestIdQueryInput>;
};


export type MutationDeleteManyMatchesArgs = {
  query?: InputMaybe<MatchQueryInput>;
};


export type MutationDeleteManyPlayersArgs = {
  query?: InputMaybe<PlayerQueryInput>;
};


export type MutationDeleteOneHighestIdArgs = {
  query: HighestIdQueryInput;
};


export type MutationDeleteOneMatchArgs = {
  query: MatchQueryInput;
};


export type MutationDeleteOnePlayerArgs = {
  query: PlayerQueryInput;
};


export type MutationInsertManyHighestIdsArgs = {
  data: Array<HighestIdInsertInput>;
};


export type MutationInsertManyMatchesArgs = {
  data: Array<MatchInsertInput>;
};


export type MutationInsertManyPlayersArgs = {
  data: Array<PlayerInsertInput>;
};


export type MutationInsertOneHighestIdArgs = {
  data: HighestIdInsertInput;
};


export type MutationInsertOneMatchArgs = {
  data: MatchInsertInput;
};


export type MutationInsertOnePlayerArgs = {
  data: PlayerInsertInput;
};


export type MutationReplaceOneHighestIdArgs = {
  data: HighestIdInsertInput;
  query?: InputMaybe<HighestIdQueryInput>;
};


export type MutationReplaceOneMatchArgs = {
  data: MatchInsertInput;
  query?: InputMaybe<MatchQueryInput>;
};


export type MutationReplaceOnePlayerArgs = {
  data: PlayerInsertInput;
  query?: InputMaybe<PlayerQueryInput>;
};


export type MutationUpdateManyHighestIdsArgs = {
  query?: InputMaybe<HighestIdQueryInput>;
  set: HighestIdUpdateInput;
};


export type MutationUpdateManyMatchesArgs = {
  query?: InputMaybe<MatchQueryInput>;
  set: MatchUpdateInput;
};


export type MutationUpdateManyPlayersArgs = {
  query?: InputMaybe<PlayerQueryInput>;
  set: PlayerUpdateInput;
};


export type MutationUpdateOneHighestIdArgs = {
  query?: InputMaybe<HighestIdQueryInput>;
  set: HighestIdUpdateInput;
};


export type MutationUpdateOneMatchArgs = {
  query?: InputMaybe<MatchQueryInput>;
  set: MatchUpdateInput;
};


export type MutationUpdateOnePlayerArgs = {
  query?: InputMaybe<PlayerQueryInput>;
  set: PlayerUpdateInput;
};


export type MutationUpsertOneHighestIdArgs = {
  data: HighestIdInsertInput;
  query?: InputMaybe<HighestIdQueryInput>;
};


export type MutationUpsertOneMatchArgs = {
  data: MatchInsertInput;
  query?: InputMaybe<MatchQueryInput>;
};


export type MutationUpsertOnePlayerArgs = {
  data: PlayerInsertInput;
  query?: InputMaybe<PlayerQueryInput>;
};

export type Player = {
  __typename?: 'Player';
  _id?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
};

export type PlayerInsertInput = {
  _id?: InputMaybe<Scalars['Int']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  points?: InputMaybe<Scalars['Int']>;
};

export type PlayerQueryInput = {
  AND?: InputMaybe<Array<PlayerQueryInput>>;
  OR?: InputMaybe<Array<PlayerQueryInput>>;
  _id?: InputMaybe<Scalars['Int']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['Int']>;
  _id_gte?: InputMaybe<Scalars['Int']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  _id_lt?: InputMaybe<Scalars['Int']>;
  _id_lte?: InputMaybe<Scalars['Int']>;
  _id_ne?: InputMaybe<Scalars['Int']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  firstName?: InputMaybe<Scalars['String']>;
  firstName_exists?: InputMaybe<Scalars['Boolean']>;
  firstName_gt?: InputMaybe<Scalars['String']>;
  firstName_gte?: InputMaybe<Scalars['String']>;
  firstName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstName_lt?: InputMaybe<Scalars['String']>;
  firstName_lte?: InputMaybe<Scalars['String']>;
  firstName_ne?: InputMaybe<Scalars['String']>;
  firstName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastName?: InputMaybe<Scalars['String']>;
  lastName_exists?: InputMaybe<Scalars['Boolean']>;
  lastName_gt?: InputMaybe<Scalars['String']>;
  lastName_gte?: InputMaybe<Scalars['String']>;
  lastName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastName_lt?: InputMaybe<Scalars['String']>;
  lastName_lte?: InputMaybe<Scalars['String']>;
  lastName_ne?: InputMaybe<Scalars['String']>;
  lastName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  points?: InputMaybe<Scalars['Int']>;
  points_exists?: InputMaybe<Scalars['Boolean']>;
  points_gt?: InputMaybe<Scalars['Int']>;
  points_gte?: InputMaybe<Scalars['Int']>;
  points_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  points_lt?: InputMaybe<Scalars['Int']>;
  points_lte?: InputMaybe<Scalars['Int']>;
  points_ne?: InputMaybe<Scalars['Int']>;
  points_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum PlayerSortByInput {
  FirstnameAsc = 'FIRSTNAME_ASC',
  FirstnameDesc = 'FIRSTNAME_DESC',
  LastnameAsc = 'LASTNAME_ASC',
  LastnameDesc = 'LASTNAME_DESC',
  PointsAsc = 'POINTS_ASC',
  PointsDesc = 'POINTS_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type PlayerUpdateInput = {
  _id?: InputMaybe<Scalars['Int']>;
  _id_inc?: InputMaybe<Scalars['Int']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  firstName_unset?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  lastName_unset?: InputMaybe<Scalars['Boolean']>;
  points?: InputMaybe<Scalars['Int']>;
  points_inc?: InputMaybe<Scalars['Int']>;
  points_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  highestId?: Maybe<HighestId>;
  highestIds: Array<Maybe<HighestId>>;
  match?: Maybe<Match>;
  matches: Array<Maybe<Match>>;
  player?: Maybe<Player>;
  players: Array<Maybe<Player>>;
};


export type QueryHighestIdArgs = {
  query?: InputMaybe<HighestIdQueryInput>;
};


export type QueryHighestIdsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<HighestIdQueryInput>;
  sortBy?: InputMaybe<HighestIdSortByInput>;
};


export type QueryMatchArgs = {
  query?: InputMaybe<MatchQueryInput>;
};


export type QueryMatchesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<MatchQueryInput>;
  sortBy?: InputMaybe<MatchSortByInput>;
};


export type QueryPlayerArgs = {
  query?: InputMaybe<PlayerQueryInput>;
};


export type QueryPlayersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<PlayerQueryInput>;
  sortBy?: InputMaybe<PlayerSortByInput>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};

export type MatchListQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type MatchListQuery = { __typename?: 'Query', matches: Array<{ __typename?: 'Match', _id?: number | null, winnerId?: { __typename?: 'Player', firstName?: string | null, lastName?: string | null } | null, loserId?: { __typename?: 'Player', firstName?: string | null, lastName?: string | null } | null } | null> };

export type MatchProfileQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type MatchProfileQuery = { __typename?: 'Query', match?: { __typename?: 'Match', _id?: number | null, loserPoints?: number | null, winnerPoints?: number | null, winnerId?: { __typename?: 'Player', _id?: number | null, firstName?: string | null, lastName?: string | null, points?: number | null } | null, loserId?: { __typename?: 'Player', _id?: number | null, firstName?: string | null, lastName?: string | null, points?: number | null } | null } | null };

export type PlayerListQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type PlayerListQuery = { __typename?: 'Query', players: Array<{ __typename?: 'Player', _id?: number | null, firstName?: string | null, lastName?: string | null, points?: number | null } | null> };

export type PlayerProfileQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type PlayerProfileQuery = { __typename?: 'Query', player?: { __typename?: 'Player', points?: number | null, _id?: number | null, firstName?: string | null, lastName?: string | null } | null };


export const MatchListDocument = gql`
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

/**
 * __useMatchListQuery__
 *
 * To run a query within a React component, call `useMatchListQuery` and pass it any options that fit your needs.
 * When your component renders, `useMatchListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMatchListQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useMatchListQuery(baseOptions: Apollo.QueryHookOptions<MatchListQuery, MatchListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MatchListQuery, MatchListQueryVariables>(MatchListDocument, options);
      }
export function useMatchListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MatchListQuery, MatchListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MatchListQuery, MatchListQueryVariables>(MatchListDocument, options);
        }
export type MatchListQueryHookResult = ReturnType<typeof useMatchListQuery>;
export type MatchListLazyQueryHookResult = ReturnType<typeof useMatchListLazyQuery>;
export type MatchListQueryResult = Apollo.QueryResult<MatchListQuery, MatchListQueryVariables>;
export const MatchProfileDocument = gql`
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

/**
 * __useMatchProfileQuery__
 *
 * To run a query within a React component, call `useMatchProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useMatchProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMatchProfileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMatchProfileQuery(baseOptions: Apollo.QueryHookOptions<MatchProfileQuery, MatchProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MatchProfileQuery, MatchProfileQueryVariables>(MatchProfileDocument, options);
      }
export function useMatchProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MatchProfileQuery, MatchProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MatchProfileQuery, MatchProfileQueryVariables>(MatchProfileDocument, options);
        }
export type MatchProfileQueryHookResult = ReturnType<typeof useMatchProfileQuery>;
export type MatchProfileLazyQueryHookResult = ReturnType<typeof useMatchProfileLazyQuery>;
export type MatchProfileQueryResult = Apollo.QueryResult<MatchProfileQuery, MatchProfileQueryVariables>;
export const PlayerListDocument = gql`
    query PlayerList($limit: Int!) {
  players(sortBy: POINTS_DESC, limit: $limit) {
    _id
    firstName
    lastName
    points
  }
}
    `;

/**
 * __usePlayerListQuery__
 *
 * To run a query within a React component, call `usePlayerListQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayerListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayerListQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function usePlayerListQuery(baseOptions: Apollo.QueryHookOptions<PlayerListQuery, PlayerListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlayerListQuery, PlayerListQueryVariables>(PlayerListDocument, options);
      }
export function usePlayerListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlayerListQuery, PlayerListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlayerListQuery, PlayerListQueryVariables>(PlayerListDocument, options);
        }
export type PlayerListQueryHookResult = ReturnType<typeof usePlayerListQuery>;
export type PlayerListLazyQueryHookResult = ReturnType<typeof usePlayerListLazyQuery>;
export type PlayerListQueryResult = Apollo.QueryResult<PlayerListQuery, PlayerListQueryVariables>;
export const PlayerProfileDocument = gql`
    query PlayerProfile($id: Int!) {
  player(query: {_id: $id}) {
    points
    _id
    firstName
    lastName
  }
}
    `;

/**
 * __usePlayerProfileQuery__
 *
 * To run a query within a React component, call `usePlayerProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayerProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayerProfileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePlayerProfileQuery(baseOptions: Apollo.QueryHookOptions<PlayerProfileQuery, PlayerProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlayerProfileQuery, PlayerProfileQueryVariables>(PlayerProfileDocument, options);
      }
export function usePlayerProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlayerProfileQuery, PlayerProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlayerProfileQuery, PlayerProfileQueryVariables>(PlayerProfileDocument, options);
        }
export type PlayerProfileQueryHookResult = ReturnType<typeof usePlayerProfileQuery>;
export type PlayerProfileLazyQueryHookResult = ReturnType<typeof usePlayerProfileLazyQuery>;
export type PlayerProfileQueryResult = Apollo.QueryResult<PlayerProfileQuery, PlayerProfileQueryVariables>;