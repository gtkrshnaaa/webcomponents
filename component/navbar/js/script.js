function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Mendapatkan semua bagian (sections) dengan ID
const sections = document.querySelectorAll('section');

// Mendapatkan semua tombol navigasi
const navButtons = document.querySelectorAll('.nav-btn');

// Fungsi untuk menambahkan kelas aktif pada tombol navigasi yang sesuai dengan bagian yang sedang ditampilkan
function setActiveNav() {
    // Loop melalui setiap bagian
    sections.forEach(section => {
        const rect = section.getBoundingClientRect(); // Mendapatkan informasi mengenai posisi dan ukuran bagian

        // Menambahkan kelas aktif pada tombol navigasi jika bagian berada di tengah layar
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            const targetId = section.getAttribute('id');
            navButtons.forEach(button => {
                button.classList.remove('active');
                if (button.getAttribute('data-target') === targetId) {
                    button.classList.add('active');
                }
            });
        }
    });
}

// Event listener untuk mengaktifkan fungsi setActiveNav saat jendela di-scroll
window.addEventListener('scroll', setActiveNav);
