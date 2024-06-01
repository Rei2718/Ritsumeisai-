"use client";

import { Suspense } from 'react';
import Header from '../components/header';
import ScrollRevealContainer from '../components/ScrollReveal';

function Section01Content() {
  return (
    <>
      <Header />
      <img src="BG02.jpg" alt="BgImg" className="object-cover w-screen h-lvh fixed top-0 left-0 z-0"/>
      {/* Section 1 */}
      <section className="flex items-center justify-center h-lvh">
        {/* TopCharacter */}
        <div className="top-[12.5%] transform -translate-y-1/2 text-white text-center absolute mx-10 sm:mx-10 z-10">
          <ScrollRevealContainer move="bottom">
            <div className="mb-4 px-2 sm:px-5 text-4xl sm:text-5xl md:text-7xl">Section01</div>
          </ScrollRevealContainer>
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex items-center justify-center h-lvh text-center px-4 sm:px-10">
        {/* 内容を追加する場合、ここに記述 */}
      </section>
    </>
  );
}

export default function Section01() {
  return (
    <Suspense fallback={<div className='bg-black h-lvh'></div>}>
      <Section01Content />
    </Suspense>
  );
}
