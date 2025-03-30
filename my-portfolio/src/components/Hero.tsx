export default function Hero() {
    return (
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-dark text-text p-4">
        {/* Contenedor principal */}
        <div className="text-center w-full max-w-4xl"> {/* Limitar ancho máximo del contenido */}
          {/* Título */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text mb-6">
            Hi there, I'm <br/> {/* Salto de línea para móviles */}
            <span className="text-accent">Chris</span>
          </h1>
  
          {/* Subtítulo */}
          <p className="text-xl md:text-3xl text-text mb-8">
            Junior Web Developer
          </p>
  
          {/* Botón */}
          <button className="bg-slate-700 text-accent px-8 py-4 rounded-lg text-lg md:text-xl hover:bg-slate-600 transition-transform transform hover:scale-105">
            Contact Me
          </button>
        </div>
      </section>
    );
  }