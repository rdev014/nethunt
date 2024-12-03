import { useId } from "react";
import { cn } from "@/lib/utils";

interface DotPatternProps {
  width?: number; // Changed `any` to `number` for width
  height?: number; // Changed `any` to `number` for height
  x?: number; // Changed `any` to `number` for x
  y?: number; // Changed `any` to `number` for y
  cx?: number; // Changed `any` to `number` for cx
  cy?: number; // Changed `any` to `number` for cy
  cr?: number; // Changed `any` to `number` for cr
  className?: string;
  [key: string]:unknown; // Keep as `any` for additional props
}

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}: DotPatternProps) {
  const id = useId(); // Generates a unique ID for the pattern

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id} // Unique ID for the pattern
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}

export default DotPattern;
