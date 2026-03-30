import Field from "./Field";

const SearchTaskForm = (props) => {
  const {searchQuery, setSearchQuery} = props;

  return (
    <form className="task__form" onSubmit={(e) => e.preventDefault()}>
      <Field
        className="task__field"
        label="Search task"
        id="search-task"
        type="search"
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchTaskForm;
