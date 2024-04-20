export async function getStaticProps() {
  const data = await fetch('https://localhost:8080/match').then(res => res.json());
  console.log(data);
}

export function Card() {
  
  return (
    <div>
      <div className="max-w-md rounded overflow-hidden shadow-lg">
        <div className="px-4 py-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="">
              <h1 className="flex justify-center font-bold text-xl mb-2">HomeTeam</h1>
              <div className="flex justify-center text-xl font-bold">5</div>
              <h3 className="flex justify-center text-sm mt-2"></h3>
              </div>
            <div>
              <div className="flex text-xs mt-2 justify-center">20/04/2024</div>
              <div className="flex justify-center mt-4 text-xl">x</div>
              <div className="flex justify-center mt-6 text-sm">
                <p>Mulambley</p>
              </div>
              <div className="flex justify-center mt-2 text-sm">
                <p>FIFA23</p>
              </div>
              </div>
            <div className="">
              <h1 className="flex justify-center font-bold text-xl mb-2">AwayTeam</h1>
              <div className="flex justify-center text-xl font-bold">4</div>
              <h3 className="flex justify-center text-sm mt-2">gabriel</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
