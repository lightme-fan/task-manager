import React, { FC } from 'react'
import { TagProp } from '@/types'

const Tag: FC<TagProp> = ({text, bgColor, color}) => {
  return (
    <div className={`rounded-xl py-2 px-4 text-xs ${color} ${bgColor}`}>
      {text}
    </div>
  )
}

export default Tag