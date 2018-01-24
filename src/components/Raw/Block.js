/* eslint-disable react/no-danger */
import React from 'react'

const Block = ({ html, className, component = 'div' }) =>
  React.createElement(component, {
    dangerouslySetInnerHTML: { __html: html },
    className,
  })

export default Block
