import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    limit: 10,
    search: 'teste',
    revenue: 25000,
    sort: 'name',
  });

  React.useEffect(() => setSearchParams(searchParams), []);

  const page = searchParams.get('page');
  const limit = searchParams.get('limit');
  const search = searchParams.get('search');
  const revenue = searchParams.get('revenue');
  const sort = searchParams.get('sort');

  return (
    <div>
      <h1>Hello World</h1>
      <p>{page}</p>
      <p>{limit}</p>
      <p>{search}</p>
      <p>{revenue}</p>
      <p>{sort}</p>
    </div>
  );
};
