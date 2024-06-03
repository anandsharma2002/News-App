import { useEffect, useState } from "react"
import Newsitem from "./Newsitem";

const NewsBoard = ({ category }) => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=63d151aa4e2a47e59377f3a35da6c6dc`;
    fetch(url).then(response => response.json()).then(data => setArticles(data.articles));


  }, [category])

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      <div className="m-auto">
        {articles.map((news, index) => {
          return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        })}
      </div>
    </div>
  )
}

export default NewsBoard