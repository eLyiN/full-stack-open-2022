const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = ({ course }) => {

  return (
    <div>
      {course.parts.map((part) =>
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Total = ({ course }) => {
  const result = course.parts.map(value => value.exercises)
  const sum = result.reduce((partialSum, a) => partialSum + a, 0);
  console.log(sum)
  return (
    <div>
      <b>total of {sum} exercises</b>
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>

  )
}

export default Course