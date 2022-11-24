
const Course = ({ course }) => {
  const Header = () => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Content = () => {
    const Part = ({ part }) => {
      return (
        <p>{part.name} {part.exercises}</p>
      )
    }
    return (
      <div>
        {course.parts.map((part) =>
          <Part key={part.id} part={part} />
        )}
      </div>
    )
  }
  
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
    </div>

  )
}

export default Course