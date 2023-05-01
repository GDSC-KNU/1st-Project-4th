export default function Home() {
  const temp = [
    { id: 1, name: '알고리즘 문제1', level: 2 },
    { id: 2, name: '알고리즘 문제2', level: 1 },
    { id: 3, name: '알고리즘 문제3', level: 2 },
    { id: 4, name: '알고리즘 문제4', level: 3 },
    { id: 5, name: '알고리즘 문제5', level: 5 },
  ];
  // const data = fetch('')

  return (
    <div className=" w-full h-full">
      <div className=" grid grid-rows-3 ">
        <div className=" bg-gray-300 row-span-1 items-center flex justify-center text-4xl font-bold">
          Welcome to AlgoHelper
        </div>

        <div className="  row-span-2">
          <div className=" bg-gray-200 h-full">
            <div className="  h-full mx-20 mt-10 p-3">
              <div className=" p-2 font-bold text-xl mt-6">
                오늘의 문제 추천
              </div>
              <ul>
                {temp.map((item, index) => (
                  <li
                    className=" w-full flex justify-between p-3 items-center"
                    key={item.name}
                  >
                    {item.name}
                    <span className=" flex text-sm text-gray-500">
                      <p>유형: DFS</p>
                      <p className=" ml-8">난이도 {item.level}</p>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
