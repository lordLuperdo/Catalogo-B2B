import { defineStore } from "pinia";

export const UseProductStore = defineStore('productos', ()=>{


    const car = ref([])

    const car_visible = computed(()=> {return car})

    const add_to_car = (object)=>{
         car.value.push({...object})
         console.log(car_visible.value)
    }


 const products = {
    cofres:[
        {
            id: 7969,
            name: "COFRE ROJO",
            products:["Galleta Dukeza 454gr","Durazno Bombillo 280gr", "Vino Clos 750ml",
            "Dulce Aguinaldo Natilla 300gr", "Atún Fortín aceite/Agua","Panetón 80gr", "Barra Snickers 53gr"],
            price:"49.900"
        },
        {
            id: 2457,
            name: "COFRE VERDE",
            products:["Galleta Plegadiza 220gr","Torta Dulce Agunaldo 380gr", "Vino Clos 750ml",
            "Maní Pierrot 150gr", "Salchicha Viena 150gr","Cerveza Baltika 500ml", "Barra Snickers 53gr", "Maretti 85gr"],
            price:"63.900"
        },
        {
            id: 8436,
            name: "COFRE AZUL",
            products:["Galleta Dukeza 200gr","Torta Roja 200gr", "Vino Olas del Sur 750ml",
            "Maní Bary 150gr", "Mermelada Bary 200gr","Cerveza Baltika 500ml", "Barra Snickers 53gr"],
            price:"63.900"
        },
        
        
    ],
    maletines:[
        {
            id: "5621",
            name: "MALETIN ROJO",
            products:["Natilla dulce Aguinaldo 300gr",
            "Buñuelo Dulce Aguinaldo 300Gr","Durazno Alfa 820 Gr", "Mermelada Pierrot 170Gr",
            "Galleta pierrot 220Gr","Maní Pierrot","Panetón 80Gr","Candiota 750ml"],
            price: "300.000"
        },
       
    ],
    estuches:[],
    productos:[
        {
            id:2859,
            name: "Dukeza",
            full_name:"Galleta Dukeza 454gr"
        },
        {
            id:9570,
            name: "Durazno",
            full_name:"Durazno Bombillo 280gr"
        },
        {
            id:6230,
            name: "Clos",
            full_name:"Vino Clos de pirque 750"
        },
        {
            id:7570,
            name: "Natilla",
            full_name:"Natilla Dulce Aguinaldo 300gr"
        },
        {
            id:8769,
            name: "Atun AA.",
            full_name:"Atun Fortin Agua"
        },
        {
            id:1519,
            name: "Atun AE.",
            full_name:"Atun Fortin Aceite"
        },
        {
            id:2016,
            name: "Panettón",
            full_name:"ponqué panetton 80gr"
        },
        {
            id:8994,
            name: "Dulce",
            full_name:" DulceBarra Snickers"
        },
        {
            id:2803,
            name: "Dukeza",
            full_name:"Galleta Dukeza 200gr"
        },
        {
            id:3394,
            name: "Torta",
            full_name:"Torta Roja 400gr"
        },
        {
            id:1028,
            name: "Maní",
            full_name:"Mani Bary"
        },
        {
            id:9790,
            name: "Mermelada",
            full_name:"Mermelada bary 200gr"
        },
        

    ],
 }


   return {products,car,car_visible,add_to_car}

})