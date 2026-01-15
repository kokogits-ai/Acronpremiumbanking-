
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Assets Managed', value: '€12.4B+' },
    { label: 'Countries Served', value: '42' },
    { label: 'Platform Uptime', value: '99.99%' },
    { label: 'Years of Operation', value: '100+' },
  ];

  return (
    <section className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col space-y-1">
              <span className="text-3xl md:text-4xl font-bold text-[#0f172a] tracking-tight font-serif">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm uppercase tracking-widest text-slate-500 font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
