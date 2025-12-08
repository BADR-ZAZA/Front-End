import React, { useContext } from 'react'
import { articles } from '../data/articles'
import FavoriteContext from '../context/FavoriteContext'
import '../App.css'

export default function FavoritePanel() {
  const { favorites, favoritesCount, clearFavorites } = useContext(FavoriteContext)

  const favItems = articles.filter((a) => favorites.includes(a.id))

  return (
    <div>
      <div className="total-line">Total articles: {articles.length}</div>
      <div className="total-line">Favoris: {favoritesCount}</div>

      <ul className="favorite-list">
        {favItems.length === 0 && <li>(Aucun favori)</li>}
        {favItems.map((it) => (
          <li key={it.id}>{it.title}</li>
        ))}
      </ul>

      {favItems.length > 0 && (
        <button className="btn clear-btn" onClick={clearFavorites}>
          Effacer les favoris
        </button>
      )}
    </div>
  )
}
