/* eslint-disable react/no-danger */
import React from 'react'

const Block = ({ html, className }) =>
  <div className={className} dangerouslySetInnerHTML={{ __html: html }} />

export default Block
