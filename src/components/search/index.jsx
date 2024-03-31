export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="w-full flex justify-center items-center mb-6 mt-4">
      <input
        className="w-80 h-11 border border-gray-300 rounded-md px-2 py-1 text-base outline-none bg-white text-gray-700"
        type="text"
        placeholder="Şehir adı giriniz"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button 
        className="rounded-md bg-gray-200 text-black text-lg cursor-pointer p-2" onClick={handleSearch}>
          Ara
      </button>
    </div>
  );
}
