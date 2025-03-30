export default function About() {
  return (
    <section className="py-20 px-4 bg-dark text-text">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-accent mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 bg-dark rounded-full shrink-0"></div>
          <p className="leading-relaxed text-base md:text-lg">
            I'm a junior web developer with a passion for creating dynamic, responsive websites.
            When I'm not coding, you can find me exploring new technologies or contributing to
            open-source projects.
          </p>
        </div>
      </div>
    </section>
  );
}