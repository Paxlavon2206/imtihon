import React from 'react'

export const Create = (props) => {
    const {children, ...rest} = props;
  return (
    <div {...rest}>
        {children}
    </div>
  )
}
