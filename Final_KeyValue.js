db.kv_buku.insertMany([
  { key: "judul1", value: "Laskar Pelangi" },
  { key: "penulis1", value: "Andrea Hirata" },
  { key: "tahun1", value: 2005 },
  { key: "genre1", value: "Fiksi" },
  { key: "penerbit1", value: "Bentang Pustaka" },
]);

db.kv_buku.find().pretty();
