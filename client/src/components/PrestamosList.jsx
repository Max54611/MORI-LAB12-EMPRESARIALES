import {useEffect,useState} from 'react'
import {getAllPrestamos} from '../api/prestamos.api'
import {PrestamoCard} from './PrestamoCard'
export function PrestamosList() {
    const [prestamos, setPrestamos] =useState([]);

useEffect(() => {
    async function loadPrestamos(){
        const res = await getAllPrestamos();
        setPrestamos(res.data);
    }
    loadPrestamos();
},[]);

  return <div>
    <table style={{border:'1px solid white', borderCollapse: 'collapse'}}><thead><tr>
        <th>ID Prestamo</th>
        <th>Fecha Prestamo</th>
        <th>Fecha Devolucion</th>
        <th>Libro</th>
        <th>Usuario</th>
    </tr></thead><tbody>

    {prestamos.map(prestamo => (
        <PrestamoCard  key={prestamo.idprestamo} prestamo={prestamo}/>
    ))}
   </tbody></table></div>;

}
