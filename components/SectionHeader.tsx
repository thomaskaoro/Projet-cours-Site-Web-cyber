
import React from 'react';

interface Props {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const SectionHeader: React.FC<Props> = ({ tag, title, subtitle, align = 'left', light = false }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl`}>
      {tag && (
        <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-medium block mb-4">
          {tag}
        </span>
      )}
      <h2 className={`text-3xl md:text-5xl font-serif font-light mb-6 leading-tight ${light ? 'text-night' : 'text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed font-light ${light ? 'text-slate-600' : 'text-slate-200'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
