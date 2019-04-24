import React from 'react';
import QueueContext from '../../context/QueueContext'

export default function BeingHelpedList() {

  const students = () => {
    return (

      <QueueContext.Consumer>
        { value => {
          console.log(value)
          const students = value.currentlyBeingHelped
          return (
            students.map((s, i) => {
              return <li key={ i }>{ s.name }<span className="description">{ s.desc }</span></li>
            })
          )
        } }
      </QueueContext.Consumer>
    )
  }

  return (
    <ul>
      {students()}
    </ul>
  )
}