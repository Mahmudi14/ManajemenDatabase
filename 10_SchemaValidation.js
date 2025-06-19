db.createCollection("cerpen", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "judul",
        "penulis",
        "penerbit",
        "tahun_terbit",
        "kategori",
        "isbn",
        "stok",
        "lokasi",
      ],
      properties: {
        judul: {
          bsonType: "string",
          description: "harus berupa string dan wajib diisi",
        },
        penulis: {
          bsonType: "string",
          description: "harus berupa string dan wajib diisi",
        },
        penerbit: {
          bsonType: "string",
          description: "harus berupa string dan wajib diisi",
        },
        tahun_terbit: {
          bsonType: "int",
          minimum: 1900,
          maximum: 2100,
          description: "harus berupa integer dan wajib diisi",
        },
        kategori: {
          bsonType: "string",
          description: "harus berupa string dan wajib diisi",
        },
        isbn: {
          bsonType: "string",
          pattern: "^[0-9\\-]+$",
          description: "harus berupa string ISBN yang valid",
        },
        stok: {
          bsonType: "int",
          minimum: 0,
          description: "harus berupa integer minimal 0",
        },
        lokasi: {
          bsonType: "string",
          description: "harus berupa string dan wajib diisi",
        },
      },
    },
  },
  validationLevel: "strict",
  validationAction: "error",
});
