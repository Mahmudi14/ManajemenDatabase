db.cerpen.bulkWrite([
  // 1. Insert dokumen baru
  {
    insertOne: {
      document: {
        judul: "Pemrograman Web Lanjut",
        penulis: "Rina Ayu",
        penerbit: "Pustaka Digital",
        tahun_terbit: 2024,
        kategori: "Teknik Informatika",
        isbn: "978-623-0000-111-2",
        stok: 6,
        lokasi: "Rak D1",
      },
    },
  },

  // 2. Update stok pada judul tertentu
  {
    updateOne: {
      filter: { judul: "Struktur Data" },
      update: { $set: { stok: 9 } },
    },
  },

  // 3. Delete dokumen tertentu
  {
    deleteOne: {
      filter: { judul: "Basis Data Lanjut" },
    },
  },

  // 4. Upsert: update jika ada, insert jika tidak
  {
    updateOne: {
      filter: { judul: "Data Mining Dasar" },
      update: {
        $set: {
          penulis: "Budi Santoso",
          penerbit: "Informatika Surabaya",
          tahun_terbit: 2023,
          kategori: "Ilmu Komputer",
          isbn: "978-623-5555-999-9",
          stok: 4,
          lokasi: "Rak D2",
        },
      },
      upsert: true,
    },
  },
]);
