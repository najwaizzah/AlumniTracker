function login() {
  let user = document.getElementById("username").value;

  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "admin") {
    localStorage.setItem("login", "true");

    window.location = "dashboard.html";
  } else {
    alert("Login gagal");
  }
}

function cekLogin() {
  if (localStorage.getItem("login") !== "true") {
    window.location = "index.html";
  }
}

function logout() {
  localStorage.removeItem("login");

  window.location = "index.html";
}

function tambahData() {
  let nama = document.getElementById("nama").value;

  let tahun = document.getElementById("tahun").value;

  let kontak = document.getElementById("kontak").value;

  let data = JSON.parse(localStorage.getItem("alumni")) || [];

  data.push({
    nama: nama,
    tahun: tahun,
    kontak: kontak,
    status: "Belum Dilacak",
  });

  localStorage.setItem("alumni", JSON.stringify(data));

  alert("Data berhasil disimpan");

  tampilData();
}

function tampilData() {
  let data = JSON.parse(localStorage.getItem("alumni")) || [];

  let tabel = document.getElementById("tabel");

  tabel.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    tabel.innerHTML += `

<tr>

<td>${data[i].nama}</td>
<td>${data[i].tahun}</td>
<td>${data[i].kontak}</td>
<td>${data[i].status}</td>

</tr>

`;
  }
}

function tampilPelacakan() {
  let data = JSON.parse(localStorage.getItem("alumni")) || [];

  let tabel = document.getElementById("tabelPelacakan");

  tabel.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    tabel.innerHTML += `

<tr>

<td>${data[i].nama}</td>

<td>${data[i].status}</td>

<td>

<button onclick="mulai(${i})">
Mulai
</button>

<button onclick="verifikasi(${i})">
Verifikasi
</button>

<button onclick="tidak(${i})">
Tidak Ditemukan
</button>

</td>

</tr>

`;
  }
}

function mulai(index) {
  let data = JSON.parse(localStorage.getItem("alumni"));

  data[index].status = "Sedang Dilacak";

  localStorage.setItem("alumni", JSON.stringify(data));

  tampilPelacakan();
}

function verifikasi(index) {
  let data = JSON.parse(localStorage.getItem("alumni"));

  data[index].status = "Teridentifikasi";

  localStorage.setItem("alumni", JSON.stringify(data));

  tampilPelacakan();
}

function tidak(index) {
  let data = JSON.parse(localStorage.getItem("alumni"));

  data[index].status = "Tidak Ditemukan";

  localStorage.setItem("alumni", JSON.stringify(data));

  tampilPelacakan();
}

function tampilLaporan() {
  let data = JSON.parse(localStorage.getItem("alumni")) || [];

  let laporan = document.getElementById("laporan");

  laporan.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    laporan.innerHTML += `

<tr>

<td>${data[i].nama}</td>
<td>${data[i].status}</td>

</tr>

`;
  }
}

function hitungStatistik() {
  let data = JSON.parse(localStorage.getItem("alumni")) || [];

  let total = data.length;

  let teridentifikasi = 0;

  let dilacak = 0;

  let tidak = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].status === "Teridentifikasi") {
      teridentifikasi++;
    } else if (data[i].status === "Sedang Dilacak") {
      dilacak++;
    } else if (data[i].status === "Tidak Ditemukan") {
      tidak++;
    }
  }

  document.getElementById("total").innerText = total;

  document.getElementById("teridentifikasi").innerText = teridentifikasi;

  document.getElementById("dilacak").innerText = dilacak;

  document.getElementById("tidak").innerText = tidak;
}
