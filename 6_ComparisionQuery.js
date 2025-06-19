db.cerpen.find({ tahun_terbit: { $gt: 2020 } });

db.cerpen.find({ stok: { $lte: 10 } });

db.cerpen.find({ kategori: { $ne: "Teknik Informatika" } });

db.cerpen.find({
  tahun_terbit: { $gte: 2020, $lte: 2023 },
});

db.cerpen.find({
  kategori: { $in: ["Informatika", "Ilmu Komputer"] },
});
