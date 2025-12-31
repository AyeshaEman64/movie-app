import { useRouteError, useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  if (error.status === 404) {
    return (
      <section className="error-section">
        <div className="error-container">
          <figure>
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
            />
          </figure>

          <div className="error-text">
            <h1>404</h1>
            <p>The page you were looking for could not be found.</p>

            <div className="error-buttons">
              <button
                className="go-back-btn"
                onClick={() => navigate(-1)}
              >
                ⬅ Go Back
              </button>

              <button
                className="go-home-btn"
                onClick={() => navigate("/")}
              >
                🏠 Go Home
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
};
