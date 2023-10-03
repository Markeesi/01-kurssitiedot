import Part from "../Part/Part";

const Content = () => {

  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of component";
  const exercises3 = 14;



    return (
        <>
        <Part part={part1+ " "+ exercises1} />
        <Part part={part2+ " "+ exercises2} />
        <Part part={part3+ " "+ exercises3} />
        </>
    )

}

export default Content;