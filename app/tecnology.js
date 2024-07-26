import Image from 'next/image';

export default function Tecnology({items}) {
    return (
        <section className='text-center'>
        <p className='font-bold text-xl mt-10'>Tecnologías</p>
            <div className='flex flex-wrap justify-center gap-x-12 gap-y-6 mt-12'>
                {items.map((item, index) => (
                    <div key={index}>
                        <Image
                            src={item.icon.src}
                            alt={item.icon.alt}
                            width={30}
                            height={30}
                            style={{
                                maskImage: "linear-gradient(to bottom, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.20))"
                            }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
} 