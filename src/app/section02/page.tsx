"use client";

import Header from '../components/header';

export default function section02() {
  return (
    <>
        <Header />
        <img src="BG02.jpg" alt="BgImg" className="object-cover h-school w-screen fixed top-0 left-0 z-0"/>
        <div className="relative z-10 bg-gradient-css">
          {/* Section 1 */}
          <section className="flex items-center justify-center h-screen px-10">
            {/* TopCharacter */}
            <div className="top-[12.5%] transform -translate-y-1/2 text-white text-center absolute z-10">
              This is section02
            </div>
          </section>
        </div>
    </>
  );
}

