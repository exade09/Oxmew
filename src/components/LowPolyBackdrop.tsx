export default function LowPolyBackdrop({ mood = 'city' }: { mood?: 'city' | 'blue' | 'tunnel' }) {
  return (
    <div className={`low-poly-backdrop low-poly-${mood}`} aria-hidden="true">
      <div className="poly poly-one" /><div className="poly poly-two" /><div className="poly poly-three" />
      <div className="architecture" /><div className="floor-glow" />
    </div>
  )
}
