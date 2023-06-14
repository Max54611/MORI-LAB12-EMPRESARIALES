import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <div>
        <Link to="/prestamos">
        <h1>Prestamos App</h1>
        </Link>
        <Link to="/prestamos-create">create prestamos</Link>
    </div>
  )
}
