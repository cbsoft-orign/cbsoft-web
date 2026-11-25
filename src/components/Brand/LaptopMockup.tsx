import logoImg from '../../assets/logocbsoft.jpeg';

export function LaptopMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[540px] select-none" aria-label="Cbsoft platform preview on laptop">
      {/* Ambient glow behind laptop */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-brand-primary/35 via-brand-electric/20 to-brand-magenta/30 blur-3xl"
        aria-hidden="true"
      />

      {/* Screen lid */}
      <div className="relative rounded-t-2xl border border-white/15 bg-[#0E1335] p-2.5 sm:p-3.5 shadow-2xl shadow-black/60">
        {/* Camera bezel dot */}
        <div className="mb-2 flex justify-center" aria-hidden="true">
          <div className="h-1.5 w-1.5 rounded-full bg-white/25" />
        </div>

        {/* Display panel */}
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white">
          {/* Top simulated browser bar */}
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-3.5 py-2">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
            </div>
            <span className="font-mono text-[11px] text-ink-muted">cbsoft.tech</span>
            <span className="w-8" aria-hidden="true" />
          </div>

          {/* Screen canvas displaying official Cbsoft logo */}
          <div className="flex flex-col items-center justify-center bg-gradient-to-b from-white via-white to-surface-light px-6 py-8 sm:py-11">
            <div className="flex flex-col items-center">
              <img
                src={logoImg}
                alt="Cbsoft Official Logo — Future is Now"
                className="h-36 w-36 sm:h-44 sm:w-44 object-contain"
              />
              <div className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
              <p className="mt-3 text-center text-xs sm:text-sm font-medium text-ink-muted">
                Smart Solutions. Greater Opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop lower deck / aluminum lip */}
      <div className="relative mx-auto h-3.5 w-[104%] -ml-[2%] rounded-b-xl border-t border-white/20 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 shadow-lg">
        <div className="mx-auto h-1.5 w-20 rounded-b-md bg-slate-600/70" />
      </div>
    </div>
  );
}
