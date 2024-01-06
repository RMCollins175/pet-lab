import { FormEventHandler } from "react";

export interface FiltersProps {
  handleSearch: FormEventHandler<HTMLFormElement>;
  handleReset: FormEventHandler<HTMLFormElement>;
  loading: boolean;
}

export const Filters = ({
  handleSearch,
  loading,
  handleReset,
}: FiltersProps) => {
  return (
    <div className="min-w-1/5 ">
      <form
        onSubmit={handleSearch}
        onReset={handleReset}
        className="flex flex-col justify-between">
        <label
          className="flex justify-between items-center border border-gray-200 rounded p-2.5 text-lg"
          data-testid="tag-label">
          Tag:
          <input
            className="w-1/2 p-1 border border-gray-200 rounded bg-gray-100"
            type="text"
            name="tag"
          />
        </label>
        <label
          className="flex justify-between items-center border border-gray-200 rounded p-2.5 text-lg"
          data-testid="price-label">
          Price:
          <input
            className="w-1/2 p-1 border border-gray-200 rounded bg-gray-100"
            type="number"
            name="price"
            min="1"
            max="1000"
          />
        </label>
        <label
          className="flex justify-between items-center border border-gray-200 rounded p-2.5 text-lg"
          data-testid="subscription-label">
          Subscription:
          <select
            name="subscription"
            className="w-1/2 p-1 border border-gray-200 rounded bg-gray-100">
            <option></option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <button
          type="submit"
          className="bg-gray-200 border border-gray-200 rounded text-lg p-2.5 mt-5 cursor-pointer"
          disabled={loading}
          data-testid="search-button">
          Search
        </button>
        <input
          type="reset"
          className="bg-gray-200 border border-gray-200 rounded text-lg p-2.5 mt-5 cursor-pointer"
          value="Reset"
          data-testid="reset-button"></input>
      </form>
    </div>
  );
};
