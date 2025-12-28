import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackColor?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className,
  fallbackColor = '#FEA38E',
  ...props
}: ImageWithFallbackProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative">
      {/* Placeholder visible pendant le chargement */}
      {(isLoading || hasError) && (
        <div
          className={`absolute inset-0 animate-pulse rounded-lg ${className}`}
          style={{ backgroundColor: hasError ? '#e5e5e5' : fallbackColor, opacity: 0.3 }}
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }}
        {...props}
      />
    </div>
  );
}
