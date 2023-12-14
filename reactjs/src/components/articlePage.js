// ArticlePage.js
import React from 'react';
import { useParams } from 'react-router-dom';
// IMPORT NEWSDATA
import newsData from '../data/newsData';

const ArticlePage = () => {
  const { index } = useParams();
  const currentArticle = newsData[index]
  console.log(currentArticle)
  //  Create template here
  return (
    <div>
      <h1>{currentArticle.title}</h1>
      <h1>{currentArticle.desc}</h1>
      <h1></h1>
    </div>
  );
  // 
};

export default ArticlePage;
