import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";


function Courses() {
  const courses = [
    {
      title: "Web Development",
      icon: "🌐",
      description: "Learn HTML, CSS, JavaScript and React."
    },
    {
      title: "Python Programming",
      icon: "🐍",
      description: "Learn Python programming from basics to advanced."
    },
    {
      title: "Data Science",
      icon: "📊",
      description: "Explore data analysis and visualization."
    }
  ];

  return (
    <section className="page-section">
      <p className="section-tag">OUR COURSES</p>
      <h1>Explore Courses</h1>

      <div className="course-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.title}>
            <div className="course-icon">{course.icon}</div>

            <h2>{course.title}</h2>

            <p>{course.description}</p>

            <button className="course-btn">
              View Course →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="page-section contact-section">
      <p className="section-tag">GET IN TOUCH</p>
      <h1>Contact Us</h1>

      <div className="contact-card">
        <input
          type="text"
          placeholder="Enter your name"
        />

        <input
          type="email"
          placeholder="Enter your email"
        />

        <textarea
          placeholder="Enter your message"
          rows="5"
        ></textarea>

        <button className="primary-btn">
          Send Message
        </button>
      </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;