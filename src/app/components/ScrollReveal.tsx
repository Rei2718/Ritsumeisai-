"use client"

import { FC, useRef, useEffect } from "react";

interface ScrollRevealContainerProps {
  move?: string;
  children?: React.ReactNode;
}

const ScrollRevealContainer: FC<ScrollRevealContainerProps> = ({
  children,
  move
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const revealSection = async () => {
      // ブラウザ環境でのみ scrollReveal を実行する
      if (typeof window !== "undefined" && sectionRef.current) {
        const ScrollReveal = await import("scrollreveal");
        const sr = ScrollReveal.default();

        const section = sectionRef.current;

        if (section) {
          // 初期状態で文字を非表示にする
          section.style.opacity = "0";
          // 初期状態で文字にブラーをかける
          section.style.filter = "blur(4px)";
        }

        sr.reveal(sectionRef.current, {
          reset: true,
          delay: 300,
          opacity: 1, // アニメーション後の最終的な透明度
          origin: move || "bottom",
          distance: "5px",
          viewFactor: 0.0,
          beforeReveal: el => {
            // アニメーション前の処理
            if (el instanceof HTMLElement) {
              // ブラーを解除して文字を浮かび上がらせるアニメーション
              el.style.transition = "opacity 1s ease, filter 1s ease";
              el.style.opacity = "1";
              el.style.filter = "blur(0px)";
            }
          },
          beforeReset: el => {
            // アニメーション後の処理
            if (el instanceof HTMLElement) {
              // ブラーを再びかけて文字を非表示にする
              el.style.opacity = "0";
              el.style.filter = "blur(4px)";
            }
          }
        });
      }
    };

    revealSection();
  }, [move]);

  return <section ref={sectionRef}>{children}</section>;
};

export default ScrollRevealContainer;