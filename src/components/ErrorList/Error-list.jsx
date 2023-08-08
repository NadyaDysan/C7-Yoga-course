/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import * as S from './Error-list-style'

const ErrorItem = ({ id, error, message, isHidden = false, onHide = undefined }) => {
    const [hidden, setHidden] = useState(isHidden)
  
    const handleClose = () => {
      setHidden(true)
      if (onHide) {
        onHide(id)
      }
    }
  
    return (
      <S.ErrorItem isHidden={hidden} onClick={handleClose}>
        <p>{error}</p>
        <p>{message}</p>
        <p>X</p>
      </S.ErrorItem>
    )
  }

const ErrorList = ({ reducer, selector }) => {
  const dispatch = useDispatch()
  const errors = useSelector(selector)

  const handleOnHide = (id) => {
    dispatch(reducer(id))
  }

  if ( !errors || errors.length === 0 || !errors.length) {
    return
  }

  return (
    <S.ErrorList>
      {errors.map((item) => {
        return (
          <ErrorItem
            key={`${item.id}${Date.now()}`}
            id={item.id}
            error={item.error}
            message={item.message}
            isHidden={item.isHidden}
            onHide={handleOnHide}
          />
        )
      })}
    </S.ErrorList>
  )
}

export default ErrorList