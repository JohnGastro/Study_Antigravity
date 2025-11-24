import Link from "next/link";

export default function Home() {
  return (
  <div className="min-h-screen bg-slate-950 text-black space-y-0">
    {/*ここはHeroセクションです */}
    <section className="bg-linear-to-b from-slate-100 to-red-200 flex flex-col items-center justify-center min-h-screen text-center px-6 ">
      <div>
        <h1 className="text-4xl font-bold">Amu</h1>
        <p>サブコピーが入ります</p>
        <button className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-2 text-lg font-semibold text-slate-950 transition-transform duration-500 ease-out hover:scale-105">
          <span className="absolute inset-0 rounded-full bg-black transition-opacity duration-20000 group-hover:opacity-0" />
          <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-70 bg-size-[500%_500%] bg-[linear-gradient(120deg,#f97316,#facc15,#22d3ee,#a855f7,#f97316)] animate-[rainbow-button_15s_linear_infinite]" />
          <span className="relative z-10 text-white text-1xl">CTAボタン</span>
        </button>
      </div>
    </section>
    <section className="mx-auto  py-20 md:grid-cols-3 grid gap-8 bg-slate-900 p-5"> 
      {/*ここはtileセクションです */}
      <div className="rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-8 transition duration-1000 hover:-translate-y-2 hover:bg-amber-50 hover:shadow-xl hover:ring-2 hover:ring-yellow-500 hover:cursor-pointer group">
        <div className="h-12 w-12 rounded-full bg-emerald-400/20 flex items-center justify-center"></div>
        <h1 className="mt-6 text-2xl font-semibold">Mission</h1>
        <p className="mt-3 text-sm text-slate-300 leading-relaxed transition group-hover:text-slate-900 duration-1000">私たちのミッションについて</p>
      </div>
      <div className="rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-8 transition duration-1000 hover:-translate-y-2 hover:bg-amber-50 hover:shadow-xl hover:ring-2 hover:ring-yellow-500 hover:cursor-pointer group">
        <div className="h-12 w-12 rounded-full bg-yellow-400/20 flex items-center justify-center"></div>
        <h1 className="mt-6 text-2xl font-semibold">Vision</h1>
        <p className="mt-3 text-sm text-slate-300 leading-relaxed transition group-hover:text-slate-900 duration-1000">私たちのビジョンについて</p>
      </div>
      <div className="rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-8 transition duration-1000 hover:-translate-y-2 hover:bg-amber-50 hover:shadow-xl hover:ring-2 hover:ring-yellow-500 hover:cursor-pointer group">
        <div className="h-12 w-12 rounded-full bg-purple-400/20 flex items-center justify-center"></div>
        <h1 className="mt-6 text-2xl font-semibold">Values</h1>
        <p className="mt-3 text-sm text-slate-300 leading-relaxed transition group-hover:text-slate-900 duration-1000">私たちの価値について</p>
      </div>

    </section>
  </div>
  );
}