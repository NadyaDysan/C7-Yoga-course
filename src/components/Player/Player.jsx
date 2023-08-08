/* eslint-disable jsx-a11y/media-has-caption */
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState, useRef } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import { useThemeContext } from '../ThemeSwitcher/ThemeSwitcher'

import * as S from './Player-style'

export default function Player() {
  const [isLoading, setIsLoading] = useState(true)
  setTimeout(setIsLoading, 3000, false)

  const { theme } = useThemeContext()

  const [isPlaying, setIsPlaying] = useState(false)
  const [percentage, setPercentage] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volumeLevel, setVolumeLevel] = useState(50)

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

  return (
    <>
      <audio
        ref={audioRef}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2))
        }}
        onTimeUpdate={getCurrDuration}
      >
        <source src="music/Bobby_Marleni_-_Dropin.mp3" type="audio/mpeg" />
      </audio>

      <S.Bar>
        <S.BarContent theme={theme}>
          <ProgressBar onChange={onChange} percentage={percentage} />
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.PlayerControls>
                <S.PlayerBtnPrev theme={theme}>
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
                <S.PlayerBtnNext theme={theme}>
                  <S.PlayerBtnNextSvg theme={theme} alt="next">
                    <use xlinkHref="/img/icon/sprite.svg#icon-next" />
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat theme={theme}>
                  <S.PlayerBtnRepeatSvg theme={theme} alt="repeat">
                    <use xlinkHref="/img/icon/sprite.svg#icon-repeat" />
                  </S.PlayerBtnRepeatSvg>
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle theme={theme}>
                  <S.PlayerBtnShuffleSvg theme={theme} alt="shuffle">
                    <use xlinkHref="/img/icon/sprite.svg#icon-shuffle" />
                  </S.PlayerBtnShuffleSvg>
                </S.PlayerBtnShuffle>
              </S.PlayerControls>

              <S.PlayerTrackPlay>
                <S.TrackPlayContain>
                  <S.TrackPlayImage theme={theme}>
                    {isLoading ? (
                      <Skeleton />
                    ) : (
                      <S.TrackPlaySvg theme={theme} alt="music">
                        <use xlinkHref="/img/icon/sprite.svg#icon-note" />
                      </S.TrackPlaySvg>
                    )}
                  </S.TrackPlayImage>
                  <S.TrackPlayAuthor>
                    {isLoading ? (
                      <Skeleton />
                    ) : (
                      <S.TrackPlayAuthorLink theme={theme} href="http://">
                        Ты та...
                      </S.TrackPlayAuthorLink>
                    )}
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    {isLoading ? (
                      <Skeleton />
                    ) : (
                      <S.TrackPlayAlbumLink theme={theme} href="http://">
                        Баста
                      </S.TrackPlayAlbumLink>
                    )}
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>

                <S.TrackPlayLikeDis>
                  <S.TrackPlayLike theme={theme}>
                    <S.TrackPlayLikeSvg theme={theme} alt="like">
                      <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                    </S.TrackPlayLikeSvg>
                  </S.TrackPlayLike>
                  <S.TrackPlayDislike theme={theme}>
                    <S.TrackPlayDislikeSvg theme={theme} alt="dislike">
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
