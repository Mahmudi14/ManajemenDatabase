db.wide_buku.insertMany([
  {
    judul: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    tahun: 2005,
    genre: "Fiksi",
    penerbit: "Bentang Pustaka",
  },
  {
    judul: "Negeri 5 Menara",
    penulis: "Ahmad Fuadi",
    tahun: 2009,
    genre: "Novel",
    penerbit: "Gramedia",
  },
  {
    judul: "Bumi",
    penulis: "Tere Liye",
    tahun: 2014,
    genre: "Fantasi",
    penerbit: "Gramedia",
  },
  {
    judul: "Ayat-Ayat Cinta",
    penulis: "Habiburrahman",
    tahun: 2004,
    genre: "Religi",
    penerbit: "Republika",
  },
  {
    judul: "Sang Pemimpi",
    penulis: "Andrea Hirata",
    tahun: 2006,
    genre: "Fiksi",
    penerbit: "Bentang Pustaka",
  },
]);

db.wide_buku.find().pretty();
