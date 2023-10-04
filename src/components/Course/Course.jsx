import Header from "../Header/Header";
import Content from "../Content/Content";

const Course = ({ course}) =>  {
    const { name, parts } = course;

    return (
        <>
            <Header course={name} />
            <Content parts={parts} />
        </>

    );

};

export default Course;