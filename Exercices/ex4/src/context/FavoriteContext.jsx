import React, { createContext, useReducer, useEffect, useMemo } from 'react'

const FavoriteContext = createContext(null)

const ACTIONS = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  CLEAR_FAVORITES: 'CLEAR_FAVORITES',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAVORITE: {
      const id = action.payload
      const exists = state.favorites.includes(id)
      const favorites = exists
        ? state.favorites.filter((f) => f !== id)
        : [...state.favorites, id]
      return { ...state, favorites }
    }
    case ACTIONS.CLEAR_FAVORITES:
      return { ...state, favorites: [] }
    default:
      return state
  }
}

export function FavoriteProvider({ children }) {
  const initialFavorites = (() => {
    try {
      const raw = localStorage.getItem('favorites')
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      return []
    }
  })()

  const [state, dispatch] = useReducer(reducer, { favorites: initialFavorites })

  useEffect(() => {
    try {
      localStorage.setItem('favorites', JSON.stringify(state.favorites))
    } catch (e) {
      // ignore
    }
  }, [state.favorites])

  const toggleFavorite = (id) => dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: id })
  const clearFavorites = () => dispatch({ type: ACTIONS.CLEAR_FAVORITES })

  const favoritesCount = state.favorites.length
  const favoritesSet = useMemo(() => new Set(state.favorites), [state.favorites])
  const isFavorite = (id) => favoritesSet.has(id)

  const value = {
    favorites: state.favorites,
    toggleFavorite,
    clearFavorites,
    favoritesCount,
    isFavorite,
  }

  return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
}

export default FavoriteContext
