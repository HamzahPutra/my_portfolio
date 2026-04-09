const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function() {
    menuLinks.classList.toggle('active'); // Memunculkan/Sembunyikan menu
    
    // Opsional: Animasi tombol garis 3 jadi silang (X)
    menu.classList.toggle('is-active');
});

// Menutup menu otomatis saat salah satu link diklik
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    menuLinks.classList.remove('active');
}));
