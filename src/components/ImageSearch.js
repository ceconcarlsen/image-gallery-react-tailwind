import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onChangeHandler = (event) => {
    setText(event.target.value);
  }

  const onSubmitHandler = (event) =>{
    event.preventDefault();
    searchText(text);
  }

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmitHandler}  className="w-full max-w-sm">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            onChange={onChangeHandler}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1
           px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
          />
          <button
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700
          border-blue-500 hover:border-blue-700 text-sm font-bold border-4 text-white
          py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
