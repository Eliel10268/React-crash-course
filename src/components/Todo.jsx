function Todo({ task, togglePopup }) {
  function deletehandler() {
    console.log("Delete", task[0]);
  }
  return (
    <div className="todo-item">
      <h2>{task}</h2>

      <button onClick={() => togglePopup()}>Delete </button>
    </div>
  );
}

export default Todo;
