
import {useForm} from 'react-hook-form'
import {createPrestamo} from '../api/prestamos.api'

export function PrestamosFormPage() {

  const {register,handleSubmit} = useForm()


  const onSubmit = handleSubmit(async (data)=>{
    const res = await createPrestamo(data)
    console.log(res)
  })

    return (
      <div>
        <form onSubmit={onSubmit}>
          <input type="number" placeholder="idprestamo"
          {...register("idprestamo")}/> 
          
          <input type="date" placeholder="fecprestamo"
          {...register("fecdevolucion")}/>
          
          <input type="text" placeholder="libro"
          {...register("libro")}/>
          
          <input type="text" placeholder="usuario"
          {...register("usuario")}/>
          <button>Save</button>
        </form>
      </div>
    )
  }