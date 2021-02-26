import { ADD_TODO, DELETE, DONEORUNDONE, EDIT } from "../Actions/actionsType";

const initialeState = {
  listTasks: [
    { id: Math.random(), task: "task1", isDone: false },
    { id: Math.random(), task: "task2", isDone: false },
    { id: Math.random(), task: "task3", isDone: false },
  ],
};

export default function listReducer(state = initialeState, action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, listTasks: state.listTasks.concat(action.payload) };
    case DELETE:
      return {
        ...state,
        listTasks: state.listTasks.filter((el) => el.id !== action.payload),
      };

    case EDIT:
      return {
        ...state,
        listTasks: state.listTasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, task: action.payload.newTask }
            : task
        ),
      };

    case DONEORUNDONE:
      return {
        ...state,
        listTasks: state.listTasks.map((el) =>
          el.id === action.payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    default:
      return state;
  }
}
