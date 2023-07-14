import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Shared/NewsCard/NewsCard';
import useTitle from '../../../UseHooks/useTitle';

const Category = () => {
    const categoryNews = useLoaderData();
    useTitle('Category')
    return (
        <div>
            {/* <h1>All News: {categoryNews.length}</h1> */}
            {
                categoryNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }

        </div>
    );
};

export default Category;