const App = () => {
  return (
    <div className="task">
      <div className="task__title-wrapper">
        <svg className="task__title-icon" viewBox="0 0 512 512">
          <path
            fill="#262626"
            d="M109,216.94A40.06,40.06,0,1,0,149.06,257,40.1,40.1,0,0,0,109,216.94Zm0,57.44A17.38,17.38,0,1,1,126.38,257,17.4,17.4,0,0,1,109,274.38Z"
          />
          <path
            fill="#262626"
            d="M109,86.52a40.06,40.06,0,1,0,40.06,40.06A40.1,40.1,0,0,0,109,86.52ZM109,144a17.38,17.38,0,1,1,17.38-17.38A17.4,17.4,0,0,1,109,144Z"
          />
          <path
            fill="#262626"
            d="M109,346.88a40.06,40.06,0,1,0,40.06,40.06A40.1,40.1,0,0,0,109,346.88Zm0,57.44a17.38,17.38,0,1,1,17.38-17.38A17.4,17.4,0,0,1,109,404.32Z"
          />
          <path
            fill="#262626"
            d="M414.82,86.52H200.15A29.14,29.14,0,0,0,171,115.63v21.89a29.15,29.15,0,0,0,29.11,29.12H414.82a29.15,29.15,0,0,0,29.12-29.12V115.63A29.15,29.15,0,0,0,414.82,86.52Zm6.44,51a6.45,6.45,0,0,1-6.44,6.44H200.15a6.45,6.45,0,0,1-6.44-6.44V115.63a6.44,6.44,0,0,1,6.44-6.43H414.82a6.44,6.44,0,0,1,6.44,6.43Z"
          />
          <path
            fill="#262626"
            d="M414.82,216.94H200.15A29.14,29.14,0,0,0,171,246.05V268a29.14,29.14,0,0,0,29.11,29.11H414.82A29.15,29.15,0,0,0,443.94,268v-21.9A29.15,29.15,0,0,0,414.82,216.94Zm6.44,51a6.45,6.45,0,0,1-6.44,6.43H200.15a6.45,6.45,0,0,1-6.44-6.43v-21.9a6.45,6.45,0,0,1,6.44-6.43H414.82a6.45,6.45,0,0,1,6.44,6.43Z"
          />
          <path
            fill="#262626"
            d="M414.82,346.88H200.15A29.14,29.14,0,0,0,171,376v21.89A29.15,29.15,0,0,0,200.15,427H414.82a29.15,29.15,0,0,0,29.12-29.12V376A29.15,29.15,0,0,0,414.82,346.88Zm6.44,51a6.45,6.45,0,0,1-6.44,6.44H200.15a6.45,6.45,0,0,1-6.44-6.44V376a6.44,6.44,0,0,1,6.44-6.43H414.82a6.44,6.44,0,0,1,6.44,6.43Z"
          />
        </svg>
        <h1 className="task__title">Task List</h1>
      </div>

      <form className="task__form">
        <div className="task__field field">
          <label className="field__label" htmlFor="new-task">
            New task
          </label>
          <input className="field__input" id="new-task" placeholder=" " autoComplete="off" />
        </div>
        <button className="button" type="submit">
          Add
        </button>
      </form>
      <form className="task__form">
        <div className="task__field field">
          <label className="field__label" htmlFor="search-task">
            Search task
          </label>
          <input
            className="field__input"
            id="search-task"
            placeholder=" "
            autoComplete="off"
            type="search"
          />
        </div>
      </form>
      <div className="task__info">
        <div className="task__total-tasks">
          Total tasks: <span>0</span>
        </div>
        <button className="task__delete-all-button" type="button">
          Delete all
        </button>
      </div>
      <ul className="task__list">
        <li className="task__item task-item">
          <input className="task-item__checkbox" id="task-1" type="checkbox" checked />
          <label className="task-item__label" htmlFor="task-1">
            Task 1
          </label>
          <button className="task-item__delete-button" aria-label="Delete" title="Delete">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="#757575"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>
        <li className="task__item task-item">
          <input className="task-item__checkbox" id="task-2" type="checkbox" />
          <label className="task-item__label" htmlFor="task-2">
            Task 2
          </label>
          <button className="task-item__delete-button" aria-label="Delete" title="Delete">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="#757575"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>
      </ul>
      <div className="task__empty-message"></div>
    </div>
  );
};

export default App;
