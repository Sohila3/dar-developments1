import Navbar from "../components/Navbar";
import cover from "../assets/project-1.png";

function ProjectDamacPage() {
  return (
    <div className="w-full">

      <Navbar />

      <section className="relative h-screen">

        <img
          src={cover}
          alt="Dar Damac"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">

          <div>

            <h1 className="text-5xl md:text-7xl font-bold">
              Dar Damac
            </h1>

            <p className="mt-6 text-xl">
              مشروع سكني مميز في قلب طنطا
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ProjectDamacPage;