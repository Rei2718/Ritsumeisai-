"use client";

import { Suspense } from 'react';
import Header from './components/header';
import ScrollRevealContainer from './components/ScrollReveal';

function HomeContent() {
  return (
    <>
      <Header />
      <div className="relative z-10 bg-gradient-css">
        {/* Section 1 */}
        <section className="flex items-center justify-center h-lvh">
          {/* TopCharacter */}
          <div className="top-[12.5%] transform -translate-y-1/2 text-white text-center absolute mx-10 sm:mx-10 z-10">
            <ScrollRevealContainer move="bottom">
              <div className="mb-4 px-2 sm:px-5 text-4xl sm:text-5xl md:text-7xl">2024 RitsumeiSai</div>
            </ScrollRevealContainer>
            <ScrollRevealContainer move="bottom">
              <div className="mb-1 text-base sm:text-lg md:text-xl">2024.7.20 (Mon) - 2024.7.21 (Tue)</div>
            </ScrollRevealContainer>
            <ScrollRevealContainer move="bottom">
              <div className="text-xs sm:text-sm md:text-base">@RitsumeikanKeisho 1:00</div>
            </ScrollRevealContainer>
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex items-center justify-center h-lvh">
          <div className="top-[37.5%] transform -translate-y-1/2 text-white text-center absolute z-10 mx-10 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40">
            <div className="text-lg sm:text-2xl text-white text-center flex flex-col items-center">
              <ScrollRevealContainer move="bottom">
                <p className="text-lg sm:text-2xl">
                  世界に没入し<br />
                  他者と共に創造し<br />
                  一体となる
                </p>
              </ScrollRevealContainer>
              <div className="flex my-4 sm:my-10">
                <ScrollRevealContainer move="bottom">
                  <div className="h-12 sm:h-24 border-r-2"></div>
                  <span className="text-gray-500"></span>
                </ScrollRevealContainer>
              </div>
              <div className="text-sm sm:text-base">
                <ScrollRevealContainer move="bottom">
                  <p className="mb-4 sm:mb-8">
                    <strong>立命館慶祥中学校・高等学校</strong>は、開校以来この言葉をスローガンに掲げ、日本国内だけでなく、世界を舞台に活躍できる人材の育成に力を入れてきました。
                  </p>
                </ScrollRevealContainer>

                <ScrollRevealContainer move="bottom">
                  <p className="mb-4 sm:mb-8">
                    「世界に通用する18歳」とはどんな力を持った人でしょうか？
                  </p>
                </ScrollRevealContainer>

                <ScrollRevealContainer move="bottom">
                  <p className="mb-4 sm:mb-8">
                    私は、英語や数学などの基礎学力はもちろんですが、3つの「C」を持っている人だと考えています。1つは、困難な問題にも果敢に挑戦（Challenge）するマインドを持っている人。2つ目は社会や世界に貢献（Contribution）する強い意志と高い志を持った人。3つ目は人種、宗教、文化の違いを超えて互いに協働（Collaboration）できる人です。
                  </p>
                </ScrollRevealContainer>

                <ScrollRevealContainer move="bottom">
                  <p className="mb-4 sm:mb-8">
                    そして、立命館慶祥中学校・高等学校には学力はもちろん、3つの「C」を身につける環境や行事がたくさんあります。
                  </p>
                </ScrollRevealContainer>

                <ScrollRevealContainer move="bottom">
                  <p>
                    一緒に「世界に通用する18歳」を目指しましょう!
                  </p>
                </ScrollRevealContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="flex items-center justify-center h-lvh text-center px-4 sm:px-10">
          {/* 内容を追加する場合、ここに記述 */}
        </section>

        {/* Section 4 */}
        <section className="flex items-center justify-center h-lvh text-center px-4 sm:px-10">
          <p className="text-lg sm:text-2xl text-white">Here is the K-tech add page. This page will be cleated by Shido Ito(2-G)</p>
        </section>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="bg-black" className='bg-black h-lvh'></div>}>
      <HomeContent />
    </Suspense>
  );
}
