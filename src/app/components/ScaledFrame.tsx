import { useLayoutEffect, useRef, useState } from "react";

/**
 * Renders children at a fixed `designWidth` and proportionally scales the whole
 * frame down (CSS transform) to fit narrower containers — so it behaves like
 * an image rather than reflowing.
 */
export default function ScaledFrame({
  designWidth = 1100,
  children,
}: {
  designWidth?: number;
  children: React.ReactNode;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    if (!wrapperRef.current || !innerRef.current) return;
    const update = () => {
      const w = wrapperRef.current!.clientWidth;
      const s = Math.min(1, w / designWidth);
      const innerH = innerRef.current!.offsetHeight;
      setScale(s);
      setHeight(innerH * s);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(wrapperRef.current);
    ro.observe(innerRef.current);
    return () => ro.disconnect();
  }, [designWidth]);

  return (
    <div ref={wrapperRef} style={{ width: "100%", height, overflow: "hidden" }}>
      <div
        ref={innerRef}
        style={{
          width: designWidth,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}
