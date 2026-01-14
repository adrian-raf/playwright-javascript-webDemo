# Pet Clinic - Automated Testing Project

## Deskripsi Proyek

Project ini adalah suite otomasi testing untuk aplikasi Pet Clinic menggunakan **Playwright**. Testing berfokus pada proses manajemen hewan peliharaan, mulai dari login pengguna hingga pembuatan data hewan baru di dalam sistem.

Proyek mengikuti **Page Object Model (POM)** pattern untuk memastikan kode yang terstruktur, maintainable, dan mudah dikembangkan.

---

## Fitur Utama

- ✅ Automated login testing
- ✅ Navigation testing
- ✅ Pet creation workflow
- ✅ Logout testing
- ✅ Test data management

---

## Struktur Proyek

```
test_autoMandiri/
├── tests/
│   └── addPet.spec.js           # File test utama (scenario buat pet baru)
├── pages/
│   ├── LoginPage.js              # Page Object untuk halaman login
│   ├── HomePage.js               # Page Object untuk halaman utama
│   ├── PetsPage.js               # Page Object untuk daftar pets
│   └── CreatePetsPage.js          # Page Object untuk form buat pet
├── data/
│   └── users.js                  # Test data (username, password)
├── playwright.config.js          # Konfigurasi Playwright
├── package.json                  # Dependencies dan scripts
└── readme.md                     # Dokumentasi (file ini)
```

---

## Langkah-Langkah Menjalankan Project

### 1. **Setup Awal**

- Pastikan Node.js sudah terinstall
- Jalankan command untuk install dependencies:
  ```bash
  npm install
  ```

### 2. **Menjalankan Tests**

- **Dengan tampilan browser (headed mode):**
  ```bash
  npm test
  ```
- **Menggunakan Playwright UI (interactive mode):**
  ```bash
  npm run ui
  ```

### 3. **Melihat Hasil Test**

- Report otomatis disimpan di folder `playwright-report/`
- Hasil test disimpan di folder `test-results/`

---

## Test Scenario: "Create New Pet"

Test ini melakukan workflow lengkap:

1. **Login** - Masuk sebagai pengguna dengan role Nurse
2. **Navigasi** - Menuju menu "Pets"
3. **Buat Pet Baru** - Mengisi form dengan data:
   - Nama: Pico
   - Tanggal Lahir: 11/03/2000
   - Jenis: Dragon
   - Pemilik: James
   - Umur: 17 tahun
4. **Verifikasi** - Memastikan notifikasi "saved successfully" muncul
5. **Logout** - Keluar dari aplikasi

---

## Tech Stack

- **Playwright** - Framework untuk automated testing
- **Node.js** - Runtime environment
- **JavaScript (ES Module)** - Bahasa pemrograman

---

## Catatan Pengembangan

- Test menggunakan test data dari `data/users.js`
- Setiap page direpresentasikan sebagai class terpisah (POM pattern)
- URL aplikasi: `https://demo.jmix.io/petclinic/`
- Tests dapat diperluas dengan scenario lain (edit, delete, update pet, dll)
