import React from 'react';
import { Link  } from 'react-router-dom'

export const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to={'/consultorios'}>Consultorios</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to={'/especialistas'}>Especialistas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to={'/clientes'}>Clientes</Link>
        </li>

      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
;


export const Body = () => {
  return (
<div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col-sm-4">
  <div className="card w-50">
      <div className="card-body">
        <h5 className="card-title">Tratamiento especial del título</h5>
        <p className="card-text">Con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
        <Link className='btn btn-info mt-3' aria-current="page" to={'/consultorios'}>Consultorios</Link>
      </div>
    </div>
  </div>

  <div className="col-sm-4">
  <div className="card w-50">
      <div className="card-body">
        <h5 className="card-title">Tratamiento especial del título</h5>
        <p className="card-text">Con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
        <Link className='btn btn-info mt-3' aria-current="page" to={'/consultorios'}>Consultorios</Link>
      </div>
    </div>
  </div>

  <div className="col-sm-4">
  <div className="card w-50">
      <div className="card-body">
        <h5 className="card-title">Tratamiento especial del título</h5>
        <p className="card-text">Con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
        <Link className='btn btn-info mt-3' aria-current="page" to={'/consultorios'}>Consultorios</Link>
      </div>
    </div>
  </div>

  <div className="col-sm-4">
  <div className="card w-50">
      <div className="card-body">
        <h5 className="card-title">Tratamiento especial del título</h5>
        <p className="card-text">Con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
        <Link className='btn btn-info mt-3' aria-current="page" to={'/consultorios'}>Consultorios</Link>
      </div>
    </div>
  </div>

  <div className="col-sm-4">
  <div className="card w-50">
      <div className="card-body">
        <h5 className="card-title">Tratamiento especial del título</h5>
        <p className="card-text">Con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
        <Link className='btn btn-info mt-3' aria-current="page" to={'/consultorios'}>Consultorios</Link>
      </div>
    </div>
  </div>

  
</div>
  )
};

