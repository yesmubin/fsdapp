const courses = [
    {
        id: 1,
        title: "HTML & CSS",
        description: "Learn the fundamentals of web development."
    },
    {
        id: 2,
        title: "JavaScript",
        description: "Learn programming for the web."
    },
    {
        id: 3,
        title: "React",
        description: "Build modern user interfaces."
    }
];

function Courses() {
    return (
        <section className="page">
            <h1>Courses</h1>

            <div className="course-grid">
                {courses.map(course => (
                    <div
                        className="course-card"
                        key={course.id}
                    >
                        <h2>{course.title}</h2>

                        <p>{course.description}</p>

                        <button>
                            Learn More
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Courses;
