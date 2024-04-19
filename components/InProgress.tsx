import React from 'react'
import CardHeader from './CardHeader'
import TaskCard from './TaskCard'

const InProgress = () => {
  return (
    <div className="w-full">
      <CardHeader title='In Progress' dotColor="bg-yellow-500"/>
      <TaskCard taskName='This is a new task' />
    </div>
  )
}

export default InProgress