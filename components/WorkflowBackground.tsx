"use client";

// Signature element: a quiet animated node graph representing an automation
// pipeline — data flowing between nodes, dashes drifting along the paths.
export default function WorkflowBackground() {
  const nodes = [
    { x: 60, y: 80 },
    { x: 220, y: 40 },
    { x: 380, y: 120 },
    { x: 180, y: 200 },
    { x: 420, y: 220 },
    { x: 320, y: 300 },
    { x: 80, y: 280 },
  ];

  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [1, 3],
    [3, 6],
    [2, 4],
    [4, 5],
    [3, 5],
  ];

  return (
    <svg
      viewBox="0 0 500 360"
      className="absolute inset-0 w-full h-full opacity-[0.35] dark:opacity-[0.45]"
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="var(--accent)"
          strokeWidth="1"
          strokeDasharray="4 6"
          className="animate-dash"
          style={{ animationDelay: `${i * 0.4}s` }}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i} className="animate-floaty" style={{ animationDelay: `${i * 0.5}s` }}>
          <circle cx={n.x} cy={n.y} r="5" fill="var(--bg)" stroke="var(--accent)" strokeWidth="1.5" />
          <circle cx={n.x} cy={n.y} r="2" fill="var(--accent)" className="animate-pulseGlow" />
        </g>
      ))}
    </svg>
  );
}
