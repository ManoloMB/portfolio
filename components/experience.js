export default function Experience({ items }) {
    return (
        <div className='items-center justify-center py-10'>
            <h2 className="font-bold text-xl text-center mb-12">Experiencia</h2>
            {items.map((item, index) => (
                <div key={index}>
                    <div className="sm:flex items-center mt-8">
                        <div>
                            <h2 className="text-left font-bold inline-flex text-cyan-400">{item.title}</h2>
                        </div>
                        <p className="sm:flex-shrink sm:text-right flex-1 font-thin text-xs sm:mt-0 mt-1 text-cyan-200">{item.date}</p>
                    </div>
                    <p className="text-left mt-1">{item.description}</p>
                </div>
            ))}
        </div>
    );
}