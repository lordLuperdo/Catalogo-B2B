import { defineStore } from "pinia";


export const useVentaStore = defineStore('venta', () => {


    const send_message = (list, list_prod, number) => {
        let mensaje = `Hola, estoy interesado en hacer un pedido Navideño. Aquí están los detalles de mi carrito:\n\n`;
    
    

       list.forEach(prod => {
            mensaje+= `- ${prod.name}: $${prod.price}\n`;
        });

       if(list.length < 1 && list_prod.length > 0) {
 
        mensaje+= `Productos perzonalizados: \n`
        list_prod.forEach(prod => {
            mensaje+= `- ${prod.name}`;
        });

       }

       if(list.length > 0 && list_prod.length > 0){
 
        mensaje+= `\nAdicionalmente me gustarían anchetas personalizadas con los siguientes productos: \n`
        list_prod.forEach(prod => {
            mensaje+= `- ${prod.name}`;
        });

       }


    
        
        const enlace = `https://wa.me/${number}?text=${encodeURIComponent(mensaje)}`;
    
        window.open(enlace, '_blank')
    }

const vendedores = [
    {
        id: 1,
        name:"Sergio Junco",
        number: 3504630269
    },
    {
        id: 2,
        name:"Andrés coneo",
        number: 3022600280
    },
   
]


return {vendedores, send_message,}

})