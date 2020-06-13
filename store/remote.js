const request = require('request');

function createRemoteDb(host, port) {
    const URL = `http://${host}:${port}`;

    function list(table) {
        return req('GET', table)
    }

    function get(table, id) {
        return req('GET', table, id)
    }

    function upsert(table, data) {
        return req('POST', table, data)
    }

    function query(table, query, join) {
        return req('PUT', table, query, join)
    }

    function req(method, table, data) {
        let url = `${URL}/${table}`;
        body = '';

        return new Promise((resolve, reject) => {
            request({
                method,
                headers: {
                    'content-type': 'application/json'
                },
                url,
                body,
            }, (err, req, body) => {
                if (err) {
                    console.console.error('Error con la base de datos remeto');
                    return reject(err.message);
                }
                
                const resp = JSON.parse(body);
                return resolve(resp.body);
            })
        })
    }

    return {
        list,
        get,
        upsert,
        query,
    }    
}

module.exports = createRemoteDb;