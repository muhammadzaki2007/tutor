const db = require('../Model/models');
const cv = db.Cv

// Ambil data dari tabel `content`
exports.getContent = async (req, res) => {
  await cv.findAll()
  const query = 'SELECT * FROM content';
  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve data' });
    }
    res.status(200).json(result[0]); // Mengambil row pertama dari hasil query
  });
};

// Update data di tabel `content`
exports.updateContent = async (req, res) => {
  const id = req.params.id
  await cv.update(req.body, { where: { id: id}});
  const { name, work } = req.body;
  if (!name || !work) {
    return res.status(400).json({ error: 'Name and work are required' });
  }

  const query = 'UPDATE content SET name = ?, work = ? WHERE id = 1'; // id 1 adalah contoh
  db.query(query, [name, work], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to update content' });
    }
    res.status(200).json({ message: 'Content updated successfully' });
  });
};
