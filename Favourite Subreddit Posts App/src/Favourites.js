import './Favourites.css';

function getFavArticles() {
  let data = localStorage.getItem('favArticles');
  data = JSON.parse(data);

  return data;
}

function removePost(props) {
  let data = getFavArticles();

  let newData = data.filter(e => e !== props);
  localStorage.setItem('favArticles', JSON.stringify(newData));
  //window.location.reload(false);
}

function Favourites() {
  let favArticles = getFavArticles();

  if (favArticles == null) {
    localStorage.setItem('favArticles', '[]');
    favArticles = getFavArticles();
    window.location.reload(false);
  }

  return (
    <div>
      <p>Your Favourites Posts:</p> <br/>

      <div className="favs">
        {
          favArticles.map((id, index) => (
            <article key={index}>
              <h3>{id}</h3>
              <div><button onClick={() => removePost(id)}>Remove</button></div>
            </article>
          ))
        }
      </div>
    </div>
  );
}

export default Favourites;
