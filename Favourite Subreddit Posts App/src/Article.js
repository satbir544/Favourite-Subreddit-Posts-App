import React from "react";
import './Article.css';

function setData(props) {
    if (localStorage.getItem('favArticles') == null) {
        localStorage.setItem('favArticles', '[]')
    }

    let old_data = JSON.parse(localStorage.getItem('favArticles'));

    if (!(old_data.includes(props))) {
        old_data.push(props);
        localStorage.setItem('favArticles', JSON.stringify(old_data));
    }
}

function Article(props) {
    return (
        <article>
            <h3>{props.article.title}</h3>
            <div>Score: {props.article.score}</div>
            <div><a href={"https://www.reddit.com" + props.article.permalink} target="_blank">Comment Section</a></div>    
            <div><button onClick={() => setData(props.article.id)}>Add to Favourites</button></div>
        </article>
    )
}

export default Article;
