import { useDispatch } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { adicionar as adicionarAoCarrinhoAction } from '../../store/reducers/carrinho' // Renomeado para clareza
import {
  adicionarFavorito as adicionarFavoritoAction,
  removerFavorito as removerFavoritoAction
} from '../../store/reducers/favoritos'
type Props = {
  produto: ProdutoType
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto, estaNosFavoritos }: Props) => {
  const dispatch = useDispatch()

  const handleFavoritoClick = () => {
    if (estaNosFavoritos) {
      dispatch(removerFavoritoAction(produto))
    } else {
      dispatch(adicionarFavoritoAction(produto))
    }
  }

  const handleAdicionarCarrinhoClick = () => {
    dispatch(adicionarAoCarrinhoAction(produto))
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleFavoritoClick} type="button">
        {' '}
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={handleAdicionarCarrinhoClick} type="button">
        {' '}
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
