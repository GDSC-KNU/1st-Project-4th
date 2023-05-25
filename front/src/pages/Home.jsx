export default function Home() {
  const temp = [
    { id: 1, name: '알고리즘 문제1', level: 2 },
    { id: 2, name: '알고리즘 문제2', level: 1 },
    { id: 3, name: '알고리즘 문제3', level: 2 },
    { id: 4, name: '알고리즘 문제4', level: 3 },
    { id: 5, name: '알고리즘 문제5', level: 5 },
    { id: 6, name: '알고리즘 문제6', level: 5 },
  ];

  return (
    <div className="w-full h-full">
      <div className="grid grid-rows-3">
        <div className="row-span-1 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center">
            Welcome to <span className="text-blue-600">AlgoHelper</span>
          </h1>
        </div>

        <div className="row-span-2">
          <div className="h-full">
            <div className="h-full md:mx-20 mt-10 p-3">
              <div className="mt-8 p-2 font-bold text-3xl text-center">오늘의 문제 추천</div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {temp.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md p-8 mb-4 w-full flex flex-col items-center justify-center"
                  >
                    <h3 className="font-bold text-center">
                      <span className="inline-block w-full">{item.name}</span> {/* w-full 클래스 추가 */}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
