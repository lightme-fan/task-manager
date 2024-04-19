import React, { FC } from 'react'
import { CardHeaderProp } from '@/types'

const CardHeader: FC<CardHeaderProp> = ({title, dotColor}) => {
  return (
    <div className="flex items-center gap-2 mb-6">
      <div className={`w-2 h-2 ${dotColor} rounded-full`}></div>
      <div>{title}(0)</div>
    </div>
  )
}

export default CardHeader