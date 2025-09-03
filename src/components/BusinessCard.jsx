import Footer from './Footer';
import MainDetails from "./mainDetails/MainDetails";
import Articles from "./Articles";

export default function BusinessCard() {
    return (
        <div className="card-wrapper">
            <div className="card">
                <section className='image-container'>
                </section>
                <main>
                    <MainDetails />
                    <Articles />
                </main>
                <Footer />
            </div>
        </div>
    )
}