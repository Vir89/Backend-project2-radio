const express = require('express');
const router = express.Router();
const favouriteService = require('./favourite.service');

// routes
router.post('/add', addFavourite);
router.get('/:id', getById);
router.get('/get/:username', getByUsername);
router.delete('/:id', _delete);

module.exports = router;

function addFavourite(req, res, next) {
    favouriteService.create(req.body)
        .then(fav => fav ? res.json(fav) : res.sendStatus(400))
        .catch(err => next(err));
}


function getById(req, res, next) {
    favouriteService.getById(req.params.id)
        .then(fav => fav ? res.json(fav) : res.sendStatus(404))
        .catch(err => next(err));
}

function getByUsername(req, res, next) {
    favouriteService.getByUsername(req.params.username)
        .then(fav => fav ? res.json(fav) : res.sendStatus(404))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    favouriteService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}