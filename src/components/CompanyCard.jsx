const CompanyCard = ({ company, darkMode }) => {

  return (

    <div
      className={`p-5 rounded-2xl backdrop-blur-lg border
      transition-all duration-300
      hover:-translate-y-2
      hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)]
      ${
        darkMode
          ? "bg-white/10 border-white/10 text-white"
          : "bg-white/60 border-white/30 text-black"
      }`}
    >

      {/* Avatar */}
      <div
        className="w-14 h-14 rounded-full
        bg-gradient-to-r from-indigo-600 to-purple-600
        text-white flex items-center justify-center
        text-2xl font-bold mb-4"
      >
        {company.name.charAt(0)}
      </div>

      {/* Company Name */}
      <h2
        className={`text-2xl font-bold mb-3
        ${
          darkMode
            ? "text-white"
            : "text-indigo-700"
        }`}
      >
        {company.name}
      </h2>

      {/* Industry */}
      <p
        className={`mb-2
        ${
          darkMode
            ? "text-gray-300"
            : "text-gray-700"
        }`}
      >
        <span className="font-semibold">
          Industry:
        </span>{" "}
        {company.industry}
      </p>

      {/* Location */}
      <p
        className={`mb-2
        ${
          darkMode
            ? "text-gray-300"
            : "text-gray-700"
        }`}
      >
        <span className="font-semibold">
          Location:
        </span>{" "}
        {company.location}
      </p>

      {/* Employees */}
      <p
        className={`mb-4
        ${
          darkMode
            ? "text-gray-300"
            : "text-gray-700"
        }`}
      >
        <span className="font-semibold">
          Employees:
        </span>{" "}
        {company.employees}
      </p>

      {/* Button */}
      <a
        href={company.website}
        target="_blank"
        rel="noreferrer"

        className="inline-block
        bg-gradient-to-r from-indigo-600 to-purple-600
        hover:scale-105
        transition-all duration-300
        text-white px-4 py-2 rounded-lg"
      >
        Visit Website
      </a>

    </div>
  )
}

export default CompanyCard
