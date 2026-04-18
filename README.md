# AlumniTracker
Sistem Pelacakan Alumni Berbasis Web_Project3

Deskripsi Sistem:
AlumniTracker adalah sistem berbasis web yang digunakan untuk membantu pihak sekolah atau institusi dalam melakukan pengelolaan data alumni serta proses pelacakan keberadaan alumni setelah lulus.
Sistem ini dikembangkan sebagai lanjutan dari perancangan sistem pada Daily Project 2, dengan fokus utama pada implementasi proses pelacakan alumni yang sebelumnya telah dirancang dalam bentuk use case dan activity diagram.
Pada sistem ini, admin atau petugas dapat menambahkan data alumni, melakukan proses pelacakan secara bertahap, memverifikasi status alumni, serta menghasilkan laporan data alumni.
Fitur Sistem

Sistem AlumniTracker memiliki beberapa fitur utama, yaitu:
1. Login Admin
   Admin dapat masuk ke dalam sistem menggunakan username dan password.
2. Input Data Alumni
   Admin dapat menambahkan data alumni seperti nama, tahun lulus, dan kontak.
3. Proses Pelacakan Alumni
   Sistem menyediakan proses pelacakan alumni yang terdiri dari beberapa tahapan.
4. Verifikasi Status Alumni
   Admin dapat menentukan status akhir alumni setelah dilakukan pelacakan.
5. Dashboard Statistik
   Sistem menampilkan jumlah alumni berdasarkan status pelacakan.
6. Laporan Alumni
   Sistem menampilkan data alumni beserta status pelacakan.

Alur Proses Pelacakan Alumni
Proses pelacakan pada sistem ini dilakukan secara bertahap sebagai berikut:
1. Admin menambahkan data alumni
2. Status awal alumni adalah Belum Dilacak
3. Admin menekan tombol Mulai Pelacakan
4. Status berubah menjadi Sedang Dilacak
5. Admin menentukan hasil pelacakan dengan memilih:
   - Teridentifikasi
   - Tidak Ditemukan

Alur proses:
Belum Dilacak
     ↓
Sedang Dilacak
     ↓
Teridentifikasi / Tidak Ditemukan
Proses ini menunjukkan bahwa sistem telah memiliki tahapan pelacakan yang jelas sesuai dengan konsep sistem pelacakan.

Akun Login
Username: admin
Password: admin

Pengujian Sistem

Pengujian sistem dilakukan untuk memastikan setiap fitur berjalan dengan baik sesuai dengan kebutuhan sistem.

## Pengujian Sistem

Pengujian dilakukan untuk memastikan sistem berjalan sesuai kebutuhan dan proses pelacakan alumni dapat dilakukan dengan benar.

| No |         Fitur         |       Skenario Pengujian    |          Hasil yang Diharapkan         |Status |
|----|-----------------------|-----------------------------|----------------------------------------|-------|
| 1  | Login                 | Username dan password benar | Sistem berhasil login                  | Valid |
| 2  | Input Data Alumni     | Mengisi data alumni         | Data tersimpan                         | Valid |
| 3  | Mulai Pelacakan       | Klik tombol Mulai Pelacakan | Status berubah menjadi Sedang Dilacak  | Valid |
| 4  | Verifikasi Alumni     | Klik tombol Verifikasi      | Status berubah menjadi Teridentifikasi | Valid |
| 5  | Tidak Ditemukan       | Klik tombol Tidak Ditemukan | Status berubah menjadi Tidak Ditemukan | Valid |
| 6  | Dashboard             | Membuka halaman dashboard   | Statistik tampil                       | Valid |
| 7  | Laporan               | Membuka halaman laporan     | Data alumni tampil                     | Valid |

## Link Repository dan Publish

Link GitHub:  
https://github.com/najwaizzah/AlumniTracker  

Link Publish Web:  
https://najwaizzah.github.io/AlumniTracker/

