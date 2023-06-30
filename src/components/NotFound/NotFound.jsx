import { useNavigate } from 'react-router-dom'
import * as S from './NotFound-style'

export default function NotFound() {

const navigate = useNavigate()


  return (
    <S.NotFoundBlock>
      <S.Title>
      404
      </S.Title>
      <S.PageNotFound>
        Страница не найдена
        <S.PageNotFoundSvg src="img/emoji/crying.png" alt="crying_emoji" />
      </S.PageNotFound>
      <S.PageNotFoundDescription>
        Возможно, она была удалена <br/> или перенесена на другой адрес
      </S.PageNotFoundDescription>
      <S.ReturnHomeButton onClick={()=> {navigate('/main')}}>
        Вернуться на главную
      </S.ReturnHomeButton>
    </S.NotFoundBlock>
  )
}
