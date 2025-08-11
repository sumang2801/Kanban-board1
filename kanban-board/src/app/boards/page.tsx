"use client";
import { useQuery, gql } from '@apollo/client';
import ProtectedRoute from '../../components/ProtectedRoute';

const GET_BOARDS = gql`
  query GetBoards {
    boards {
      id
      name
    }
  }
`;

export default function BoardListPage() {
  const { data, loading, error } = useQuery(GET_BOARDS);

  return (
    <ProtectedRoute>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          <h1>Boards</h1>
          <ul>
            {data?.boards?.map((board: any) => (
              <li key={board.id}>{board.name}</li>
            ))}
          </ul>
        </div>
      )}
    </ProtectedRoute>
  );
}
