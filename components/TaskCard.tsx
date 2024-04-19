import React, { FC } from 'react'
import Tag from './Tag'
import { TaskProp } from '@/types'

const TaskCard: FC<TaskProp> = ({taskName}) => {
  return (
    <div className="p-4 bg-black rounded-xl flex flex-col gap-6 cursor-grab">
      <div>{taskName}</div>
      <div className="flex gap-4">
        <Tag text='frontend-end' bgColor='bg-amber-50' color='text-black'/>
      </div>
    </div>
  )
}

export default TaskCard