"use client";

import { Suspense } from 'react';
import Header from '../components/header';
import ScrollRevealContainer from '../components/ScrollReveal';

function Section02Content() {
  return (
    <>
      <Header />
      <div className="relative z-10 bg-gradient-css">
        {/* Section 1 */}
        <section className="flex items-center justify-center h-lvh">
          {/* TopCharacter */}
          Here is Section02
        </section>

        {/* Section 2 */}
        <section className="flex items-center justify-center h-lvh text-center px-4 sm:px-10">
          {/* 内容を追加する場合、ここに記述 */}
        </section>
      </div>
    </>
  );
}

export default function Section02() {
  return (
    <Suspense fallback={<div className='bg-black h-lvh'></div>}>
      <Section02Content />
    </Suspense>
  );
}
