import Image from "next/image";

export default function Projects({ items }) {
  return (
    <div id="proyectos" className='items-center justify-center pb-10'>
      <h2 className="font-bold text-xl mb-12 text-center">Proyectos</h2>
      <section className="grid sm:grid-cols-3 grid-cols-1 gap-4">
        {items.map((item, index) => (
          <article key={index} className="bg-slate-950 w-full rounded-3xl shadow-lg overflow-hidden p-1">
          <a href='#' className='relative '>
            <figure className='w-full rounded-3xl overflow-hidden'>
              <Image 
                className="w-full h-full object-cover hover:scale-105 hover:brightness-105 transition-all duration-200" 
                src={item.image.src} 
                alt={item.image.alt}
                width={1000}
                height={1000}
              />
            </figure>
          </a>
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-cyan-400 mb-2">
              {item.title}
            </div>
            <p className="text-base">
              {item.text}
            </p>
          </div>
          <div className="px-6 py-2 flex flex-wrap gap-4">
            {item.tags.map(tag => (
            <a key={tag} className="bg-slate-800/70 rounded-full text-sm font-semibold px-3 py-1 hover:scale-105">
              {tag}
            </a>
            ))}
           </div>
           </article>
        ))}
      </section>
    </div>
  );
}