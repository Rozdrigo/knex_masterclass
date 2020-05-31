const knex = require('../database');

module.exports = {

  async index(req, res, next) {
    try {
      const results = await knex('projects');
      return res.json(results);
    } catch (error) {
      next(error);
    }
  },
  async create(req, res, next){
    try {
      const { title, user_id } = req.body
      
      await knex('projects').insert({
        title,
        user_id
      });

      return res.status(201).send();
    } catch (error) {
      next(error);
    };
  },
}
