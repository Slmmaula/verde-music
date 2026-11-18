import { useEffect, useState } from 'react'
import { LAUNCH_AT } from '../config'
import { getTimeLeft } from './countdown'

const pad = (value: number) => String(value).padStart(2, '0')

function TimeTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass rounded-card flex min-w-[4.5rem] flex-col items-center gap-1 px-4 py-4 sm:min-w-[6.5rem] sm:px-6 sm:py-5">
      <span
        aria-hidden="true"
        className="font-display text-ink text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl"
      >
        {value}
      </span>
      <span
        aria-hidden="true"
        className="text-ink-2 text-xs font-medium tracking-[0.14em] uppercase"
      >
        {label}
      </span>
    </div>
  )
}

export default function ComingSoon() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const left = getTimeLeft(LAUNCH_AT, now)

  return (
    <div className="bg-bg-0 text-ink relative isolate flex min-h-svh flex-col overflow-hidden">
      <div aria-hidden="true" className="backdrop">
        <div className="backdrop-glow" />
        <div className="backdrop-halo" />
        <div className="backdrop-bloom" />
        <div className="backdrop-arc" />
        <div className="backdrop-stars" />
      </div>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-16 pb-[calc(4rem+10svh)] text-center">
        <img
          src="/verde-horizontal.png"
          width={400}
          height={100}
          alt="VERDE"
          className="reveal h-auto w-[240px] sm:w-[300px]"
        />

        <h1 className="reveal reveal-d1 font-display mt-10 text-5xl font-semibold tracking-[-0.03em] sm:text-7xl">
          Segera <span className="text-emerald-300">hadir.</span>
        </h1>

        <p className="reveal reveal-d2 text-ink-2 mt-5 max-w-[40rem] text-base leading-relaxed text-pretty sm:text-lg">
          Pemutar musik open source yang bisa dipasang di layar utama ponselmu. Dengarkan musik
          independen, Creative Commons, dan koleksimu sendiri.
        </p>

        <div className="reveal reveal-d3 mt-10">
          {left.done ? (
            <p className="glass rounded-card text-ink px-6 py-4">
              Sedikit lagi. Terima kasih sudah menunggu.
            </p>
          ) : (
            <div
              role="timer"
              aria-label="Hitung mundur"
              className="flex items-stretch gap-3 sm:gap-4"
            >
              <span className="sr-only">
                {`${left.days} hari, ${left.hours} jam, ${left.minutes} menit lagi`}
              </span>
              <TimeTile value={pad(left.days)} label="Hari" />
              <TimeTile value={pad(left.hours)} label="Jam" />
              <TimeTile value={pad(left.minutes)} label="Menit" />
              <TimeTile value={pad(left.seconds)} label="Detik" />
            </div>
          )}
        </div>
      </main>

      <footer className="text-ink-2 relative z-10 flex items-center justify-between gap-4 px-6 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-sm sm:px-10">
        <span>© 2026 VERDE</span>
        <a
          href="/privacy.html"
          className="hover:text-ink inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
        >
          Kebijakan Privasi
        </a>
      </footer>
    </div>
  )
}
