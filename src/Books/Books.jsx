import React, { useEffect, useState } from 'react';
import Header from '../HomePage/Header';
import Card from '../Card/Card';
import Footer from '../HomePage/Footer';
import './Books.css';

// Import all images and PDFs
import TheLivesofLeeMiller from '../assets/The Lives of Lee Miller.jpg';
import background4 from '../assets/background4.jpeg';
import favbook2 from '../assets/fav-book2.jpeg';
import Book1 from '../assets/1.jpeg';
import Book2 from '../assets/2.jpeg';
import Book3 from '../assets/3.jpeg';
import Book4 from '../assets/4.jpeg';
import Book5 from '../assets/5.jpeg';
import Book6 from '../assets/6.jpeg';
import Book7 from '../assets/7.jpeg';
import Book8 from '../assets/8.jpeg';
import Book9 from '../assets/9.jpeg';
import Book10 from '../assets/10.jpeg';
import Book11 from '../assets/11.jpeg';
import Book42 from '../assets/The Lives of Lee Miller.jpg';
import Book12 from '../assets/12.jpeg';
import Book13 from '../assets/13.jpeg';
import Book14 from '../assets/14.jpeg';
import Book15 from '../assets/15.jpeg';
import Book16 from '../assets/16.jpeg';
import Book17 from '../assets/17.jpeg';
import Book18 from '../assets/18.jpeg';
import Book19 from '../assets/19.jpeg';
import Book21 from '../assets/21.jpeg';
import Book22 from '../assets/22.jpeg';
import Book23 from '../assets/23.jpeg';
import Book24 from '../assets/24.jpeg';
import Book25 from '../assets/25.jpeg';
import Book26 from '../assets/26.jpeg';
import Book27 from '../assets/27.jpeg';
import Book28 from '../assets/28.jpeg';
import Book29 from '../assets/29.jpeg';
import Book30 from '../assets/30.jpeg';
import Book31 from '../assets/31.jpeg';
import Book32 from '../assets/32.jpeg';
import Book33 from '../assets/33.jpeg';
import Book34 from '../assets/34.jpeg';
import Book35 from '../assets/35.jpeg';
import Book36 from '../assets/36.jpeg';
import Book37 from '../assets/37.jpeg';
import Book38 from '../assets/38.jpeg';
import Book39 from '../assets/39.jpeg';
import Book40 from '../assets/40.jpeg';

import TheLivesofLeeMillerPdf from '../../public/The Lives of Lee Miller.pdf';

// Map of book assets
const bookAssets = {
    images: {
        '1.jpeg': Book1,
        '2.jpeg': Book2,
        '3.jpeg': Book3,
        '4.jpeg': Book4,
        '5.jpeg': Book5,
        '6.jpeg': Book6,
        '7.jpeg': Book7,
        '8.jpeg': Book8,
        '9.jpeg': Book9,
        '10.jpeg': Book10,
        '11.jpeg': Book11,
        '12.jpeg': Book12,
        '13.jpeg': Book13,
        '14.jpeg': Book14,
        '15.jpeg': Book15,
        '16.jpeg': Book16,
        '17.jpeg': Book17,
        '18.jpeg': Book18,
        '19.jpeg': Book19,
        '21.jpeg': Book21,
        '22.jpeg': Book22,
        '23.jpeg': Book23,
        '24.jpeg': Book24,
        '25.jpeg': Book25,
        '26.jpeg': Book26,
        '27.jpeg': Book27,
        '28.jpeg': Book28,
        '29.jpeg': Book29,
        '30.jpeg': Book30,
        '31.jpeg': Book31,
        '32.jpeg': Book32,
        '33.jpeg': Book33,
        '34.jpeg': Book34,
        '35.jpeg': Book35,
        '36.jpeg': Book36,
        '37.jpeg': Book37,
        '38.jpeg': Book38,
        '39.jpeg': Book39,
        '40.jpeg': Book40,
        'The Lives of Lee Miller.jpg': Book42,

        
    },
    pdfs: {
        'The Lives of Lee Miller.pdf': TheLivesofLeeMillerPdf,
    },
};

function Books() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('https://id1ag92j8g.execute-api.eu-north-1.amazonaws.com/books/books');
                if (!response.ok) {
                    throw new Error('Failed to fetch books');
                }
                const data = await response.json();
                setBooks(data.books || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchBooks();
    }, []);

    if (loading) {
        return (
            <>
                <Header />
                <div className="main-content">
                    <p>Loading books...</p>
                </div>
                <Footer />
            </>
        );
    }

    if (error) {
        return (
            <>
                <Header />
                <div className="main-content">
                    <p>Error loading books: {error}</p>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="main-content">
                {books.length > 0 ? (
                    books.map((book) => (
                        <Card
                            key={book.BookID}
                            src={bookAssets.images[book.image] || '../assets/default-image.jpg'} // Fallback to a default image
                            name={book.name}
                            author={book.author}
                            genre={book.genre}
                            rating={parseFloat(book.rating)}
                            price={book.price}
                            publisher={book.publisher}
                            publicationDate={book.publicationDate}
                            ISBN={book.ISBN}
                            pageCount={book.pageCount}
                            language={book.language}
                            pdf={bookAssets.pdfs[book.pdfName] || null} // Fallback to null if no PDF
                            longDescription={book.description}
                        />
                    ))
                ) : (
                    <p>No books available.</p>
                )}
            </div>
            <Footer />
        </>
    );
}

export default Books;
