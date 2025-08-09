"use client";

import { useQuery } from '@apollo/client';
import { GetCountriesDocument, type Country } from '@/gql/graphql'; // Import Country type
import apolloClient from '@/lib/apollo-client';

export default function Page() {
  const { loading, error, data } = useQuery(GetCountriesDocument, {
    client: apolloClient,
  });

  if (loading) return <p className="p-4">Loading countries...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Countries List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.countries?.map((country: Country) => ( // Add type annotation here
          <li 
            key={country.code} 
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <span className="text-2xl mr-2">{country.emoji}</span>
              <div>
                <h2 className="font-semibold">{country.name}</h2>
                <p className="text-sm text-gray-500">{country.code}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}