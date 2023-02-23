{problem ? (
    problem
      .map((pro) => (
        
        <li
        key={pro.id}
        className={`w-full px-4 py-2 border-b border-gray-200  transition-colors duration-300 hover:bg-gray-100`}
      >
          {pro.url}
      </li>
          
      ))
  ) : (
    <p>Loading data...</p>
  )}

  <li
  key={pro.id}
  className={`w-full px-4 py-2 border-b border-gray-200  transition-colors duration-300 hover:bg-gray-100`}
>
    {pro.url}
</li>