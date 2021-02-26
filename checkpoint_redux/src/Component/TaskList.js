import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, statutItem } from "../Redux/Actions/listAction";
import Button from "@material-ui/core/Button";
import EditList from "./EditList";

const TaskList = () => {
  const list = useSelector((state) => state.listReducer.listTasks);
  console.log(list);
  const dispatch = useDispatch();
  return (
    <div>
      {list.map((el) => (
        <div key={el.id}>
          <p>{el.task}</p>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => dispatch(deleteItem(el.id))}
          >
            delete
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => dispatch(statutItem(el.id))}
          >
            {list.isDone ? "done" : "undone"}
          </Button>
          <EditList task={el} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
