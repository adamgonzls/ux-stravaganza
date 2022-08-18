import { NavLink } from 'react-router-dom'

export default function Header() {
  let activeStyle = {
    textDecoration: 'underline',
  }

  let activeClassName = 'underline'

  return (
    <header>
      <ul>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
      </ul>
    </header>
  )
}
