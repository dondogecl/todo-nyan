import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My Todo App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Create Todo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                History
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Change character
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
