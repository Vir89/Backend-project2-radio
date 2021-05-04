const config = require('config.json');
const db = require('_helpers/db');
const Favourite = db.Favourite;

module.exports = {
    create,
    getById,
    getByUsername,
    delete: _delete
};


async function create(favouriteParam) {

    const favourite = new Favourite(favouriteParam);

    // save favourite
    return await favourite.save();
}

async function getById(id) {
    return await Favourite.findById(id);
}

async function getByUsername(usernameParam) {
    return await Favourite.find({ username: usernameParam });
}

async function _delete(id) {
    await Favourite.findByIdAndRemove(id);
}


