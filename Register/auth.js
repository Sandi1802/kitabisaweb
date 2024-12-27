// auth.js

// Fungsi untuk mengecek status login
function checkLogin() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        // Jika belum login, arahkan ke halaman login
        alert('Anda harus login terlebih dahulu untuk mengakses halaman ini.');
        window.location.href = '/login.html';
    }
}

// Fungsi logout
function logout() {
    localStorage.removeItem('isLoggedIn');
    alert('Anda berhasil logout.');
    window.location.href = '/login.html';
}
