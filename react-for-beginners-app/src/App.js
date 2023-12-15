import {useEffect, useState} from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onChange = (event) => setKeyword(event.target.value);
    const onClick = () => setValue((prev) => prev + 1);

    useEffect(() => {
        console.log("I run only once.");
    }, []); //dependency(배열)에 아무것도 없기 때문에 코드는 처음 한 번만 실행됨

    useEffect( () => {
        if (keyword !== "") {
            console.log("I run when 'keyword' changes.");
        }
    }, [keyword]) //keyword가 변할 때 코드 실행

    useEffect( () => {
        console.log("I run when 'counter' changes.");
    }, [counter]) //처음, counter가 변할 때 코드 실행

    useEffect( () => {
        console.log("I run when 'counter' & 'keyword' change.");
    }, [counter, keyword] ) // 처음, counter와 keyword가 변할 때 코드 실행

  return (
      <div>
          <input value={keyword} onChange={onChange} type="text" placeholder="Search here~" />
          <h1>{counter}</h1>
          <button onClick={onClick}>Click me!</button>
      </div>
  );
}

export default App;
