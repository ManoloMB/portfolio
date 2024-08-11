import Navbar from '@/components/navbar';
import TFG from '@/components/TFG';
import Footer from '@/components/footer';
import data from '@/components/data.json';

export default function Home() {
    return (
        <div>
            <Navbar items={data.navbarItems} />
            <main className='max-w-screen-lg px-10 mx-auto'>
                <TFG />
            </main>
            <Footer />
        </div>
    );
}