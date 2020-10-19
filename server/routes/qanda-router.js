const path = require('path');
const express = require('express');

const qandaCtrl = require(path.join(__dirname, '/../controllers/qanda-ctrl'));

const router = express.Router();

// router.post('/movie', movieCtrl.createMovie)
// router.put('/movie/:id', movieCtrl.updateMovie)
// router.delete('/movie/:id', movieCtrl.deleteMovie)
// router.get('/movie/:id', movieCtrl.getMovieById)
//router.get('/movies', movieCtrl.getMovies)

router.post('/question', qandaCtrl.postTest1);
router.get('/question', qandaCtrl.getTest1)
router.get('/questions', qandaCtrl.getTest2);

module.exports = router;