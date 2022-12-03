import { Coffee } from '../../@types/coffee';
import { ActionTypes } from './reducer';

interface IUpsertCoffeeActionProps {
  type: ActionTypes.UPSERT_COFFEE;
  payload: {
    coffee: Coffee;
    quantity: number;
  };
}

interface IRemoveCoffeeActionProps {
  type: ActionTypes.REMOVE_COFFEE;
  payload: {
    id: string;
  };
}

export type ActionProps = IUpsertCoffeeActionProps | IRemoveCoffeeActionProps;

export const upsertCoffeeAction = (
  coffee: Coffee,
  quantity: number,
): IUpsertCoffeeActionProps => {
  return {
    type: ActionTypes.UPSERT_COFFEE,
    payload: {
      coffee,
      quantity,
    },
  };
};

export const removeCoffeeAction = (id: string): IRemoveCoffeeActionProps => {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      id,
    },
  };
};
