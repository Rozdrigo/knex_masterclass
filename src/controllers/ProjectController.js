const knex = require('../database');

module.exports = {

  async index(req, res, next) {
    try {
      const { user_id, page = 1 } = req.query;

      const countObject = knex('projects').count();

      const query = knex('projects')
      .limit(5)
      .offset((page - 1) * 5);

      if (user_id) {
        query
        .where({ user_id })
        .join( 'users', 'users.id', '=', 'projects.user_id')
        .select('projects.*', 'users.username')

        countObject
        .where({ user_id });
      };

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
      const { title, subtitle, content } = req.body

      const { user_id } = req.params
      
      await knex('projects').insert({
        title,
        user_id,
        subtitle,
        content
      });

      return res.status(201).send();
    } catch (error) {
      next(error);
    };
  },
}
