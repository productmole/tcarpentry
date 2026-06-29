interface Props {
  src: string
  alt: string
  className?: string
}

export default function StockImage({ src, alt, className = '' }: Props) {
  return (
    <div className="relative w-full h-full">
      <img src={src} alt={alt} className={className} />
      <div className="absolute inset-0 flex items-end justify-center pb-3 pointer-events-none">
        <span className="bg-black/80 text-white text-xs font-medium px-3 py-1.5 rounded border border-white/20 backdrop-blur-sm">
          Placeholder — replace with real photo
        </span>
      </div>
    </div>
  )
}
