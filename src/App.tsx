import Header from './components/Header'
import ProdutosContainer from './containers/Produtos'
import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  // Todo o código comentado referente a useState, useEffect e funções antigas foi removido

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <ProdutosContainer />
      </div>
    </Provider>
  )
}

export default App
