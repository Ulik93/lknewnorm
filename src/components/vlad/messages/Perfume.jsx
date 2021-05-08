import React from 'react'
import Message from './Message'

export default function Perfume(props) {
  return (
    <div>
      <Message docsList={props.docsList} category="perfume"/>
    </div>
  )
}
