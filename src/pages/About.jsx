export const About = () => {
  return (
    <section className="about-section">
      <div className="container about-container">
        <div className="about-content">
          <h2 className="section-common--heading">About Us</h2>
          <p className="section-common--subheading">
            Your trusted destination for discovering movies worldwide.
          </p>

          <p className="about-text">
            Ayesha Movies is a modern movie discovery platform built for film
            lovers. Explore movies, check ratings, read detailed descriptions,
            and stay updated with the latest releases — all in one place.
          </p>

          <p className="about-text">
            This project is built using <strong>React</strong> and{" "}
            <strong>React Router</strong>, powered by the{" "}
            <strong>OMDb API</strong>, and designed with a clean, modern UI to
            deliver a smooth browsing experience.
          </p>

          <div className="about-stats">
            <div>
              <h3>10K+</h3>
              <p>Movies</p>
            </div>
            <div>
              <h3>8K+</h3>
              <p>Ratings</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>Movie Love</p>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img src="images\about-movie.png" alt="about movies" />
        </div>
      </div>
    </section>
  );
};
