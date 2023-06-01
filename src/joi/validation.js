const joi = require("joi");

const loginShema = joi.object({
  admin_username: joi.string().required(),
  admin_password: joi.string().required().min(5).max(9),
});

const createNewsShema = joi.object({
  meating_date: joi.string().required().max(8),
  meating_time: joi.string().required().max(4),
  set_the_direction: joi.string().required(),
  internal_route: joi.string().required(),
  enter_link: joi.string().required(),
  event_type: joi.string().required(),
  legal_name: joi.string().required(),
  name: joi.string().required(),
  profession: joi.string().required(),
  phone_number: joi
    .string()
    .required()
    .pattern(new RegExp("^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"))
    .max(14),
  additional_telephone_number: joi
    .string()
    .required()
    .pattern(new RegExp("^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"))
    .max(14),
  description: joi.string().required(),
  image: joi.string().pattern(new RegExp("((jpe?g|png|gif|bmp))$")),
  subject_text: joi.string().required(),
});

module.exports = {
  loginShema,
  createNewsShema,
};
