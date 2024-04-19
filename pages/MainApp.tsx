import React from 'react';
import Header from '@/components/Header';
import Todo from '@/components/Todo';
import InProgress from '@/components/InProgress';
import InReview from '@/components/InReview';
import Completed from '@/components/Completed';
import BoardMenuItem from '@/components/BoardMenuItem';

import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

const MainApp = () => {
  return (
    <div className="max-w-[1800px] m-auto p-4">
      <Header />
      <main className="p-4 rounded-2xl border-[14px] border-[#2f336d] lg:grid lg:grid-cols-[300px_minmax(900px,_1fr)] gap-3 h-[85vh]">
        <div className="flex flex-col justify-between">
          <ul className="flex flex-col gap-4">
            <BoardMenuItem />
            <BoardMenuItem />
            <BoardMenuItem />
          </ul>
          <div className="bg-[#292D32] p-1 rounded-xl flex">
            <button className="w-full px-2 py-2 bg-black rounded-xl">
              <NightlightRoundIcon /> Dark
            </button>
            <button className="w-full px-2 py-2 bg-[#292D32] rounded-xl">
              <LightModeIcon /> Light
            </button>
          </div>
        </div>
        <div className='bg-[#292D32] p-4 flex justify-between gap-3 flex-wrap 2xl:flex-nowrap w-full'>
          <Todo />
          <InProgress />
          <InReview />
          <Completed />
        </div>
      </main>
    </div>
  )
}

export default MainApp;