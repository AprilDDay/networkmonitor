import useOnline from "./onlinestatus";
import './App.css';


function App(){
  const online = useOnline();

  return (
    <div className="App">
      <h3 class="ui center aligned icon header">
        <i class="circular plug icon"></i>
        React network monitor
      </h3>

      <div class="ui two column centered grid">
        <span>
          {online ? (
            <div className="ui green message">
              {" "}
              <i class="wifi icon"></i>Congrats! You are ONLINE...
            </div>
          ) : (
            <div className="ui red message">
              {" "}
              <i class="meh icon"></i> Please check your network connection. 
            </div>
          )
        }
        </span>{" "}
      </div>
    </div>
  );
}


export default App;
//export default App; 