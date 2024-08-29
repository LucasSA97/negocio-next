import { z } from 'zod'

export const OrderSchema = z.object({
    name: z.string().min(1, 'El nombre es requerido'),
    total: z.number().min(1, 'Hay errores en la orden'),
    order: z.array(z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        subTotal: z.number()
    }))            
})

export const SearchSchema = z.object({
    search: z.string().trim().min(1, {message: 'La búsqueda no puede estar vacia'})
})