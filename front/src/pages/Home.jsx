
export default function Home() {
  const data = [{id: 1, name: "name1"},{id:2, name: "name2"},{id:3, name: "name3"}]
  return (
  <div className=" w-full h-full">
    <div className=" bg-yellow-300 grid grid-rows-3 h-[600px]">
      <div className=" bg-red-300 row-span-1">carousel</div>
        <div className=" bg-blue-300 row-span-2">
          <div className=" bg-gray-200 h-full">
            <div className=" bg-purple-300 h-full m-10">
              <ui>
                {data.map((item, index) => 
                   (<li key={item.name}>{item.name}</li>)
                )}
              </ui>
            </div>
          </div>
        </div>
    </div>
  </div>)
}