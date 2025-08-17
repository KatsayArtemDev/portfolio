export default function Grid() {
  return (
    <div
      className="absolute h-full animate-pulse"
      style={{
        maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
      }}
    >
      <svg
        className="w-screen h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
            <path
              d="M 5 0 L 0 0 0 5"
              fill="none"
              stroke="#222"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
