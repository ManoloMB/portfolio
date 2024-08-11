import Image from 'next/image';

export default function Tecnology({ items }) {
    return (
        <section className='text-center py-10'>
            <h2 className="font-bold text-xl mb-12 text-center">Tecnologías</h2>
            <div className='flex flex-wrap justify-center gap-x-12 gap-y-6'>
                {items.map((item, index) => (
                    <div key={index}>
                        <Image
                            src={item.icon.src}
                            alt={item.icon.alt}
                            width={35}
                            height={35}
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