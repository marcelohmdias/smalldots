import React from 'react'

export default function Link({ onClick, ...rest }) {
  return (
    <a
      {...rest}
      onClick={event => {
        event.preventDefault()
        if (onClick) {
          onClick(event)
        }
      }}
    />
  )
}
