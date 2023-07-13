/* eslint-disable jsx-a11y/media-has-caption */
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState, useRef } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'

import * as S from './Player-style'

export default function Player() {
  const [isLoading, setIsLoading] = useState(true)
  setTimeout(setIsLoading, 5000, false)

  const [isPlaying, setIsPlaying] = useState(false)
  const [percentage, setPercentage] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

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
        <S.BarContent>
          <ProgressBar onChange={onChange} percentage={percentage} />
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.PlayerControls>
                <S.PlayerBtnPrev>
                  <S.PlayerBtnPrevSvg alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>
                <S.PlayerBtnPlay onClick={togglePlay}>
                  {isPlaying ? (
                    <S.PlayerBtnPlaySvg alt="pause">
                      <use xlinkHref="img/icon/sprite.svg#icon-pause" />
                    </S.PlayerBtnPlaySvg>
                  ) : (
                    <S.PlayerBtnPlaySvg alt="play">
                      <use xlinkHref="img/icon/sprite.svg#icon-play" />
                    </S.PlayerBtnPlaySvg>
                  )}
                </S.PlayerBtnPlay>
                <S.PlayerBtnNext>
                  <S.PlayerBtnNextSvg alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next" />
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat>
                  <S.PlayerBtnRepeatSvg alt="repeat">
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                  </S.PlayerBtnRepeatSvg>
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle>
                  <S.PlayerBtnShuffleSvg alt="shuffle">
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                  </S.PlayerBtnShuffleSvg>
                </S.PlayerBtnShuffle>
              </S.PlayerControls>

              <S.PlayerTrackPlay>
                <S.TrackPlayContain>
                  <S.TrackPlayImage>
                    {isLoading ? (
                      <Skeleton />
                    ) : (
                      <S.TrackPlaySvg alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                      </S.TrackPlaySvg>
                    )}
                  </S.TrackPlayImage>
                  <S.TrackPlayAuthor>
                    {isLoading ? (
                      <Skeleton />
                    ) : (
                      <S.TrackPlayAuthorLink href="http://">
                        Ты та...
                      </S.TrackPlayAuthorLink>
                    )}
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    {isLoading ? (
                      <Skeleton />
                    ) : (
                      <S.TrackPlayAlbumLink href="http://">
                        Баста
                      </S.TrackPlayAlbumLink>
                    )}
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>

                <S.TrackPlayLikeDis>
                  <S.TrackPlayLike>
                    <S.TrackPlayLikeSvg alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </S.TrackPlayLikeSvg>
                  </S.TrackPlayLike>
                  <S.TrackPlayDislike>
                    <S.TrackPlayDislikeSvg alt="dislike">
                      <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                    </S.TrackPlayDislikeSvg>
                  </S.TrackPlayDislike>
                </S.TrackPlayLikeDis>
              </S.PlayerTrackPlay>
            </S.BarPlayer>

            <S.BarPlayerTimerBlock>
              <S.PlayerTimer>{secondsToHms(currentTime)}</S.PlayerTimer>
              /
              <S.PlayerTimer>{secondsToHms(duration)}</S.PlayerTimer>
            </S.BarPlayerTimerBlock>

            <S.BarVolumeBlock>
              <S.VolumeContent>
                <S.VolumeImage>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                  </S.VolumeSvg>
                </S.VolumeImage>
                <S.VolumeProgress>
                  <S.VolumeProgressLine type="range" name="range" />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>

          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    </>
  )
}
