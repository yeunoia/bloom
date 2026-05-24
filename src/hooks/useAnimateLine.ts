import { type RefObject, useEffect } from "react"
import { BloomProps } from "../Bloom"

type Props = {
  lineRectRefs: RefObject<SVGRectElement[]>
  count: number
} & Required<
  Pick<BloomProps, "animated" | "delay" | "duration" | "tip" | "messiness">
>

export const useAnimateLine = ({
  lineRectRefs,
  animated,
  delay,
  duration,
  tip,
  messiness,
  count,
}: Props) => {
  const radius = tip === "round" ? 9999 : 0

  useEffect(() => {
    if (!animated || !lineRectRefs?.current) return

    lineRectRefs.current.forEach((el, i) => {
      if (!el) return
      el.animate(
        [
          { clipPath: `inset(0 100% 0 0 round 0 ${radius}px ${radius}px 0)` },
          { clipPath: `inset(-${messiness}px)` },
        ],

        {
          duration: duration * 1000,
          delay: (delay + i * duration) * 1000,
          fill: "both",
        },
      )
    })
  }, [animated, duration, delay, messiness, count, radius])
}
