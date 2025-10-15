export default function Hero() {
  return (
    <section className="py-20 flex flex-col justify-center items-center px-6 md:px-16 bg-[#0f0f0f] text-white">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Hi, I'm Najmieh 👋
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm a full-stack developer and scientific editor based in Tehran. I specialize in reproducible workflows, modular documentation, and debugging complex pipelines. I believe in clarity, rigor, and empowering communities through transparent tech.
        </p>
      </div>
    </section>
  );
}