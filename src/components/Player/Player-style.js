import styled, { css } from 'styled-components/macro'

export const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`

export const BarContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
`

export const BarPlayerBlock = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const BarPlayer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
export const BarVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  padding: 0 92px 0 0;
`
export const PlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  padding: 0 27px 0 31px;
`

const BtnIcon = css`
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &:active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
`

const PlayerBtns = css`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
`
export const PlayerBtnPrev = styled.div`
  ${BtnIcon}
  ${PlayerBtns}
  margin-right: 23px;
`
export const PlayerBtnPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
`
export const PlayerBtnPlay = styled.div`
  ${BtnIcon}
  ${PlayerBtns}
  margin-right: 23px;
`
export const PlayerBtnPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`
export const PlayerBtnNext = styled.div`
  ${BtnIcon}
  ${PlayerBtns}
  margin-right: 28px;
  fill: #a53939;
`
export const PlayerBtnNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`
export const PlayerBtnRepeat = styled.div`
  ${BtnIcon}
  ${PlayerBtns}
  margin-right: 24px;
`
export const PlayerBtnRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
export const PlayerBtnShuffle = styled.div`
  ${BtnIcon}
  ${PlayerBtns}
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
`
export const PlayerBtnShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
export const PlayerTrackPlay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
`

export const TrackPlayContain = styled.div`
  width: auto;
  display: -ms-grid;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  align-items: center;
`
export const TrackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  grid-area: image;
`
export const TrackPlaySvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`
export const TrackPlayAuthor = styled.div`
  grid-area: author;
  min-width: 49px;
`
export const TrackPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`
export const TrackPlayAlbum = styled.div`
  grid-area: album;
  min-width: 49px;
`
export const TrackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`
export const TrackPlayLikeDis = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26%;
`
export const TrackPlayLike = styled.div`
  ${BtnIcon}
  padding: 5px;
  &:active svg {
    fill: #ad61ff;
    stroke: #ffffff;
    cursor: pointer;
  }
`
export const TrackPlayDislike = styled.div`
  ${BtnIcon}
  padding: 5px;
  margin-left: 28.5px;
  &:active svg {
    fill: #ad61ff;
    stroke: #ffffff;
    cursor: pointer;
  }
`
export const TrackPlayLikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
  &:hover {
  }
`
export const TrackPlayDislikeSvg = styled.svg`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
`
export const BarPlayerTimerBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 138px;
`
export const PlayerTimer = styled.div``

export const VolumeContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`
export const VolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`
export const VolumeProgress = styled.div`
  width: 109px;
  cursor: pointer;
`
export const VolumeProgressLine = styled.input`
  width: 109px;
  cursor: pointer;
  accent-color: #ffffff;
`
