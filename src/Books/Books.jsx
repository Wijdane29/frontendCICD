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
import Book11 from '../assets/The Lives of Lee Miller.jpg';
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
        'The Lives of Lee Miller.jpg': Book11,

        
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
