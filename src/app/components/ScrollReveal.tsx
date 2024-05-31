"use client";

import { FC, useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";

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
    const section = sectionRef.current;
    if (!section) return;

    // Initial styles
    section.style.opacity = "0";
    section.style.filter = "blur(4px)";

    const revealOptions = {
      reset: true,
      delay: 300,
      opacity: 0, // Initial opacity
      origin: move || "bottom",
      distance: "20px",
      duration: 600,
      easing: "ease-in-out",
      beforeReveal: (el: HTMLElement) => {
        el.style.transition = "opacity 1s ease, filter 1s ease";
        el.style.opacity = "1";
        el.style.filter = "blur(0px)";
      },
      beforeReset: (el: HTMLElement) => {
        el.style.opacity = "0";
        el.style.filter = "blur(4px)";
      }
    };

    ScrollReveal().reveal(section, revealOptions);
  }, [move]);

  return <section ref={sectionRef}>{children}</section>;
};

export default ScrollRevealContainer;
