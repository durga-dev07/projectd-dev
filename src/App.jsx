import { useEffect, useState } from "react"
import companiesData from "./data/companies.json"
import CompanyCard from "./components/CompanyCard"
import Filters from "./components/Filters"

import {
  Building2,
  MapPin,
  BriefcaseBusiness,
  Moon,
  Sun
} from "lucide-react"

function App() {

  const [companies, setCompanies] = useState([])
  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState("")
  const [industry, setIndustry] = useState("")
  const [location, setLocation] = useState("")
  const [sort, setSort] = useState("")

  const [darkMode, setDarkMode] = useState(false)

  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const companiesPerPage = 6

  useEffect(() => {

    setTimeout(() => {
      setCompanies(companiesData)
      setLoading(false)
    }, 1000)

  }, [])

  let filteredCompanies = companies.filter((company) => {

    return (
      company.name
        .toLowerCase()
        .includes(search.toLowerCase()) &&

      (industry
        ? company.industry === industry
        : true) &&

      (location
        ? company.location === location
        : true)
    )

  })

  // Sorting
  if (sort === "asc") {
    filteredCompanies.sort((a, b) =>
      a.name.localeCompare(b.name)
    )
  }

  if (sort === "desc") {
    filteredCompanies.sort((a, b) =>
      b.name.localeCompare(a.name)
    )
  }

  // Pagination
  const indexOfLastCompany =
    currentPage * companiesPerPage

  const indexOfFirstCompany =
    indexOfLastCompany - companiesPerPage

  const currentCompanies =
    filteredCompanies.slice(
      indexOfFirstCompany,
      indexOfLastCompany
    )

  const totalPages = Math.ceil(
    filteredCompanies.length / companiesPerPage
  )

  return (

    <div
      className={`min-h-screen p-6 transition-all duration-500
      ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-slate-900 to-black"
          : "bg-gradient-to-br from-cyan-100 via-indigo-100 to-pink-100"
      }`}
    >

      {/* Navbar */}
      {/* Navbar */}
<nav
  className={`backdrop-blur-lg rounded-2xl p-4 mb-10 flex justify-between items-center border
  ${
    darkMode
      ? "bg-white/10 border-white/10"
      : "bg-white/40 border-white/30"
  }`}
>

  {/* Logo */}
  <h2
    className={`text-2xl font-bold ${
      darkMode
        ? "text-white"
        : "text-indigo-700"
    }`}
  >
    Project Dev
  </h2>

  {/* Dark Mode Toggle */}
  <button
    onClick={() => setDarkMode(!darkMode)}

    className={`p-3 rounded-full transition-all duration-300
    hover:scale-110 hover:rotate-12
    shadow-lg
    ${
      darkMode
        ? "bg-yellow-400 text-black"
        : "bg-black text-white"
    }`}
  >

    {
      darkMode
        ? <Sun size={22} />
        : <Moon size={22} />
    }

  </button>

</nav>

      {/* Heading */}
      <h1
        className={`text-4xl md:text-5xl font-bold text-center mb-10
        ${
          darkMode
            ? "text-white"
            : "text-indigo-700"
        }`}
      >
        Companies Directory Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        {/* Card 1 */}
        <div
          className={`p-6 rounded-2xl shadow-xl flex items-center justify-between
          ${
            darkMode
              ? "bg-gradient-to-r from-indigo-700 to-purple-700 text-white"
              : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
          }`}
        >

          <div>
            <h2 className="text-white/80">
              Total Companies
            </h2>

            <p className="text-3xl font-bold">
              {companies.length}
            </p>
          </div>

          <Building2 size={40} />

        </div>

        {/* Card 2 */}
        <div
          className={`p-6 rounded-2xl shadow-xl flex items-center justify-between
          ${
            darkMode
              ? "bg-gradient-to-r from-pink-700 to-rose-700 text-white"
              : "bg-gradient-to-r from-pink-500 to-rose-500 text-white"
          }`}
        >

          <div>
            <h2 className="text-white/80">
              Industries
            </h2>

            <p className="text-3xl font-bold">
              4
            </p>
          </div>

          <BriefcaseBusiness size={40} />

        </div>

        {/* Card 3 */}
        <div
          className={`p-6 rounded-2xl shadow-xl flex items-center justify-between
          ${
            darkMode
              ? "bg-gradient-to-r from-cyan-700 to-blue-700 text-white"
              : "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
          }`}
        >

          <div>
            <h2 className="text-white/80">
              Locations
            </h2>

            <p className="text-3xl font-bold">
              4
            </p>
          </div>

          <MapPin size={40} />

        </div>

      </div>

      {/* Filters */}
      <Filters
        search={search}
        setSearch={setSearch}

        industry={industry}
        setIndustry={setIndustry}

        location={location}
        setLocation={setLocation}

        sort={sort}
        setSort={setSort}
      />

      {/* Loading */}
      {
        loading ? (

          <div className="flex justify-center mt-20">

            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-700"></div>

          </div>

        ) : filteredCompanies.length === 0 ? (

          <div className="flex justify-center mt-20">

            <h2 className="text-3xl font-semibold text-red-500">
              No Companies Found
            </h2>

          </div>

        ) : (

          <>

            {/* Company Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">

              {
                currentCompanies.map((company) => (

                  <CompanyCard
                    key={company.id}
                    company={company}
                    darkMode={darkMode}
                  />

                ))
              }

            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-4 mt-10">

              <button
                onClick={() =>
                  setCurrentPage(currentPage - 1)
                }

                disabled={currentPage === 1}

                className={`px-5 py-2 rounded-lg text-white
                ${
                  darkMode
                    ? "bg-indigo-500 hover:bg-indigo-600"
                    : "bg-indigo-600 hover:bg-indigo-700"
                }
                disabled:bg-gray-400`}
              >
                Prev
              </button>

              <span
                className={`text-xl font-semibold mt-1
                ${
                  darkMode
                    ? "text-white"
                    : "text-black"
                }`}
              >
                {currentPage} / {totalPages}
              </span>

              <button
                onClick={() =>
                  setCurrentPage(currentPage + 1)
                }

                disabled={currentPage === totalPages}

                className={`px-5 py-2 rounded-lg text-white
                ${
                  darkMode
                    ? "bg-indigo-500 hover:bg-indigo-600"
                    : "bg-indigo-600 hover:bg-indigo-700"
                }
                disabled:bg-gray-400`}
              >
                Next
              </button>

            </div>

          </>

        )
      }

      {/* Footer */}
      <footer
        className={`text-center mt-16
        ${
          darkMode
            ? "text-gray-300"
            : "text-gray-600"
        }`}
      >
        Built with React & Tailwind CSS
      </footer>

    </div>
  )
}

export default App