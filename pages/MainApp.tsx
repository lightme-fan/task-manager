import React from 'react';
import Header from '@/components/Header';
import Todo from '@/components/Todo';
import InProgress from '@/components/InProgress';
import InReview from '@/components/InReview';
import Completed from '@/components/Completed';

const MainApp = () => {
  return (
    <div className="max-w-[1800px] m-auto p-4">
      <Header />
      <main className="p-4 rounded-2xl border-[14px] border-[#2f336d] lg:grid lg:grid-cols-[500px_minmax(900px,_1fr)] gap-3">
        <div>
          Board menu
        </div>
        <div className='bg-[#292D32] p-4 flex justify-between'>
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