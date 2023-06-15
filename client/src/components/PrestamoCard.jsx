import { useNavigate } from 'react-router-dom';
import { deletePrestamo } from '../api/prestamos.api';

export function PrestamoCard({ prestamo }) {
  const navigate = useNavigate();

  const handleDeletePrestamo = async (idPrestamo) => {
    await deletePrestamo(idPrestamo);
    navigate('/prestamos/', { replace: true });
  };

  return (
    <tr>
      <td>{prestamo.idprestamo}</td>
      <td>{prestamo.fecprestamo}</td>
      <td>{prestamo.fecdevolucion}</td>
      <td>{prestamo.libro}</td>
      <td>{prestamo.usuario}</td>
      <td onClick={() => handleDeletePrestamo(prestamo.idprestamo)}>
        <button>Eliminar</button>
      </td>
    </tr>
  );
}

