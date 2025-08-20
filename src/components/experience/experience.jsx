import './experience.css'

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="timeline">
        <div className="item">
          <span className="year">2025</span>
          <h3>Frontend Developer <small>@ Freelance</small></h3>
          <p>Delivering performant React interfaces for small companies or startups.</p>
        </div>
        <div className="item">
          <span className="year">2022-Now</span>
          <h3>Bachelor's Degree</h3>
          <p>Studying Software Engineering.</p>
        </div>
        <div className="item">
          <span className="year">2019-2022</span>
          <h3>Programming Course</h3>
          <p>Completed a comprehensive programming course covering various languages and frameworks.</p>
        </div>
      </div>
    </section>
  )
}

export default Experience
