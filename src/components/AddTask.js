import React from 'react';
import { useState } from 'react';



function AddTask({onAdd}) {

  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    if(!text){
      alert("Please Add a Task");
      return;
    }
    onAdd({ text, day, reminder });
    setText('');
    setDay('');
    setReminder(false);

  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input 
          type="text" 
          placeholder="Add task"
          value={text}
          onChange={ event => setText(event.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Day and Time</label>
        <input 
          type="text" 
          placeholder="Add day and time"
          value={day}
          onChange={ event => setDay(event.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Set Reminder</label>
        <input 
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={ (event) => setReminder(event.currentTarget.checked) }
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block"/>
    </form>
  )
}

export default AddTask
