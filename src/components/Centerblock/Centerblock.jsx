import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState, useEffect } from 'react'
import * as S from './Centerblock-style'
import { useThemeContext } from '../ThemeSwitcher/ThemeSwitcher'
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useGetFavoritesQuery,
} from '../../redux/api/favorites'
import SceletonTrack from '../SceletonTrack/Sceleton-track'

export const toMMSS = (seconds) => {
  const min = Math.trunc(Number(seconds) / 60)
  const sec = Number(seconds) - min * 60
  return `${min}:${sec < 10 ? `0${sec}` : sec}`
}

export default function Centerblock({
  title,
  search,
  filter,
  data,
  onSelectTrack,
  selectedTrack,
  isFetching,
}) {
  const { theme } = useThemeContext()

  const { data: favorites } = useGetFavoritesQuery()
  const [addFavorite] = useAddFavoriteMutation()
  const [deleteFavorite] = useDeleteFavoriteMutation()
  const [favoriteSet, setFavoriteSet] = useState(new Set())

  useEffect(() => {
    if (!favorites) return
    setFavoriteSet(new Set(favorites.map((item) => item.id)))
  }, [favorites])

  const handleOnItemClick = (item) => {
    if (onSelectTrack) onSelectTrack(item)
  }

  const handleOnLikeClick = (item) => {
    if (favoriteSet.has(item.id)) {
      deleteFavorite(item.id)
    } else {
      addFavorite(item.id)
    }
  }

  return (
    <S.MainCenterBlock theme={theme}>
      {search}
      <S.CenterBlockH2 theme={theme}>{title}</S.CenterBlockH2>
      {filter}
      <S.CenterBlockContent>
        <S.ContentTitle>
          <S.PlayListTitleCol theme={theme}>Трек</S.PlayListTitleCol>
          <S.PlayListTitleCol theme={theme}>ИСПОЛНИТЕЛЬ</S.PlayListTitleCol>
          <S.PlayListTitleCol theme={theme}>АЛЬБОМ</S.PlayListTitleCol>
          <S.PlayListTitleCol theme={theme}>
            <S.PlaylistTitleSvg theme={theme} alt="time">
              <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
            </S.PlaylistTitleSvg>
          </S.PlayListTitleCol>
        </S.ContentTitle>
        <S.ContentPlaylist>
          {data &&
            data.map((item) => (
              <S.PlaylistItem>
                <S.PlaylistTrack 
                key={item.id}
                selected={
                  selectedTrack && selectedTrack.id === item.id
                    ? true
                    : undefined
                }
                onClick={() => handleOnItemClick(item)}>
                  <S.TrackTitle>
                    <S.TrackTitleImage theme={theme}>
                      {isFetching ? (
                        <Skeleton />
                      ) : (
                        <S.TrackTitleSvg theme={theme} alt="music">
                          <use xlinkHref="/img/icon/sprite.svg#icon-note" />
                        </S.TrackTitleSvg>
                      )}
                    </S.TrackTitleImage>
                    <S.TrackTitleText>
                      {isFetching ? (
                        <Skeleton width="240px" height="16px" />
                      ) : (
                        <S.TrackTitleLink theme={theme}>
                          {item.name} &nbsp;
                          <S.TrackTitleSpan theme={theme}>
                            {item.extraName}
                          </S.TrackTitleSpan>
                        </S.TrackTitleLink>
                      )}
                    </S.TrackTitleText>
                  </S.TrackTitle>
                  <S.TrackAuthor>
                    {isFetching ? (
                      <Skeleton />
                    ) : (
                      <S.TrackAuthorLink theme={theme}>
                        {item.author}
                      </S.TrackAuthorLink>
                    )}
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    {isFetching ? (
                      <Skeleton />
                    ) : (
                      <S.TrackAlbumLink theme={theme}>
                        {item.album}
                      </S.TrackAlbumLink>
                    )}
                  </S.TrackAlbum>
                  <S.TrackTime>
                    <S.TrackLikeSvg
                      theme={theme}
                      alt="like"
                      active={favoriteSet.has(item.id) ? 'true' : undefined}
                      onClick={(event) => {
                        handleOnLikeClick(item)
                        event.stopPropagation()
                      }}
                    >
                      <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                    </S.TrackLikeSvg>
                    <S.TrackTimeText theme={theme}>
                      {toMMSS(item.duration_in_seconds)}
                    </S.TrackTimeText>
                  </S.TrackTime>
                </S.PlaylistTrack>
              </S.PlaylistItem>
            ))}
            {isFetching && [...new Array(20).keys()].map((key) => <SceletonTrack key={key}/>)}
        </S.ContentPlaylist>
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  )
}
