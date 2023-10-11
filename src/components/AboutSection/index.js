import "./index.css";

const AboutSection = () => (
  <div className="about-background">
    <div className="aboutcontent-container">
      <div className="about-leftcontent">
        <div>
          <h1 className="about-title-left">About US</h1>
          <div className="line-container">
            <hr className="about-line" />
            <div class="about-circle"></div>
          </div>
        </div>
        <h1 className="about-expression">
          “DELIVERING STUNNING"
          <br />
          "VISUAL NARRATIVES”
        </h1>
        <p className="about-leftpara">
          From concept to final edit, we tailor our production process to suit
          your unique needs, ensuring the highest quality results.
        </p>
      </div>
      <div className="about-rightcontent">
        <p className="about-rightpara">
          <span className="span-element">PATCO PRODUCTIONS </span>has earned its
          reputation in the market for its services. We aim to grow as the most
          prominent firm for our Customers, Business Associates & Stakeholders
          and we take pride that the intense vision of our experienced personnel
          encourages us to create a niche in the industry by serving clients
          across the globe.
        </p>
        <div>
          <h1 className="about-title-right">OUR STORY</h1>
          <div className="line-container">
            <div class="about-circle"></div>
            <hr className="about-line" />
          </div>
        </div>
      </div>
    </div>
    <div class="opacity-background">about</div>
  </div>
);

export default AboutSection;
