import { Joi, Segments, celebrate } from 'celebrate';

export const create = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
  },
});

export const id = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});

export const update = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().required(),
  },
  [Segments.BODY]: {
    name: Joi.string().required(),
  },
});
