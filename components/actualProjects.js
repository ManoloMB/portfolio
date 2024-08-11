import React from "react";
import Link from 'next/link';
import Image from 'next/image';

export default function ActualProjects({ items }) {
    return (
        <section id="proyectos-actuales" className="text-center py-10">
            <h2 className="font-bold text-xl mb-12 text-center">Proyectos Actuales</h2>
            {items.map((item, index) => (
                <article key={index} className="flex md:flex-row flex-col text-left bg-slate-950 w-full rounded-3xl shadow-lg overflow-hidden p-1">
                    <Link href={item.url} className='flex flex-shrink relative'>
                        <figure className='rounded-3xl h-fit overflow-hidden'>
                            <Image
                                className="min-w-72 object-cover hover:scale-105 hover:brightness-105 transition-all duration-200"
                                src={item.image.src}
                                alt={item.image.alt}
                                width={1000}
                                height={1000}
                            />
                        </figure>
                    </Link>
                    <div className="felx flex-grow">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl text-cyan-400 mb-2">
                                {item.title}
                            </div>
                            <p className="text-base">
                                {item.text.text1}
                            </p>
                            <p className="text-base mt-1">
                                {item.text.text2}
                            </p>
                        </div>
                        <div className="px-6 pb-2 flex flex-wrap gap-4">
                            {item.tags.map((tag, indexTag) => (
                                <Link href={tag.url} key={indexTag} target="_blank" className="bg-slate-800/70 rounded-full text-sm font-semibold px-3 py-1 hover:scale-105">
                                    {tag.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </article>
            ))}
        </section>

    )
}