import axios from 'axios'

const prestamosApi = axios.create({
   baseURL:'http://localhost:8000/biblioteca/api/v1/prestamos/'
})

export const getAllPrestamos = () => {
   return prestamosApi.get('/')
}

export const createPrestamo = (prestamo) => {
   return prestamosApi.post('/', prestamo)
}