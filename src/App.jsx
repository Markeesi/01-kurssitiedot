import Header from "./components/Header/Header";
import Content from "./components/Content/content";
import Total from "./components/Total/Total";

function App() {
 
  const course = "Half Stack application development";
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <>
        <Header course={course} />
        <Content />
        <Total total={exercises1+exercises2+exercises3} />
    </>
  )
}

export default App
