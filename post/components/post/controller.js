const nanoid = require('nanoid');

const TABLA = 'post';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    function list() {
        return store.list(TABLA);
    }

    function upsert(body) {
        const post = {
            text: body.text,
            user: body.user,
        }

        if (body.id) {
            post.id = body.id;
        } else {
            post.id = nanoid();
        }

        return store.upsert(TABLA, post);
    }

    function get(id) {
        return store.get(TABLA, id)
    }

    return {
        list,
        upsert,
        get,
    }
}
