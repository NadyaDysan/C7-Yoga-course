import { useState, useEffect, useRef } from 'react'
import * as S from './ProgressBar-style'
import { useThemeContext } from '../ThemeSwitcher/ThemeSwitcher'

export default function ProgressBar({ onChange, percentage }) {
  const [position, setPosition] = useState(0)
  const [marginLeft, setMarginLeft] = useState(0)
  const [progressBarWidth, setProgressBarWidth] = useState(0)

  const rangeRef = useRef()
  const thumbRef = useRef()

  const { theme } = useThemeContext()

  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width
    const thumbWidth = thumbRef.current.getBoundingClientRect().width
    const centerThumb = (thumbWidth / 100) * percentage * -1
    const centerProgressBar =
      thumbWidth +
      (rangeWidth / 100) * percentage -
      (thumbWidth / 100) * percentage
    setMarginLeft(centerThumb)
    setProgressBarWidth(centerProgressBar)
    setPosition(percentage)
  }, [percentage])

  return (
    <S.ProgressBarContainer theme={theme}>
      <S.ProgressBarCover
        style={{
          width: `${progressBarWidth}px`,
        }}
      />
      <S.ProgressBarThumb
        theme={theme}
        ref={thumbRef}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`,
        }}
      />
      <S.ProgressBarInputRange
        theme={theme}
        type="range"
        value={position}
        ref={rangeRef}
        step="0.01"
        onChange={onChange}
      />
    </S.ProgressBarContainer>
  )
}
