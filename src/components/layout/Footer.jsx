import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
      <footer class="section-footer">
        <div class="footer-container container">
          <div class="content_1">
            <img src="./images/logo.png" alt="logo" />
            <p>
              Discover movies, ratings,
              <br />
              and detailed insights from
              <br />
              around the world.
            </p>

            <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
          </div>
          <div class="content_2">
            <h4>EXPLORE</h4>
            <NavLink to="/movie">Popular Movies</NavLink>
            <NavLink to="/movie">Latest Releases</NavLink>
            <NavLink to="/movie">Top Rated</NavLink>
            <NavLink to="/movie">Coming Soon</NavLink>
          </div>
          <div class="content_3">
            <h4>SUPPORT</h4>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/privacy">Privacy Policy</NavLink>
            <NavLink to="/terms">Terms & Conditions</NavLink>
          </div>
          <div class="content_4">
            <h4>NEWSLETTER</h4>
            <p>
              Get updates on new movies,
              <br />
              trailers & exclusive content!
            </p>

            <div class="f-mail">
              <input type="email" placeholder="Your Email" />
              <i class="bx bx-envelope"></i>
            </div>
            <hr />
          </div>
        </div>
        <div class="f-design">
          <div class="f-design-txt">
            <p>Design and Code by Ayesha Eman</p>
          </div>
        </div>
      </footer>
    </>
  );
};
