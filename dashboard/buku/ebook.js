          // Data Dummy untuk eBook
          const ebooks = [
            { id: 1, title: "Bentuk Akar, Persamaan kuadrat, Fungsi Kuadrat,  dan Pertidaksamaan ", url: "downloads/1.pdf" },
            { id: 2, title: "Turunan dan Integral", url: "downloads/2.pdf" },
            { id: 3, title: "Vektor dan Matriks", url: "downloads/1.pdf" },
            { id: 4, title: "Limit dan Fungsi Komposisi", url: "downloads/4.pdf" },
            { id: 5, title: "Tranformasi Geometri dan dimensi Tiga", url: "downloads/5.pdf" },
            { id: 6, title: "Stastiska, Peluang, dan Logika", url: "downloads/6.pdf" },
            { id: 7, title: "Persamaan Garis Lurus, Program Linear, dan Lingkaran", url: "downloads/7.pdf" },
            { id: 8, title: "Trigometri garis dan deret", url: "downloads/8.pdf" },
            { id: 9, title: "Suku Banyak dan algoritma", url: "downloads/9.pdf" },
            { id: 10, title: "Eksponen dan Logaritma 2", url: "downloads/10.pdf" },
            { id: 11, title: "Persamaan Kuadrat 2", url: "downloads/11.pdf" },
            { id: 12, title: "Lingkaran", url: "downloads/12.pdf" },
            { id: 13, title: "Suku Banyak", url: "downloads/13.pdf" },
            { id: 14, title: "Vektor", url: "downloads/14.pdf" },
            { id: 15, title: "Barisan dan deret 2", url: "downloads/15.pdf" },
            { id: 16, title: "Trigonometri", url: "downloads/16.pdf" },
            { id: 17, title: "Transformasi Geometri 2", url: "downloads/17.pdf" },
            { id: 18, title: "Dimensi Tiga", url: "downloads/18.pdf" },
            { id: 19, title: "Turunan 2", url: "downloads/19.pdf" },
            { id: 20, title: "Integral 2", url: "downloads/20.pdf" }

        ];

        // Render eBook List
        const ebookListContainer = document.getElementById("ebookListContainer");

        function renderEbookList() {
            ebookListContainer.innerHTML = ebooks.map(ebook => `
                 <div class="table-row">
            <div class="table-cell">${ebook.id}</div>
            <div class="table-cell">${ebook.title}</div>
            <div class="table-cell">
                <a href="${ebook.url}" download>
                    <i class="fas fa-download"></i> Download
                </a>
            </div>
        </div>
            `).join("");
        }

        // Render eBook List saat halaman pertama kali dimuat
        renderEbookList();