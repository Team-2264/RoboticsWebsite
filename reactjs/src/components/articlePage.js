// ArticlePage.js
import React from 'react';
import { useParams } from 'react-router-dom';
// IMPORT NEWSDATA
import newsData from '../data/newsData';
import NavBar from './NavBar';
import Footer from './footer';
import { CurrencyBangladeshiIcon } from '@heroicons/react/24/outline';

const ArticlePage = () => {
  const { index } = useParams();
  const currentArticle = newsData[index]
  console.log(currentArticle)
  //  Create template here
  return (
    <div>
      <NavBar />
      <div>
        <div className='sm: max-w-sm md:max-w-md lg:max-w-xl mx-auto pt-6 pb'>
          <h1 className='text-center font-bold text-2xl pb-3'>{currentArticle.title}</h1>
          <div className='justify-between flex pb-3'>
            <p className='text-gray-700 text-md'>{currentArticle.author}</p>
            <p className='text-gray-700 text-md'>{currentArticle.date}</p>
          </div>
          <img alt="" className='w-full overflow-hidden rounded-lg shadow-xl' src={currentArticle.srcOfImage} />
          <p className='pt-4 text-lg'>{currentArticle.article}</p>
        </div>
      </div>
      {/* <div className='max-w-2xl'>
        <h1 className='text-2xl font-bold text-center'>{currentArticle.title}</h1>
        <img className='rounded-xl h-[300px] overflow-hidden' src={currentArticle.srcOfImage} />
        <h1>{currentArticle.desc}</h1>
      </div> */}
      <Footer />
    </div>
  );
  // 
};

export default ArticlePage;
