import React, {useState, useEffect} from 'react';
import Article from './Article';
import './Home.css';

function initFavArticles() {
    let favArticles = localStorage.getItem('favArticles');
    favArticles = JSON.parse(favArticles);

    if (favArticles == null) {
        localStorage.setItem('favArticles', '[]');
    }
}

function Home() {
    const [articles, setArticles] = useState([]);
    const [subReddit, setSubreddit] = useState('Search');

    initFavArticles();

    useEffect(() => {
        fetch("https://www.reddit.com/r/"+subReddit+"/hot.json?limit=10").then(res => {
            if (res.status !== 200) {
                return;
            }

            res.json().then(data => {
                if (data != null) {
                    setArticles(data.data.children);
                }
            });
        })
    }, [subReddit]);

    return (
        <div className='home'>
            <header className="header">
                <input type="text" className="input" value={subReddit} onChange={e => setSubreddit(e.target.value)}/>
            </header>

            <div className="articles">
                {
                    (articles != null) ? articles.map((article, index) => <Article key={index} article={article.data}/>): ''
                }
            </div>
        </div>
    );
  }
  
  export default Home;
