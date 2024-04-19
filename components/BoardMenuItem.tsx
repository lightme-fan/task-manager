import React from 'react'
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';

const BoardMenuItem = () => {
  return (
    <li className="flex gap-4">
      <div className={`w-6 h-6 rounded-full bg-white`}>
        <LocalLibraryOutlinedIcon />
      </div>
      BoardMenuItem
    </li>
  )
}

export default BoardMenuItem