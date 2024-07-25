import React, { useEffect, useState, useRef } from "react";

export const TestimonialCard = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      switch (speed) {
        case "slow":
          containerRef.current.style.setProperty("--animation-duration", "80s");
          break;
        default:
          containerRef.current.style.setProperty("--animation-duration", "40s");
          break;
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`scroller ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`scroller-list ${start ? "animate-scroll" : ""} ${pauseOnHover ? "pause-on-hover" : ""}`}
      >
        {items.map((item, idx) => (
          <li
            className="card"
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="overlay"
              ></div>
              <span className="quote">
                {item.quote}
              </span>
              <div className="info">
                <span className="name">{item.name}</span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
