import { useNavigate } from 'react-router-dom'
import * as S from './NotFound-style'
import {useThemeContext} from '../ThemeSwitcher/ThemeSwitcher'


export default function NotFound() {

const navigate = useNavigate()

const {theme} = useThemeContext();


  return (
    <S.NotFoundBlock>
      <S.Title>
      404
      </S.Title>
      <S.PageNotFound>
        Страница не найдена
        <S.PageNotFoundSvg theme={theme} src="/img/emoji/crying.png" alt="crying_emoji" />
      </S.PageNotFound>
      <S.PageNotFoundDescription theme={theme}>
        Возможно, она была удалена <br/> или перенесена на другой адрес
      </S.PageNotFoundDescription>
      <S.ReturnHomeButton theme={theme} onClick={()=> {navigate('/')}}>
        Вернуться на главную
      </S.ReturnHomeButton>
    </S.NotFoundBlock>
  )
}
