import { EDIT } from "../Actions/actionsType";

export const editItem = (id, newTask) => {
  return {
    type: EDIT,
    payload: { id, newTask },
  };
};
