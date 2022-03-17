import { Drink } from '../Entity/Drink';
import { getRepository } from 'typeorm';

export const FindAllRecipe = () => {
  return Drink.find({ order: { id: 'ASC' } });
};

export const FindTagRecipe = (tags) => {
  if (typeof tags === 'string') {
    tags = [tags];
  }
  return getRepository(Drink)
    .createQueryBuilder()
    .where('tags && ARRAY[:...tags]', { tags })
    .orderBy('id', 'ASC')
    .getMany();
};

export const FindLikeRecipe = () => {
  return Drink.find({ order: { likeCount: 'DESC' } });
};

export const FindIdRecipe = (id) => {
  return Drink.findOne({ where: { id } });
};

export const AddRecipe = (drinkInfo) => {
  const drink = Drink.create(drinkInfo);
  return Drink.save(drink);
};