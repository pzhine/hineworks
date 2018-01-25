/* eslint-disable react/no-danger */
import React from 'react'

const Block = ({ html, className, component = 'div', brToSpace = false }) =>
  React.createElement(component, {
    dangerouslySetInnerHTML: {
      __html: brToSpace ? html.replace(/<br ?\/?>/, ' ') : html,
    },
    className,
  })

export default Block
