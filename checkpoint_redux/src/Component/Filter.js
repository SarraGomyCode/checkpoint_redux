import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import TaskList from "../Component/TaskList";

const Filter = () => {
  const listtasks = useSelector((state) => state.listReducer.listTasks);

  const [status, setstatus] = useState("all");

  return (
    <div>
      <Button variant="outline-primary" onClick={() => setstatus("all")}>
        All
      </Button>
      <Button variant="outline-primary" onClick={() => setstatus("done")}>
        Done
      </Button>
      <Button variant="outline-primary" onClick={() => setstatus("undone")}>
        Undone
      </Button>

      {status === "done"
        ? listtasks
            .filter((el) => el.isDone === true)
            .map((el) => <TaskList task={el} key={el.id} />)
        : status === "undone"
        ? listtasks
            .filter((el) => el.isDone === false)
            .map((el) => <TaskList task={el} key={el.id} />)
        : listtasks.map((el) => <TaskList task={el} key={el.id} />)}
    </div>
  );
};

export default Filter;
