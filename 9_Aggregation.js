db.cerpen.aggregate([
  {
    $group: {
      _id: "$kategori",
      jumlah_cerpen: { $sum: 1 },
    },
  },
]);
