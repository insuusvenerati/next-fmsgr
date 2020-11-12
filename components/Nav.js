export const Nav = () => (
  <div className="container-fluid mx-auto p-0 bg-white">
    <div className="row w-100 mx-auto mb-1">
      <div className="col-12">
        <div className="container text-center bg-white my-4">
          <a
            id="logo"
            href="/"
            className="text-decoration-none"
            title="Family Medicine Specialists, PC"
          >
            <img
              className="img-fluid mx-auto d-block"
              src="./header-logo.jpg"
              alt="Family Medicine Specialist Logo"
            />
          </a>
        </div>
        <div className="border-top mb-0"></div>
        <nav id="menu" className="navbar navbar-expand-lg navbar-light container text-center mt-0">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon my-2"></span>
          </button>

          <div className="collapse navbar-collapse h-100 mt-n2" id="navbarNavDropdown">
            <ul
              id="menu"
              className="navbar-nav nav list-group list-group-horizontal-lg border-top-0 mx-auto justify-content-center"
            >
              <li id="first-li" className="nav-item list-group-item border-top-0 border-left-0">
                <a href="/" className="text-decoration-none p-3">
                  <span>Home</span>
                </a>
              </li>
              <li className="nav-item list-group-item border-top-0">
                <div className="dropdown">
                  <a
                    className="btn btn-secondary dropdown-toggle bg-beige link-color text-decoration-none p-3"
                    href=""
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Providers
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a href="/providers/" className="dropdown-item text-decoration-none">
                      <span>Providers</span>
                    </a>
                    <a href="/case-manager/" className="dropdown-item text-decoration-none">
                      <span>Care Manager</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item list-group-item border-top-0">
                <a className="text-decoration-none" href="/patient-education/">
                  <span>Patient Education</span>
                </a>
              </li>
              <li className="nav-item list-group-item border-top-0">
                <a className="text-decoration-none" href="/category/the-health-hub/">
                  <span>The Health Hub</span>
                </a>
              </li>
              <li className="nav-item list-group-item border-top-0">
                <a className="text-decoration-none" href="/news/">
                  <span>News</span>
                </a>
              </li>
              <li className="nav-item list-group-item border-top-0">
                <a className="text-decoration-none" href="/forms/">
                  <span>Forms</span>
                </a>
              </li>
              <li id="last-li" className="nav-item list-group-item border-top-0 border-right-0">
                <a className="text-decoration-none" href="/contact-us/">
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <a className="responsive-menu-toggle" href="#">
          <i className="icon-menu"></i>
        </a>
      </div>
    </div>
  </div>
);
