import { useState } from "react"

function App() {

  const [score,setScore]=useState({
    score:76,
    wickets:2,
    balls:50,
    // overs: (Math.floor(score.balls/6)+"."+score.balls%6)
 })

const handleChange=(ref,val)=>{
  if(score.score>100)return
  if(ref==="wickets"&&score.wickets===12)return
  setScore({...score,[ref]:score[ref]+val})
}

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:<h1 className="scoreCount">{score.score}</h1>
        </div>
        <div>
          Wicket:
          <h1 className="wicketCount">
            {
               score.wickets            }
          </h1>
        </div>

        <div>
          Over:
          <h1 className="overCount">
            {
            Math.floor(score.balls/6) +"."+score.balls%6
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>handleChange("score",1)}>Add 1</button>
        <button className="addScore4" onClick={()=>handleChange("score",4)}>Add 4</button>
        <button className="addScore6" onClick={()=>handleChange("score",6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        <button  onClick={()=>handleChange("wickets",1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        <button  onClick={()=>handleChange("balls",1)}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      <h1 className="status">{score.score>100?"India Won":""}</h1>
    </div>
  );
}

export default App;
