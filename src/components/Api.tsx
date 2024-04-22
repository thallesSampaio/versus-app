type Match = {
  id: number;
  game: string;
  stadium: string;
  date: string;
  playersHome: string;
  homeTeam: string; 
  homeGoals: number;
  playersAway: string;
  awayTeam: string; 
  awayGoals: number;
}

export default async function Api() {
  const cards = await fetch('http://localhost:8080/match').then(res => res.json());
  console.log(cards)
  return (
    <div>
        {cards ?.map((card) =>(
            <div key={card.id}>
                <div>
                <div>
                    
                </div>
                </div>
                <div>
      <div className="max-w-xl rounded overflow-hidden shadow-lg">
        <div className="px-4 py-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="">
              <h1 className="flex justify-center font-bold text-xl mb-2">{card.homeTeam}</h1>
              <div className="flex justify-center text-xl font-bold">{card.homeGoals}</div>
              <h3 className="flex justify-center text-sm mt-2">{card.playersHome}</h3>
              </div>
            <div>
              <div className="flex text-xs mt-2 justify-center">{card.date}</div>
              <div className="flex justify-center mt-4 text-xl">x</div>
              <div className="flex justify-center mt-6 text-sm">
                <p>{card.stadium}</p>
              </div>
              <div className="flex justify-center mt-2 text-sm">
                <p>{card.game}</p>
              </div>
              </div>
            <div className="">
              <h1 className="flex justify-center font-bold text-xl mb-2">{card.awayTeam}</h1>
              <div className="flex justify-center text-xl font-bold">{card.awayGoals}</div>
              <h3 className="flex justify-center text-sm mt-2">{card.playersAway}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
            </div>
        ))}
    </div>
    
  )
}