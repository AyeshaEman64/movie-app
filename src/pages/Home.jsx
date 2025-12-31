import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="home-hero__content">
          <h1>
            Discover <span>Movies</span> You’ll Love
          </h1>
          <p>
            Explore thousands of movies, check ratings, read detailed plots,
            and stay updated with the latest releases — all in one place.
          </p>

          <div className="home-hero__btns">
            <NavLink to="/movie" className="btn btn-primary">
              Explore Movies
            </NavLink>
            <NavLink to="/about" className="btn btn-outline">
              Learn More
            </NavLink>
          </div>
        </div>

        <div className="home-hero__image">
          <img src="/images/home-movie.png" alt="movie illustration" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="home-features">
        <div className="container grid grid-three--cols">
          <div className="feature-card">
            <h3>🎬 Huge Collection</h3>
            <p>Browse movies from all genres and eras.</p>
          </div>

          <div className="feature-card">
            <h3>⭐ IMDb Ratings</h3>
            <p>Check real ratings before you watch.</p>
          </div>

          <div className="feature-card">
            <h3>⚡ Fast & Modern</h3>
            <p>Built with React for a smooth experience.</p>
          </div>
        </div>
      </section>
    </>
  );
};
