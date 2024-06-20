import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { useParams } from 'react-router-dom';

const NewsPage = () => {
  const params = useParams();
  //params category가 undefined일 경우에만 all로 체크해줘야함 TODO
  return (
    <div>
      <Categories />
      <NewsList category={params.category} />
    </div>
  );
};

export default NewsPage;
