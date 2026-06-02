import Navbar from "../components/Navbar";
import cover from "../assets/project-1.png";

function ProjectDamacPage() {
  return (
    <div className="w-full overflow-x-hidden">

      <Navbar />

      <section className="relative h-screen flex items-center justify-center">

        {/* BACKGROUND IMAGE */}
        <img
          src={cover}
          alt="Dar Damac"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        {/* LUXURY OVERLAY (gradient depth) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

        {/* GOLD GLOW */}
        <div className="absolute w-[500px] h-[500px] bg-[#C9A84C]/20 blur-[120px] top-[-120px] right-[-120px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-200/10 blur-[120px] bottom-[-120px] left-[-120px]" />

        {/* CONTENT */}
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">

          <h1 className="
            text-5xl md:text-7xl font-bold
            tracking-wide
            text-[#FAF6EE]
            drop-shadow-[0_0_25px_rgba(0,0,0,0.6)]
          ">
            Dar Damac
          </h1>

          <div className="w-24 h-[2px] bg-[#C9A84C] mx-auto mt-6" />

          <p className="
            mt-6 text-lg md:text-xl
            text-white/70
            leading-9
          ">
            مشروع سكني مميز في قلب طنطا يجمع بين الموقع الاستراتيجي
            والتصميم العصري وتجربة معيشية راقية
          </p>

        </div>

      </section>

    </div>
  );
}

export default ProjectDamacPage;