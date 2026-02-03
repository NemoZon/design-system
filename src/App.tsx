import { cva } from 'class-variance-authority'

const button = cva(
  'inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 active:translate-y-0 active:shadow',
  {
    variants: {
      tone: {
        primary:
          'bg-gradient-to-r from-indigo-500 to-violet-500 text-white border-transparent hover:shadow-indigo-300/40',
        ghost: 'bg-transparent border-transparent text-slate-700 hover:bg-slate-100',
      },
    },
    defaultVariants: { tone: 'primary' },
  },
)

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_#e2e8f0,_#f8fafc_40%,_#fff)] px-6">
      <section className="w-full max-w-4xl rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-xl backdrop-blur">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-slate-500">Design System</p>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Hello, Tailwind v4</h1>
            <p className="mt-3 max-w-xl text-base text-slate-600">
              Tailwind is wired via the official Vite plugin. Class Variance Authority (CVA) is ready for composable
              variants—see the buttons below.
            </p>
          </div>
          <div className="flex gap-3">
            <a className={button({ tone: 'primary' })} href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer">
              Tailwind Docs
            </a>
            <a className={button({ tone: 'ghost' })} href="https://cva.style" target="_blank" rel="noreferrer">
              CVA Guide
            </a>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-indigo-100 bg-indigo-50/80 p-4">
            <p className="text-sm font-medium text-indigo-800">Primary button</p>
            <p className="mt-1 text-sm text-indigo-900/80">Uses the default CVA variant.</p>
            <div className="mt-3">
              <button className={button()}>Create component</button>
            </div>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-800">Ghost button</p>
            <p className="mt-1 text-sm text-slate-600">Overrides the `tone` variant.</p>
            <div className="mt-3">
              <button className={button({ tone: 'ghost' })}>Secondary action</button>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

export default App
