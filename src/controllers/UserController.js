const knex = require('../database');

module.exports = {

  async index(req, res, next){
    try {
      const { page = 1 } = req.query

      const countObject = knex('users').count();

      const query = knex('users')
      .limit(5)
      .offset((page - 1) * 5);

      const [count] = await countObject;
      res.header('X-Total-Count', count["count"]);

      const results = await query;

      return res.json(results);
    } catch (error) {
      next(error);
    }

  },
  async create(req, res, next){

    try {
      const { username } = req.body
      
      await knex('users').insert({
        username
      });

      return res.status(201).send();
    } catch (error) {
      next(error);
    };
  },
  async update(req, res, next){
    try {
      const { username } = req.body
      const { id } = req.params

      await knex('users')
      .update({ username })
      .where({ id });

      return res.send()

    } catch (error) {
      next(error)
    }
  },
  async delete(req, res, next){
    try {
      const { id } = req.params

      await knex('users')
      .where({ id })
      .del();

      return res.send();
    } catch (error) {
      next(error)
    }
  } 

};