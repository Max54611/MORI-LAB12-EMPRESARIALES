import { useForm } from 'react-hook-form';
import { createPrestamo } from '../api/prestamos.api';
import { useNavigate } from 'react-router-dom';

export function PrestamosFormPage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const res = await createPrestamo(data);
    console.log(res);
    navigate('/prestamos/');
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="number" placeholder="idprestamo" {...register('idprestamo')} />
        <input type="date" placeholder="fecprestamo" {...register('fecdevolucion')} />
        <input type="text" placeholder="libro" {...register('libro')} />
        <input type="text" placeholder="usuario" {...register('usuario')} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
