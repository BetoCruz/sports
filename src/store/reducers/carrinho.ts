import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'
//----------------------------------------------------------

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar(state, action: PayloadAction<Produto>) {
      const produto = action.payload
      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já adicionando')
      } else {
        state.itens.push(produto)
      }
    }
  }
})
export default carrinhoSlice.reducer
export const { adicionar } = carrinhoSlice.actions

// function adicionarAoCarrinho(produto: Produto) {
//   if (carrinho.find((p) => p.id === produto.id)) {
//     alert('Item já adicionado')
//   } else {
//     setCarrinho([...carrinho, produto])
//   }
// }
