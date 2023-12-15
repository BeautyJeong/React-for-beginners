import {useEffect, useState} from "react";

function Hello() {
    useEffect(() => {
       console.log("created~ :)");
       return () => console.log("destroy :(") //컴포넌트가 없어질 때 실행
    }, []);
    return <h1>Hello</h1>
}
function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);

  return (
      <div>
          {showing ? <Hello /> : null}
          <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      </div>
  );
}

export default App;
