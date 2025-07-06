const produk = [
  { id: 1, nama: "Sandal Wanita", harga: 50000 },
  { id: 2, nama: "Tas Selempang", harga: 75000 },
  { id: 3, nama: "Hijab Fashion", harga: 30000 },
  { id: 4, nama: "Sepatu Sport", harga: 120000 },
];

let keranjang = [];

function tampilkanProduk() {
  const container = document.getElementById("produk-container");
  produk.forEach((item) => {
    const card = document.createElement("div");
    card.className = "produk";
    card.innerHTML = `
      <h3>${item.nama}</h3>
      <p>Rp ${item.harga.toLocaleString()}</p>
      <button onclick="tambahKeKeranjang(${item.id})">Beli</button>
    `;
    container.appendChild(card);
  });
}

function tambahKeKeranjang(id) {
  const item = produk.find(p => p.id === id);
  keranjang.push(item);
  document.getElementById("jumlah").innerText = keranjang.length;
}

function lihatKeranjang() {
  const list = document.getElementById("daftar-keranjang");
  list.innerHTML = "";
  keranjang.forEach((item, i) => {
    const li = document.createElement("li");
    li.innerText = `${item.nama} - Rp ${item.harga.toLocaleString()}`;
    list.appendChild(li);
  });
  document.getElementById("keranjang").style.display = "block";
}

function tutupKeranjang() {
  document.getElementById("keranjang").style.display = "none";
}
card.innerHTML = `
  <img src="${item.gambar}" style="width:100%; border-radius:8px;" />
  <h3>${item.nama}</h3>
  <p>Rp ${item.harga.toLocaleString()}</p>
  <button onclick="tambahKeKeranjang(${item.id})">Beli</button>
`;

tampilkanProduk();


function checkout() {
  if (keranjang.length === 0) {
    alert("Keranjang kosong!");
    return;
  }

  let pesan = "*Pesanan Baru dari Toko Online:*\n";
  let total = 0;

  keranjang.forEach((item, i) => {
    pesan += `${i + 1}. ${item.nama} - Rp ${item.harga.toLocaleString()}\n`;
    total += item.harga;
  });

  pesan += `\n*Total: Rp ${total.toLocaleString()}*\n`;
  pesan += "\nMohon kirimkan alamat lengkap & nama penerima.";

  const nomorWA = "+62 895-3380-14060"; // Ganti dengan nomor WA kamu
  const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");
const produk = [
  { id: 1, nama: "Sandal Wanita", harga: 50000, gambar: "img/sandal.jpg" },
  { id: 2, nama: "Tas Selempang", harga: 75000, gambar: "img/tas.jpg" },
];
}