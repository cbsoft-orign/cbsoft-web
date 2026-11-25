import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
  fallbackTitle?: string;
}

export function ResponsiveImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  wrapperClassName = '',
  priority = false,
  fallbackTitle,
}: ResponsiveImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-navy-950 via-navy-900 to-brand-deep/80 p-6 text-center text-white ${wrapperClassName}`}
        role="img"
        aria-label={alt}
      >
        <ImageIcon className="w-8 h-8 text-brand-electric" aria-hidden="true" />
        <span className="text-sm font-medium text-white/90">{fallbackTitle || alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
