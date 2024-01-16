import { Link } from "react-router-dom";
import { LogoutLink } from './LogoutLink';

export function Header() {
  let loggedInStatus;

  if(localStorage.jwt){
    loggedInStatus = (
    <>
      <li className="dropdown-item"><LogoutLink /></li>
    </>
    )
  } else {
    loggedInStatus = (
      <>
        <li><a className="dropdown-item" href="/login">Login</a></li>
        <li><a className="dropdown-item" href="/signup">Signup</a></li>
      </>
    )
  }

  return (
    <header>
      {/* <Link to="/about">About</Link> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Gym Essentials</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product/new">New Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cart">Cart</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/orders">Orders</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul className="dropdown-menu">
                  {/* <li><a className="dropdown-item" href="/login">Login</a></li>
                  <li><a className="dropdown-item" href="/signup">Signup</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li className="dropdown-item"><LogoutLink /></li> */}
                  {loggedInStatus}
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}