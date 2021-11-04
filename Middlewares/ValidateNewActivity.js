const Joi = require('joi');

const schemaProduct = Joi.object({
  name: Joi.string().min(5).required(),
  description: Joi.string().min(10).required(),
  status: Joi.string().valid('Pendente', 'Em Andamento', 'Pronto').required()
});

const validateNewActivity = (req, res, next) => {
  const { error } = schemaProduct.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
}

module.exports = { validateNewActivity };