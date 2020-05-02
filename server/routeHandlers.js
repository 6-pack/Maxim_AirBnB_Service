const db = require ('../db/index.js');

module.exports = {
  getRoomData: (req, res) => {
    db.query('select * from roomtable', (err, room_results) => {
      if (err) {
        res.status(500).send(err);
        console.error(err);
        return;
      }
      const roomNums = [];
      for (var element of room_results.rows) {
        roomNums.push(element.room_id);
      }
      res.status(200).send();
    });
  },
}