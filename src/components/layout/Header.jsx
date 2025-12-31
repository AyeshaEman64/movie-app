import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header class="section-navbar">
        <section class="top_txt">
          <div class="head container">
            <div class="head_txt">
              <p>Love to watch movies in free time?You're on right place.</p>
            </div>
            <div class="sing_in_up">
              <NavLink to="# ">SIGN IN</NavLink>
              <NavLink to="# ">SIGN UP</NavLink>
            </div>
          </div>
        </section>
        <div class="container">
          <div class="navbar-brand">
            <NavLink to="/">
              <img
                src="./public/images/logo.png"
                alt="logo"
                class="logo"
                width="10%"
                height="auto"
              />
            </NavLink>
          </div>

          <nav class="navbar">
            <ul>
              <li class="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  About
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/movie"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  Movies
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
