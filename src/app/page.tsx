"use client";

import { Suspense } from 'react';
import Header from './components/header';
import ScrollRevealContainer from './components/ScrollReveal';
import ScrollIndicator from './components/ScrollIndicator';

function HomeContent() {
  return (
    <>
      <Header />
      <div className="relative z-10 bg-gradient-css">
        {/* Section 1 */}
        <section className="flex items-center justify-center h-lvh relative">
          {/* TopCharacter */}
          <div className="top-[50%] transform -translate-y-1/2 text-white text-center absolute mx-10 sm:mx-10 z-10">
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
            <div className="line-1-vertical absolute bottom-[15%] left-0 right-0 flex items-center justify-center">
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex items-center justify-center h-lvh">
          <div className="text-white text-center absolute z-10 mx-10 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40">
            <div className="text-lg sm:text-2xl text-white text-center flex flex-col items-center">
              <ScrollRevealContainer move="bottom">
                <p className="text-lg sm:text-2xl">
                  世界に没入し<br />
                  他者と共に創造し<br />
                  一体となる
                </p>
              </ScrollRevealContainer>
              <div className="flex my-8">
                <ScrollRevealContainer move="bottom">
                  <div className="h-20 border-r-2"></div>
                </ScrollRevealContainer>
              </div>
              <div className="text-sm sm:text-base">
                <ScrollRevealContainer move="bottom">
                  <p className="mb-4 sm:mb-8">
                    <strong><span className='text-red-500'>立命館慶祥中学校・高等学校</span></strong>は、開校以来この言葉をスローガンに掲げ、日本国内だけでなく、世界を舞台に活躍できる人材の育成に力を入れてきました。
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
        <section className="flex items-center justify-center h-lvh">
          <div className="text-white text-center flex flex-col items-center absolute z-10 mx-10 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40">
            <ScrollRevealContainer move="bottom">
              <p className="text-xl">
                注意事項 / 免責事項
              </p>
            </ScrollRevealContainer>
            <div className="flex my-8">
              <ScrollRevealContainer move="bottom">
                <div className="h-20 border-r-2"></div>
              </ScrollRevealContainer>
            </div>
            <div className="text-sm">
              <ScrollRevealContainer move="bottom">
                <p className="mb-4">
                  1. 校内の映像・音声機器には触れないでください
                </p>
              </ScrollRevealContainer>

              <ScrollRevealContainer move="bottom">
                <p className="mb-4">
                  2. 関係者以外立ち入り禁止のエリアには入らないでください
                </p>
              </ScrollRevealContainer>

              <ScrollRevealContainer move="bottom">
                <p className="mb-4">
                  3. 許可のある展示物以外には触れないでください
                </p>
              </ScrollRevealContainer>

              <ScrollRevealContainer move="bottom">
                <p className="mb-4">
                  4. 本校の敷地内における喫煙・飲酒はご遠慮ください
                </p>
              </ScrollRevealContainer>

              <ScrollRevealContainer move="bottom">
                <p className="mb-4">
                  5. 本校生徒の顔、又は生徒が映り込む写真・映像等のSNS等公衆への公開はご遠慮ください
                </p>
              </ScrollRevealContainer>

              <ScrollRevealContainer move="bottom">
                <p className="mb-4">
                  6. 当サイトを利用したこと、または何らかの原因によりこれをご利用できなかったことにより生じる一切の損害および第三者によるデータの書き込み、不正なアクセス、発言、メールの送信等に関して生じる一切の損害について、K-Techは、何ら責任を負うものではありません。
                </p>
              </ScrollRevealContainer>

              <ScrollRevealContainer move="bottom">
                <div className="text-xs mb-1">
                  <p className="mb-1">以下のプライバシーポリシーを必ずご確認ください</p>
                  <p className="text-blue-500">プライバシーポリシー</p>
                </div>
              </ScrollRevealContainer>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="flex items-center justify-center h-lvh text-center px-4 sm:px-10">
          <p className="text-lg sm:text-2xl text-white">Here is the K-tech page. This page will be cleated by Shido Ito(2-G)</p>
        </section>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className='bg-black h-lvh'></div>}>
      <HomeContent />
    </Suspense>
  );
}
