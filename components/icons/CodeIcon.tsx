interface CodeIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function CodeIcon({
  className,
  width = 24,
  height = 24,
}: CodeIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18 16L22 12L18 8M6 8L2 12L6 16M14.5 4L9.5 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
