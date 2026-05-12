import { ReactNode, useRef } from "react"
import { useContentSize } from "./useContentSize"

export type SmearProps = {
  children: ReactNode
}

export const Smear = ({ children, color }: SmearProps) => {
  const contentRef = useRef<HTMLSpanElement>(null)
  const { w, h } = useContentSize(contentRef)

  return (
    <span
      ref={contentRef}
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      {w > 0 && h > 0 && (
        <svg
          width={w}
          height={h}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
        />
      )}
      {children}
    </span>
  )
}
