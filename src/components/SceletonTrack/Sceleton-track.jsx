import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from '../Centerblock/Centerblock-style'
import { useThemeContext } from '../ThemeSwitcher/ThemeSwitcher'


export default function SceletonTrack() {
  const { theme } = useThemeContext()

  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage theme={theme}>
              <Skeleton />
          </S.TrackTitleImage>
          <S.TrackTitleText>
              <Skeleton width="240px" height="16px" />
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
            <Skeleton />
        </S.TrackAuthor>
        <S.TrackAlbum>
            <Skeleton />
        </S.TrackAlbum>
        <S.TrackTime>
          <S.TrackLikeSvg
            theme={theme}
          >
            <use xlinkHref="/img/icon/sprite.svg#icon-like" />
          </S.TrackLikeSvg>
          <S.TrackTimeText theme={theme}/>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}
