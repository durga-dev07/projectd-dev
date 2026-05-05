const Filters = ({
  search,
  setSearch,
  industry,
  setIndustry,
  location,
  setLocation,
  sort,
  setSort
}) => {

  return (
    <div className="grid md:grid-cols-4 gap-4 mb-10">

      <input
        type="text"
        placeholder="Search company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white border border-gray-300 p-3 rounded-lg outline-none"
      />

      <select
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        className="bg-white border border-gray-300 p-3 rounded-lg"
      >
        <option value="">All Industries</option>
        <option value="IT">IT</option>
        <option value="Finance">Finance</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Education">Education</option>
      </select>

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="bg-white border border-gray-300 p-3 rounded-lg"
      >
        <option value="">All Locations</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Chennai">Chennai</option>
        <option value="Pune">Pune</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="bg-white border border-gray-300 p-3 rounded-lg"
      >
        <option value="">Sort By</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>

    </div>
  )
}

export default Filters