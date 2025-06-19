db.cerpen.find({
  $and: [{ kategori: "Teknik Informatika" }, { stok: { $gt: 5 } }],
});
db.cerpen.find({
  $or: [{ lokasi: "Rak A3" }, { stok: { $lt: 6 } }],
});
