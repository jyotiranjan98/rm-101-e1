import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({getTask}) => {
  // sample values to be replaced
  
  let totalTask = getTask.length;
   let getIncTask = getTask.filter((el) => {
     return el.done !== true;
   });
  let unCompletedTask = getIncTask.length;
 




  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h1>TODO LIST</h1>
      <b data-testid="header-remaining-task">
        You have <span>{unCompletedTask}</span>
      </b>
      <b data-testid="header-total-task">
      task remaining of <span>{totalTask}</span>  
      </b>
    </div>
  );
};

export default TaskHeader;
