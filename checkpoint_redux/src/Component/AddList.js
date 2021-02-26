import React from "react";
import { addItem } from "../Redux/Actions/listAction";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

const AddList = () => {
  const [Task, setTask] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <input onChange={(e) => setTask(e.target.value)} value={Task} />
        <Button
          variant="outlined"
          color="primary"
          onClick={() =>
            dispatch(addItem({ id: Math.random(), task: Task, isDone: false }))
          }
        >
          {" "}
          Add{" "}
        </Button>
      </div>
    </div>
  );
};

export default AddList;
