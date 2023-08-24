/* eslint-disable jsx-a11y/media-has-caption */
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState, useEffect, useRef } from 'react'
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useGetFavoritesQuery,
} from '../../redux/api/favorites'
import ProgressBar from '../ProgressBar/ProgressBar'
import { useThemeContext } from '../ThemeSwitcher/ThemeSwitcher'

import * as S from './Player-style'

const PLAYER_ITEM_NAME = 'player'
const initialSettings = {
  volumeLevel: 100,
  isRepeat: true,
  isShuffle: true,
}

const getPlayerSettings = () => {
  const settings = localStorage.getItem(PLAYER_ITEM_NAME)
  return settings ? JSON.parse(settings) : initialSettings
}

const storePlayerSettings = (settings) => {
  localStorage.setItem(PLAYER_ITEM_NAME, JSON.stringify(settings))
}

export default function Player({ track, changeTrack }) {
  const { theme } = useThemeContext()

  const [isCanPlay, setIsCanPlay] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [percentage, setPercentage] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volumeLevel, setVolumeLevel] = useState(100)

  const [isRepeat, setIsRepeat] = useState(undefined)
  const [isShuffle, setIsShuffle] = useState(undefined)
  const { data: favorites } = useGetFavoritesQuery()
  const [addFavorite] = useAddFavoriteMutation()
  const [deleteFavorite] = useDeleteFavoriteMutation()
  const [favoriteSet, setFavoriteSet] = useState(new Set())
  const [activeClass, setActiveClass] = useState(false)

  const audioRef = useRef(null)

  const handleStart = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }
  const handleStop = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  const togglePlay = isPlaying ? handleStop : handleStart

  const onChange = (e) => {
    const audio = audioRef.current
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercentage(e.target.value)
  }

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }

  function secondsToHms(seconds) {
    if (!seconds) return '00m 00s'

    let duration2 = seconds
    const hours = duration2 / 3600
    duration2 %= 3600

    let min = parseInt(duration2 / 60, 10)
    duration2 %= 60

    let sec = parseInt(duration2, 10)

    if (sec < 10) {
      sec = `0${sec}`
    }
    if (min < 10) {
      min = `0${min}`
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}h ${min}m ${sec}s`
    }
    if (min === 0) {
      return `00m ${sec}s`
    }
    return `${min}m ${sec}s`
  }

  onvolumechange = (e) => {
    const audio = audioRef.current
    audio.volume = e.target.value / 100
    setVolumeLevel(audio.volume * 100)
  }

  const handleOnLikeClick = (item) => {
    const { id } = item
    if (!favoriteSet.has(id)) {
      addFavorite(id)
    }
  }

  const handleOnDislikeClick = (item) => {
    const { id } = item
    if (favoriteSet.has(id)) {
      deleteFavorite(id)
    }
    setActiveClass(id)
  }

  const handleChangeTrack = (eventName) => {
    const eventData = {
      eventName,
      isShuffle,
    }
    if (changeTrack) changeTrack(eventData)
  }

  const handleEnded = () => {
    if (isRepeat) {
      const audio = audioRef.current
      audio.currentTime = 0
      audio.play()
      return
    }
    handleChangeTrack('ended')
  }

  const handleCanPlayThrough = () => {
    setIsCanPlay(true)
  }


  useEffect(() => {
    if (!track) return
    const audio = audioRef.current
    setDuration(0)
    setIsCanPlay(false)
    audio.addEventListener('canplaythrough', handleCanPlayThrough)
    audio.addEventListener('timeupdate', getCurrDuration)
    audio.addEventListener('play', setIsPlaying)
    audio.addEventListener('ended', handleEnded)
    audio.play()
    // eslint-disable-next-line consistent-return
    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlayThrough)
      audio.removeEventListener('timeupdate', getCurrDuration)
      audio.removeEventListener('play', setIsPlaying)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [track])

  const storeSettings = () => {
    storePlayerSettings({
      ...getPlayerSettings(),
      volumeLevel,
      isRepeat,
      isShuffle,
    })
  }

  useEffect(() => {
    if (volumeLevel === undefined) return
    storeSettings()
  }, [volumeLevel])
  useEffect(() => {
    if (isRepeat === undefined) return
    storeSettings()
  }, [isRepeat])
  useEffect(() => {
    if (isShuffle === undefined) return
    storeSettings()
  }, [isShuffle])

  useEffect(() => {
    const settings = getPlayerSettings()
    setVolumeLevel(settings.volumeLevel)
    setIsRepeat(settings.isRepeat)
    setIsShuffle(settings.isShuffle)
  }, [track])

  useEffect(() => {
    if (!favorites) return
    setFavoriteSet(new Set(favorites.map((item) => item.id)))
  }, [favorites])
  

  return (
    <>
      <audio
        ref={audioRef}
        key={track?.track_file}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2))
        }}
      >
        <source src={track?.track_file} />
      </audio>

      <S.Bar>
        <S.BarContent theme={theme}>
          <ProgressBar onChange={onChange} percentage={percentage} />
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.PlayerControls>
                <S.PlayerBtnPrev
                  theme={theme}
                  onClick={() => handleChangeTrack('prev')}
                >
                  <S.PlayerBtnPrevSvg theme={theme} alt="prev">
                    <use xlinkHref="/img/icon/sprite.svg#icon-prev" />
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>
                <S.PlayerBtnPlay theme={theme} onClick={togglePlay}>
                  {isPlaying ? (
                    <S.PlayerBtnPlaySvg theme={theme} alt="pause">
                      <use xlinkHref="/img/icon/sprite.svg#icon-pause" />
                    </S.PlayerBtnPlaySvg>
                  ) : (
                    <S.PlayerBtnPlaySvg theme={theme} alt="play">
                      <use xlinkHref="/img/icon/sprite.svg#icon-play" />
                    </S.PlayerBtnPlaySvg>
                  )}
                </S.PlayerBtnPlay>
                <S.PlayerBtnNext
                  theme={theme}
                  onClick={() => handleChangeTrack('next')}
                >
                  <S.PlayerBtnNextSvg theme={theme} alt="next">
                    <use xlinkHref="/img/icon/sprite.svg#icon-next" />
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat theme={theme}>
                  <S.PlayerBtnRepeatSvg
                    theme={theme}
                    alt="repeat"
                    active={isRepeat ? 'true' : undefined}
                    onClick={() => setIsRepeat(!isRepeat)}
                  >
                    <use xlinkHref="/img/icon/sprite.svg#icon-repeat" />
                  </S.PlayerBtnRepeatSvg>
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle theme={theme}>
                  <S.PlayerBtnShuffleSvg
                    theme={theme}
                    alt="shuffle"
                    active={isShuffle ? 'true' : undefined}
                    onClick={() => setIsShuffle(!isShuffle)}
                  >
                    <use xlinkHref="/img/icon/sprite.svg#icon-shuffle" />
                  </S.PlayerBtnShuffleSvg>
                </S.PlayerBtnShuffle>
              </S.PlayerControls>

              <S.PlayerTrackPlay>
                <S.TrackPlayContain>
                  <S.TrackPlayImage theme={theme}>
                    {!isCanPlay ? (
                      <Skeleton/>
                    ) : (
                      <S.TrackPlaySvg theme={theme} alt="music">
                        <use xlinkHref="/img/icon/sprite.svg#icon-note" />
                      </S.TrackPlaySvg>
                    )}
                  </S.TrackPlayImage>
                  <S.TrackPlayName>
                    {!isCanPlay ? (
                      <Skeleton/>
                     ) : (
                      <S.TrackPlayNameLink theme={theme}>
                        {track.name}
                      </S.TrackPlayNameLink>
                    )}
                  </S.TrackPlayName>
                  <S.TrackPlayAuthor>
                    {!isCanPlay ? (
                      <Skeleton/>
                    ) : (
                      <S.TrackPlayAuthorLink theme={theme}>
                        {track.author}
                      </S.TrackPlayAuthorLink>
                    )}
                  </S.TrackPlayAuthor>
                </S.TrackPlayContain>

                <S.TrackPlayLikeDis>
                  <S.TrackPlayLike theme={theme}>
                    <S.TrackPlayLikeSvg
                      theme={theme}
                      alt="like"
                      active={
                        track && favoriteSet && favoriteSet.has(track.id)
                          ? 'true'
                          : undefined
                      }
                      onClick={() => handleOnLikeClick(track)}
                    >
                      <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                    </S.TrackPlayLikeSvg>
                  </S.TrackPlayLike>
                  <S.TrackPlayDislike theme={theme}>
                    <S.TrackPlayDislikeSvg
                      theme={theme}
                      alt="dislike"
                      active={activeClass ? 'true' : undefined}
                      onClick={() => handleOnDislikeClick(track)}
                    >
                      <use xlinkHref="/img/icon/sprite.svg#icon-dislike" />
                    </S.TrackPlayDislikeSvg>
                  </S.TrackPlayDislike>
                </S.TrackPlayLikeDis>
              </S.PlayerTrackPlay>
            </S.BarPlayer>

            <S.BarPlayerTimerBlock theme={theme}>
              <S.PlayerTimer>{secondsToHms(currentTime)}</S.PlayerTimer>/
              <S.PlayerTimer>{secondsToHms(duration)}</S.PlayerTimer>
            </S.BarPlayerTimerBlock>

            <S.BarVolumeBlock>
              <S.VolumeContent>
                <S.VolumeImage>
                  <S.VolumeSvg theme={theme} alt="volume">
                    <use xlinkHref="/img/icon/sprite.svg#icon-volume" />
                  </S.VolumeSvg>
                </S.VolumeImage>
                <ProgressBar
                  onChange={onvolumechange}
                  percentage={volumeLevel}
                  style={{
                    '--progress-bar-height': '3px',
                  }}
                />
              </S.VolumeContent>
            </S.BarVolumeBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    </>
  )
}
