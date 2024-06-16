
import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/header.component';
import Card from './components/newsCard.component';

function App() {
  const [articlesData, setArticlesData] = useState([]);
  const [category, setCategory] = useState('india');
  const [date, setDate] = useState('2023-11-13');

  useEffect(() => {
    //fetch(`https://newsapi.org/v2/everything?q=${category}&from=${date}&sortBy&apiKey=bda2acb6731d4cd9bec7d1e2bd2a1494`)
      fetch('articles.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setArticlesData(data.articles);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [category, date]);
  return (
    <div className="App">
      <Header setCategory={setCategory} setDate={setDate}/>
      <div className="newsCard">
      <Card  articlesData={articlesData}/>
      </div>
    </div>
  );
}

export default App;
