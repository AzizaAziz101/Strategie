import Image from "next/image";

export function BrandMark({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/images/hoeft-digital-mark.png"
      alt=""
      width={size}
      height={size}
      className={`shrink-0 rounded-xl border border-white/10 ${className}`}
    />
  );
}
