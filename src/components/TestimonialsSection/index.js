import "./index.css";

const TestimonialsSection = () => (
  <div className="testimonial-background">
    <div className="card-container">
      <div className="testimonial-card-container">
        <div className="testimonial-blank-card"></div>
        <div className="testimonial-content-card">
          <img
            src="https://res.cloudinary.com/ddsschd82/image/upload/v1696965314/LMI-Rehnuma-800x800_xnfptp.jpg"
            alt="testimonial"
            className="cardimage"
          />
          <p className="testimonial-description">
            Video lectures form the crux of IIDE’s student & corporate training
            curriculums. So creating content matching global education standards
            is paramount. TRC promptly adapted to brand guidelines & delivered
            quality animation that brought our experts explanation to life.
          </p>
          <p className="testimonial-name">Bhumit Gor</p>
          <p className="testimonial-detail">
            Co-Founder & Guitarist, Last Minute Band
          </p>
        </div>
      </div>
    </div>
    <div className="testimonial-right">
      <p className="testimonial-title">testimonials</p>
      <div className="line-container">
        <div class="about-circle"></div>
        <hr className="about-line" />
      </div>
      <div class="testimonial-expression">
        what they <br /> say about <br /> our passion?
      </div>
      <div className="arrow-container">
        <i class="fa-solid fa-arrow-left arrow"></i>
        <i class="fa-solid fa-arrow-right arrow"></i>
      </div>
    </div>
  </div>
);

export default TestimonialsSection;
