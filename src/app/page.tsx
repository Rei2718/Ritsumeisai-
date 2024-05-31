"use client";

import Header from './components/header';

export default function Home() {
  return (
    <>
        <Header />
        <img src="BG02.jpg" alt="BgImg" className="object-cover w-screen h-lvh fixed top-0 left-0 z-0"/>
        <div className="relative z-10 bg-gradient-css">
          {/* Section 1 */}
          <section className="flex items-center justify-center h-screen px-10">
            {/* TopCharacter */}
            <div className="top-[12.5%] transform -translate-y-1/2 text-white text-center absolute z-10">
              <div className="mb-4 px-5 text-5xl md:text-7xl">2024 RitsumeiSai</div>
              <div className="mb-1 text-lg md:text-xl">2024.7.20 (Mon) - 2024.7.21 (Tue)</div>
              <div className="text-sm md:text-base">@RitsumeikanKeisho 7:12</div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="flex items-center justify-center h-screen text-center px-10">
            <p className="text-2xl text-white">This is some description for the second section. It has a gradient background.</p>
          </section>

          {/* Section 3 */}
          <section className="flex items-center justify-center h-screen text-center px-10">
            <p className="text-2xl text-white">This is some description for the third section. It has a solid black background.</p>
          </section>

          {/* Section 4 */}
          <section className="flex items-center justify-center h-screen text-center px-10">
            <p className="text-2xl text-white">This is some description for the fourth section. It also has a gradient background.</p>
          </section>
        </div>
    </>
  );
}
