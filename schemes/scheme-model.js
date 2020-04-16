const knex = require('knex');
const config = require('.../knexfile.js');
const db = knex(config.development);

//Schemes
// Id(Auto), SCHEME_NAME (req)

//Steps
//Id(Auto), SCHEME_ID(req), STEP_NUMBER(req), INSTRUCTIONS(req)

module.exports =
{
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find() {
    return db('schemes');
};

function findById(id) {
    return db('schemes')
    .where({ id })
    .first();
};

function findSteps(id) {
    return db('schemes')
    .where({ id });
};

function add(scheme){
    return db('schemes')
    .insert(scheme)
    .then(scheme => {
        return(scheme)
    });
};

function update(changes, id) {
    return db('schemes')
    .where({ id })
    .update(changes);
};

function remove(id){
    return db('schemes')
    .where({ id })
    .del();
};