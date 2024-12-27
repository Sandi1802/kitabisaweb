        // Books Data for Pagination
        const booksData = {
            1: [
                { title: "Pendidikan Agama Islam", img: "/assets/images/ebook smk/1.jpg", url:"/dashboard/penulis/penulis.html" },
                { title: "Pendidikan Agama Konghucu", img: "/assets/images/ebook smk/1.jpg", url:"/dashboard/penulis/agamakonghucu.html" },
                { title: "Bahasa dan Sastra Indonesia", img: "/assets/images/ebook smk/1.jpg" },
                { title: "Biologi", img: "/assets/images/ebook smk/1.jpg" },
                { title: "Biologi 1", img: "/assets/images/ebook smk/1.jpg" },
                { title: "Ekonomi", img: "/assets/images/ebook smk/1.jpg" },
                { title: "Matematika", img: "/assets/images/ebook smk/1.jpg" },
                { title: "Sejarah Indonesia", img: "/assets/images/ebook smk/1.jpg" },
            ],
            2: [
                { title: "Fisika", img: "/assets/images/ebook sma/9.jpg" },
                { title: "Kimia", img: "/assets/images/ebook sma/10.jpg" },
                { title: "Geografi", img: "/assets/images/ebook sma/11.jpg" },
                { title: "Sosiologi", img: "/assets/images/ebook sma/12.jpg" },
                { title: "Bahasa Inggris", img: "/assets/images/ebook sma/13.jpg" },
                { title: "TIK", img: "/assets/images/ebook sma/14.jpg" },
                { title: "PKN", img: "/assets/images/ebook sma/15.jpg" },
                { title: "Kesenian", img: "/assets/images/ebook sma/16.jpg" },
            ],
            3: [
                { title: "Fisika", img: "/assets/images/ebook sma/17.jpg" },
                { title: "Kimia", img: "/assets/images/ebook sma/18.jpg" },
                { title: "Geografi", img: "/assets/images/ebook sma/19.jpg" },
                { title: "Sosiologi", img: "/assets/images/ebook sma/20.jpg" },
                { title: "Bahasa Inggris", img: "/assets/images/ebook sma/21.jpg" },
                { title: "TIK", img: "/assets/images/ebook sma/22.jpg" },
                { title: "PKN", img: "/assets/images/ebook sma/23.jpg" },
                { title: "Kesenian", img: "/assets/images/ebook sma/24.jpg" },
            ],
            4: [
                { title: "Pendidikan Agama Islam", img: "/assets/images/ebook sma/25.jpg" },
                { title: "Pendidikan Agama Konghucu", img: "/assets/images/ebook sma/26.jpg" },
                { title: "Bahasa dan Sastra Indonesia", img: "/assets/images/ebook sma/27.jpg" },
                { title: "Biologi", img: "/assets/images/ebook sma/28.jpg" },
                { title: "Biologi 1", img: "/assets/images/ebook sma/29.jpg" },
                { title: "Ekonomi", img: "/assets/images/ebook sma/31.jpg" },
                { title: "Matematika", img: "/assets/images/ebook sma/32.jpg" },
                { title: "Sejarah Indonesia", img: "/assets/images/ebook sma/33.jpg" },
            ],
        };
  
  // Elements
const bookGrid = document.getElementById('book-grid');
const pagination = document.getElementById('pagination');

// Render Books for the Given Page
function renderBooks(page) {
    const books = booksData[page];
    bookGrid.innerHTML = books.map((book) => `
        <div class="card">
            <img src="${book.img}" alt="${book.title}">
            <h3>${book.title}</h3>
            <button class="view-details" data-url="${book.url}">View Details</button>
        </div>
    `).join('');

    // Tambahkan event listener ke tombol setelah render
    const buttons = document.querySelectorAll('.view-details');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const url = e.target.dataset.url;
            if (url) {
                // Navigasi ke halaman baru
                window.location.href = url;
            } else {
                alert("Halaman tidak tersedia.");
            }
        });
    });
}

// Add Event Listeners to Pagination Buttons
pagination.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const page = e.target.dataset.page;

        // Highlight Active Button
        document.querySelectorAll('.pagination button').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        // Render Books for Selected Page
        renderBooks(page);
    }
});

// Render awal untuk halaman pertama
renderBooks(1);