// Fungsi ganti QRIS otomatis
function changeQRIS() {
    const select = document.getElementById('paymentMethod');
    const qrisImg = document.getElementById('qrisImage');
    const qrisLabel = document.getElementById('qrisLabel');
    const paymentText = document.getElementById('paymentText');

    const selectedValue = select.value;

    if (selectedValue === 'dana') {
        qrisImg.src = 'qris-dana.png';
        qrisLabel.innerText = 'QRIS DANA - MLA Laguage';
        paymentText.innerText = 'Scan QRIS DANA di bawah ini:';
    } else if (selectedValue === 'gopay') {
        qrisImg.src = 'qris-gopay.png';
        qrisLabel.innerText = 'QRIS GoPay - Ridho';
        paymentText.innerText = 'Scan QRIS GoPay di bawah ini:';
    } else if (selectedValue === 'ovo') {
        qrisImg.src = 'qris-ovo.png';
        qrisLabel.innerText = 'QRIS OVO - Ridho';
        paymentText.innerText = 'Scan QRIS OVO di bawah ini:';
    } else if (selectedValue === 'shopeepay') {
        qrisImg.src = 'qris-shopeepay.png';
        qrisLabel.innerText = 'QRIS ShopeePay - Ridho';
        paymentText.innerText = 'Scan QRIS ShopeePay di bawah ini:';
    }
}

// Fungsi saat tombol Kirim Pendaftaran diklik
function handleFormSubmit(event) {
    event.preventDefault(); // Mencegah reload halaman bawaan browser

    // Sembunyikan Header, Detail Turnamen, dan Formulir
    document.getElementById('mainHeader').style.display = 'none';
    document.getElementById('tournamentDetails').style.display = 'none';
    document.getElementById('formSection').style.display = 'none';

    // Tampilkan Halaman Penutup
    const thankYou = document.getElementById('thankYouSection');
    thankYou.classList.remove('hidden');
    thankYou.style.display = 'block';

    // Scroll ke bagian paling atas
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
