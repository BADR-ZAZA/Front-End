import React, { useContext } from 'react'
import { articles } from '../data/articles'
import FavoriteContext from '../context/FavoriteContext'
import '../App.css'

export default function ArticleList() {
  const { isFavorite, toggleFavorite } = useContext(FavoriteContext)

  return (
    <div className="article-list">
      {articles.map((a) => {
        const fav = isFavorite(a.id)
        return (
          <div key={a.id} className={"article-card" + (fav ? ' favorite' : '')}>
            <div className="article-title">{a.title}</div>
            <div className="article-excerpt">{a.excerpt}</div>
            <button
              className={"btn" + (fav ? ' favorite' : '')}
              onClick={() => toggleFavorite(a.id)}
            >
              {fav ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            </button>
          </div>
        )
      })}
    </div>
  )
}
