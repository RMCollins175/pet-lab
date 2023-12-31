import { FormEventHandler } from "react";

export interface FiltersProps {
  handleSearch: FormEventHandler<HTMLFormElement>;
  loading: boolean;
}

export const Filters = ({ handleSearch, loading }: FiltersProps) => {
  return (
    <div className="filters-container">
      <form onSubmit={handleSearch} className="filters">
        <label className="filter" data-testid="tag-label">
          Tag: <input className="inputs" type="text" name="tag" />
        </label>
        <label className="filter" data-testid="price-label">
          Price:{" "}
          <input
            className="inputs"
            type="number"
            name="price"
            min="1"
            max="1000"
          />
        </label>
        <label className="filter" data-testid="subscription-label">
          Subscription:
          <select name="subscription" className="inputs">
            <option></option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <button
          type="submit"
          className="search-button"
          disabled={loading}
          data-testid="search-button">
          Search
        </button>
        <input
          type="reset"
          className="search-button"
          value="Reset"
          data-testid="reset-button"></input>
      </form>
    </div>
  );
};
