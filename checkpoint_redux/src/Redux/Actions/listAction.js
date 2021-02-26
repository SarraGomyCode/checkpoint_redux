import { ADD_TODO, DELETE, DONEORUNDONE } from "../Actions/actionsType";

export const addItem = (newTask) => {
  return {
    type: ADD_TODO,
    payload : newTask
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE,
    payload : id
  };
};

export const statutItem = (id) => {
  return {
    type: DONEORUNDONE,
    payload : id
  };
};
