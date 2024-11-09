const Search = ({ iconRight = true, placeholder }) => {
  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <div className="relative flex items-center">
        <input
          className={`w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-xl ${iconRight ? 'pl-3 pr-10' : 'pl-10 pr-3'} py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
          placeholder={placeholder ? placeholder : null}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`absolute w-5 h-5 top-2.5 ${iconRight ? 'right-2.5' : 'left-2.5'} text-slate-600`}
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Search;