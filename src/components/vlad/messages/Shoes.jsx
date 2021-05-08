import React from 'react'
import Message from './Message'

export default function Shoes(props) {
  return (
    <div>
      <Message docsList={props.docsList} category="shoes"  />
    </div>
  )
}
