/* Reusable SVG shape primitives for the visual system */
import { useId, type SVGProps } from "react";

export function HatchedCircle({ size = 200, color = "#08B9E6", className = "" }: { size?: number; color?: string; className?: string }) {
  const reactId = useId();
  const id = `hatch-${reactId.replaceAll(":", "")}`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <pattern id={id} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke={color} strokeWidth="2.4" />
        </pattern>
      </defs>
      <circle cx="50" cy="50" r="48" fill={`url(#${id})`} />
    </svg>
  );
}

export function ArcThick({ color = "#00384C", className = "", size = 260, from = 210, to = 330 }: { color?: string; className?: string; size?: number; from?: number; to?: number }) {
  const cx = 50, cy = 50, r = 42;
  const start = (from * Math.PI) / 180;
  const end = (to * Math.PI) / 180;
  const large = to - from > 180 ? 1 : 0;
  const x1 = cx + r * Math.cos(start), y1 = cy + r * Math.sin(start);
  const x2 = cx + r * Math.cos(end), y2 = cy + r * Math.sin(end);
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path d={`M${x1} ${y1} A${r} ${r} 0 ${large} 1 ${x2} ${y2}`} stroke={color} strokeWidth="16" fill="none" strokeLinecap="butt" />
    </svg>
  );
}

export function BrushStroke({ color = "#FFB400", className = "", width = 180, height = 22 }: { color?: string; className?: string; width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 180 22" className={className} aria-hidden="true">
      <path d="M4 12 C 30 4, 80 20, 120 8 S 176 14, 178 10" stroke={color} strokeWidth="10" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function DiamondsCluster({ color = "#08B9E6", className = "", size = 60 }: { color?: string; className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" className={className} aria-hidden="true">
      {[0,1,2].flatMap((r) => [0,1,2].map((c) => (
        <rect key={`${r}-${c}`} x={c*22} y={r*22} width="10" height="10" transform={`rotate(45 ${c*22+5} ${r*22+5})`} fill={color} />
      )))}
    </svg>
  );
}

export function Triangle({ color = "#ED1C24", size = 120, className = "", rotate = 0 }: { color?: string; size?: number; className?: string; rotate?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true" style={{ transform: `rotate(${rotate}deg)` }}>
      <polygon points="50,6 96,90 4,90" fill={color} />
    </svg>
  );
}

export function QuarterCircle({ color = "#ED1C24", size = 160, className = "", corner = "tl" }: { color?: string; size?: number; className?: string; corner?: "tl"|"tr"|"bl"|"br" }) {
  const paths: Record<string,string> = {
    tl: "M0 100 L0 0 A100 100 0 0 1 100 100 Z",
    tr: "M100 100 L100 0 A100 100 0 0 0 0 100 Z",
    bl: "M0 0 L0 100 A100 100 0 0 0 100 0 Z",
    br: "M100 0 L100 100 A100 100 0 0 1 0 0 Z",
  };
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path d={paths[corner]} fill={color} />
    </svg>
  );
}

export function DottedCurve(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 40" fill="none" aria-hidden="true" {...props}>
      <path d="M2 20 Q 60 -10, 120 20 T 198 20" stroke="currentColor" strokeWidth="3" strokeDasharray="1 8" strokeLinecap="round" />
    </svg>
  );
}
