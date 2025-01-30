import "../../styles/filterBar.scss";
const FilterBar = () => {
  return (
    <div className="filter">
      <p>Filter by:</p>
      <div className="select__wrapper">
        <select name="category">
          <option value="" hidden>
            Category
          </option>
          <option value="">WORK</option>
          <option value="">PERSONAL</option>
        </select>
        <select name="due__date">
          <option value="" hidden>
            Due Date
          </option>
          <option value="">dummy</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
