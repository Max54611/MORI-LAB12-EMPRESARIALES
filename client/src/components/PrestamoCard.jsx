import {useNavigate} from 'react-router-dom'

export function PrestamoCard({prestamo}) {
    const navigate= useNavigate()

  return (
        <tr>
            <td>{prestamo.idprestamo}</td>
            <td>{prestamo.fecprestamo}</td>
            <td>{prestamo.fecdevolucion}</td>
            <td>{prestamo.libro}</td>
            <td>{prestamo.usuario}</td>
            <td onClick={()=>{
                navigate('/prestamos/' +prestamo.idprestamo)
            }}><button>Eliminar</button></td>
        </tr>
  )
}

