import { FormEventHandler } from "react";

export interface FiltersProps {
  handleSearch: FormEventHandler<HTMLFormElement>;
  loading: boolean;
}

export const Filters = ({ handleSearch, loading }: FiltersProps) => {
  return (
    <div className="filters-container">
      <form onSubmit={handleSearch} className="filters">
        <label className="filter">
          Tag: <input type="text" name="tag" />
        </label>
        <label className="filter">
          Price: <input type="number" name="price" min="1" max="1000" />
        </label>
        <label className="filter">
          Subscription:
          <select name="subscription">
            <option></option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <button type="submit" className="search-button" disabled={loading}>
          Search
        </button>
        <input type="reset" className="search-button" value="Reset"></input>
      </form>
    </div>
  );
};
