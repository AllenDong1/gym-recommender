import Image from "next/image";

export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/logo-kangaroo-mark.png"
      alt=""
      width={654}
      height={605}
      priority={priority}
      unoptimized
      className={`object-contain ${className ?? ""}`}
    />
  );
}
