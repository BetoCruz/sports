import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFavorito(state, action: PayloadAction<Produto>) {
      const produto = action.payload
      if (state.itens.some((f) => f.id === produto.id)) {
        alert('Item já favoritado')
      } else {
        state.itens.push(produto)
      }
    },
    removerFavorito(state, action: PayloadAction<Produto>) {
      const produtoARemover = action.payload
      state.itens = state.itens.filter((f) => f.id !== produtoARemover.id)
      alert('Item removido dos favoritos')
    }
  }
})

export const { adicionarFavorito, removerFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
