import React from 'react'

const BetterButton = ({ text, bg }) => <button style={{ backgroundColor: bg, color: '#fff' }}>{text}</button>

const customComponents = {
  'better-button': BetterButton
}

export default function DynamicRenderer ({ data }) {
  return data.map(({ is, ...props }) => React.createElement(is in customComponents ? customComponents[is] : is, props))
}