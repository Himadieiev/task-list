import Field from "./Field";

const SearchTaskForm = () => {
  return (
    <form className="task__form">
      <Field className="task__field" label="Search task" id="search-task" type="search" />
    </form>
  );
};

export default SearchTaskForm;
