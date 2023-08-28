import * as S from './Gradient-style'
import { useThemeContext } from '../ThemeSwitcher/ThemeSwitcher'


export default function Gradient({bottom}) {
    const { theme } = useThemeContext()

  return (
    <S.CenterBlockGradient bottom={bottom}>
      <S.Gradient theme={theme}/>
    </S.CenterBlockGradient>
  )
}
