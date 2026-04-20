import Image from "next/image";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden border border-white/10 bg-black">
        <Image
          src="/oc-symbol-dark.png"
          alt=""
          width={72}
          height={72}
          className="h-full w-full object-cover"
          priority
        />
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block text-[15px] font-semibold text-white">
            OC Digital
          </span>
          <span className="mt-1 block text-[10px] uppercase text-muted">
            Sites profissionais
          </span>
        </span>
      )}
    </span>
  );
}
