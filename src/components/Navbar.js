import React from 'react'
import navBarLogic from './navBarLogic'


export default function NewNavbar() {

  return (
    <nav class="navbar navbar-expand-lg bg-light">
<div class="container-fluid">
<a class="navbar-brand" href="#">Landing Pages</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="main_nav">
  <ul class="navbar-nav">
    <li class="nav-item active"> <a class="nav-link" href="#">Home </a> </li>
    <li class="nav-item"><a class="nav-link" href="#"> About </a></li>
    <li class="nav-item dropdown" id="myDropdown">
      <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">  Multilevel Dropdown  </a>
      <ul class="dropdown-menu">
        <li> <a class="dropdown-item" href="#"> Dropdown option 1 </a></li>
        <li> <a class="dropdown-item dropdown-toggle" href="#"> Dropdown option 2 </a>
          <ul class="submenu dropdown-menu">
            <li><a class="dropdown-item" href="#">Submenu 1</a></li>
            <li><a class="dropdown-item" href="#">Submenu 2</a></li>
            <li><a class="dropdown-item dropdown-toggle" href="#">Submenu 3</a>
              <ul class="submenu dropdown-menu">
                <li><a class="dropdown-item" href="#">Nested Submenu 1</a></li>
                <li><a class="dropdown-item" href="#">Nested Submenu 2</a></li>
              </ul>
            </li>
            <li><a class="dropdown-item" href="#">Submenu 4</a></li>
            <li><a class="dropdown-item" href="#">Submenu 5</a></li>
          </ul>
        </li>
        <li><a class="dropdown-item" href="#"> Dropdown option 3 </a></li>
        <li><a class="dropdown-item" href="#"> Dropdown option 4 </a></li>
      </ul>
    </li>
  </ul>
</div>

</div>

</nav>

  )
}
