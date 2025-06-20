db.kv_buku.insertMany([
  {
    key: "buku:BK001",
    value: {
      kode_buku: "BK001",
      judul: "Laskar Pelangi",
      penulis: "Andrea Hirata",
      genre: "Fiksi",
      tahun: 2005,
      penerbit: "Bentang Pustaka",
    },
  },
  {
    key: "buku:BK002",
    value: {
      kode_buku: "BK002",
      judul: "Negeri 5 Menara",
      penulis: "Ahmad Fuadi",
      genre: "Novel",
      tahun: 2009,
      penerbit: "Gramedia",
    },
  },
  {
    key: "buku:BK003",
    value: {
      kode_buku: "BK003",
      judul: "Bumi",
      penulis: "Tere Liye",
      genre: "Fantasi",
      tahun: 2014,
      penerbit: "Gramedia",
    },
  },
  {
    key: "buku:BK004",
    value: {
      kode_buku: "BK004",
      judul: "Ayat-Ayat Cinta",
      penulis: "Habiburrahman El Shirazy",
      genre: "Religi",
      tahun: 2004,
      penerbit: "Republika",
    },
  },
  {
    key: "buku:BK005",
    value: {
      kode_buku: "BK005",
      judul: "Sang Pemimpi",
      penulis: "Andrea Hirata",
      genre: "Fiksi",
      tahun: 2006,
      penerbit: "Bentang Pustaka",
    },
  },
]);


db.kv_buku.find().pretty();
