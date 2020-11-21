const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', function (req, res, next) {
  const room = fs.createReadStream('./db/room.json');
  room.pipe(res);
});

router.post('/', function (req, res) {
  const roomFormData = fs.createWriteStream('./db/roomTest.json', {
    encoding: 'utf-8',
  });

  const data = JSON.stringify(req.body);
  roomFormData.write(data);

  res.status(200).send({ result: 'post success' });
});

module.exports = router;
