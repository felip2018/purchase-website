import type {IProduct} from "../models/IProduct.ts";

export const productsMock: IProduct[] = [
  {
    id: 1,
    image: "",
    color: "",
    title: "Sérum de caléndula",
    presentation: "30 ml · frasco",
    description: `Caléndula macerada en aceite de girasol durante seis semanas, con vitamina E.
    Calma enrojecimientos y se absorbe sin dejar rastro.`,
    price: 78000,
    stock: 6,
  },
  {
    id: 2,
    image: "",
    color: "",
    title: "Bálsamo de cera de abejas",
    presentation: "50 g · lata",
    description: `Cera de abejas de apiarios de Boyacá con manteca de karité y aceite de almendras. 
    Para manos, codos y labios agrietados.`,
    price: 42000,
    stock: 12,
  },
  {
    id: 3,
    image: "",
    color: "",
    title: "Aceite limpiador de jojoba",
    presentation: "100 ml · vidrio",
    description: `Limpieza en seco que disuelve maquillaje y protector solar sin alterar la barrera de la piel. 
    Se emulsiona con agua tibia.`,
    price: 96000,
    stock: 3,
  },
  {
    id: 4,
    image: "",
    color: "",
    title: "Tónico de rosa mosqueta",
    presentation: "120 ml · atomizador",
    description: `Hidrolato de rosa mosqueta con glicerina vegetal. Repone humedad después de limpiar y antes del sérum.`,
    price: 54000,
    stock: 0,
  },
  {
    id: 5,
    image: "",
    color: "",
    title: "Arcilla verde purificante",
    presentation: "80 g · polvo",
    description: `Arcilla verde francesa molida fina con avena coloidal. Se mezcla con agua o hidrolato para una mascarilla semanal.`,
    price: 38000,
    stock: 9,
  }
]
