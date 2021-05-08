import React from 'react'
import Message from './Message'

export default function Clothes(props) {
  return (
    <div>
      <Message docsList={props.docsList} category="clothes"/>
    </div>
  )
}
