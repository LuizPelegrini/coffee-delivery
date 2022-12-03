import { Coffee } from '../../@types/coffee';
import { ActionProps } from './action';

// add quantity to coffees in the shopping cart
export interface ShoppingCartCoffee extends Coffee {
  quantity: number;
}

export interface ShoppingCartState {
  coffees: ShoppingCartCoffee[];
}

export enum ActionTypes {
  // eslint-disable-next-line no-unused-vars
  UPSERT_COFFEE = 'UPSERT_COFFEE',
  // eslint-disable-next-line no-unused-vars
  REMOVE_COFFEE = 'REMOVE_COFFEE',
}

export function shoppingCartReducer(
  state: ShoppingCartState,
  action: ActionProps,
) {
  if (action.type === ActionTypes.UPSERT_COFFEE) {
    const existentCoffeeInShoppingCart = state.coffees.find(
      (coffee) => coffee.id === action.payload.coffee.id,
    );

    // if coffee is not in Shopping Cart, then create a new one
    if (!existentCoffeeInShoppingCart) {
      const newShoppingCartCoffee: ShoppingCartCoffee = {
        ...action.payload.coffee,
        quantity: action.payload.quantity,
      };

      return {
        ...state,
        coffees: [...state.coffees, newShoppingCartCoffee],
      };
    } else {
      // if coffee is already in ShoppingCart then overwrite its quantity
      const coffees = state.coffees.map((coffee) => {
        if (coffee.id === action.payload.coffee.id) {
          return {
            ...coffee,
            quantity: action.payload.quantity,
          };
        }

        return coffee;
      });

      return {
        ...state,
        coffees,
      };
    }
  }

  if (action.type === ActionTypes.REMOVE_COFFEE) {
    const coffees = state.coffees.filter(
      (coffee) => coffee.id !== action.payload.id,
    );

    return {
      ...state,
      coffees,
    };
  }

  return state;
}
