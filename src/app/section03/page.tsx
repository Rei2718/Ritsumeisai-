"use client";

import { Suspense } from 'react';
import Header from '../components/header';
import ScrollRevealContainer from '../components/ScrollReveal';

function Section03Content() {
  return (
    <>
      <Header />
      <div className="relative z-10 bg-gradient-css">
        {/* Section 1 */}
        <section className="flex items-center justify-center h-lvh">
          {/* TopCharacter */}
          Here is Section01
        </section>

        {/* Section 2 */}
        <section className="flex items-center justify-center h-lvh text-center px-4 sm:px-10">
          {/* 内容を追加する場合、ここに記述 */}
        </section>
      </div>
    </>
  );
}

export default function Section03() {
  return (
    <Suspense fallback={<div className='bg-black h-lvh'></div>}>
      <Section03Content />
    </Suspense>
  );
}
