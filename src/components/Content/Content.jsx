import Part from "../Part/Part";
import Total from "../Total/Total";

const Content = ({parts}) => {

    const total = parts.reduce((total, part) => total + part.exercises, 0);

    return (
        <>
          {parts.map((part) =>(
            <Part key={part.id} name={part.name} exercises={part.exercises}   />))}
          <Total total={total} />  
        </>
    )

}

export default Content;