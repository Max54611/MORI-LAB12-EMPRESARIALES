import { useEffect, useState } from 'react';
import { getAllPrestamos, deletePrestamo } from '../api/prestamos.api';
import { PrestamoCard } from './PrestamoCard';

export function PrestamosList() {
  const [prestamos, setPrestamos] = useState([]);

  useEffect(() => {
    loadPrestamos();
  }, []);

  const loadPrestamos = async () => {
    const res = await getAllPrestamos();
    setPrestamos(res.data);
  };

  const handleDeletePrestamo = async (idPrestamo) => {
    await deletePrestamo(idPrestamo);
    loadPrestamos();
  };

  return (
    <div>
      <table style={{ border: '1px solid white', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID Prestamo</th>
            <th>Fecha Prestamo</th>
            <th>Fecha Devolucion</th>
            <th>Libro</th>
            <th>Usuario</th>
          </tr>
        </thead>
        <tbody>
          {prestamos.map((prestamo) => (
            <PrestamoCard
              key={prestamo.idprestamo}
              prestamo={prestamo}
              onDeletePrestamo={handleDeletePrestamo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

