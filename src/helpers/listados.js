//TODO: Menu
export  const menu =[
    {
      icon: <i className="fa-solid fa-mug-saucer"></i>,
      category: 'Cafés',
      path: '/menu/coffe'
    },{
      icon: <i className="fa-solid fa-mug-hot"></i>,
      category: 'Tés',
      path: '/menu/tes'
    },{
      icon: <i className="fa-solid fa-apple-whole"></i>,
      category: 'Jugos Naturales',
      path: '/menu/jugos'
    },
    {
      icon: <i className="fa-solid fa-blender"></i>,
      category: 'Licuados',
      path: '/menu/licuados'
    },
    {
      icon: <i className="fa-solid fa-bread-slice"></i>,
      category: 'Panaderia',
      path: '/menu/panaderia'
    },
    {
      icon: <i className="fa-solid fa-cake-candles"></i>,
      category: 'Pasteleria',
      path: '/menu/pasteleria'
    },
    {
      icon: <i className="fa-solid fa-burger"></i>,
      category: 'Comida Rápida',
      path: '/menu/comidaRapida'
    },
    {
      icon: <i className="fa-solid fa-utensils"></i>,
      category: 'Menú de tres pasos',
      path: '/menu/menuDePasos'
    },
    {
      icon: <i className="fa-solid fa-martini-glass"></i>,
      category: 'Tragos',
      path: '/menu/tragos'
    }
    ,
    {
      icon: <i className="fa-solid fa-arrow-left-long"></i>,
      category: 'Volver',
      path: '/'
    }
    
  ]
  
  
  //TODO: Cafes
  export const cafes=[
    {
      nombre: "Expresso",
      precio: '$120',
      id: 1,
      description: 'Es una bebida intensa de café, preparada a alta temperatura a alta presion y en un corto especio de tiempo.',
      path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNa3bUDLx_BxWWbt6k6F4a5yzHfO-11VpGPQ&usqp=CAU'
      
    },
    {
      nombre: "Ristretto",
      precio: '$120',
      id: 2,
      description: 'Es un espresso corto preparado con igual cantidad de café que un espresso pero con la mitad de tiempo de extraccion.',
      path: 'https://images.deliveryhero.io/image/pedidosya/products/e7bec628-8551-4df2-842a-f8b7d59cd006.jpg?quality=90&width=248'
  
    },
    {
      nombre: " Café Mediano",
      precio: '$140',
      id: 3,
      description: 'Cafe de de tamaño mediano.',
      path: 'https://images.deliveryhero.io/image/pedidosya/products/e7bec628-8551-4df2-842a-f8b7d59cd006.jpg?quality=90&width=248'
  
    },
    {
      nombre: "Americano",
      precio: '$150',
      id: 4,
      description: ' Es un café espresso el cual es extraido con una mayor cantidad de agua.',
      path: 'https://media.istockphoto.com/photos/latte-hot-coffee-in-a-cup-its-a-popular-drink-in-the-world-for-at-picture-id1065068246?k=20&m=1065068246&s=612x612&w=0&h=kXDRiGVmU7z86rDYYIKqam2pn9w6swBNJqmV_7El2FU='
    },
    {
      nombre: "Doble Extracción",
      precio: '$180',
      id: 4,
      description: 'es una extracción doble de espresso que se vierte en una sola taza.',
      path: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/57/50/2f/cappuccino-italiano.jpg'
      
    },
    {
      nombre: "Café Cortado",
      precio: '$160',
      id: 5,
      description: 'es una infusion compuesta por 70% café y 30% leche $160.',
      path: ''
  
    },
    {
      nombre: "Café con leche",
      precio: '$160',
      id: 6,
      description: 'es una infusion compuesta por 50% de café y 50% de leche.',
      path: ''
  
    }
    ,{
      nombre: "Capuccino",
      precio: '$220',
      id: 7,
      description: 'Es una bebida nacida en italia, preparada con café espresso y leche montada con vapor para darle cremosidad. Opcional: con o sin canela.',
      path: ''
  
    },
    {
      nombre: "Mokaccino",
      precio: '$250',
      id: 8,
      description: 'El mokaccino es una variante del café con leche, el cual esta compuesto por un tercio de café espresso, dos tercios de leche vaporizada y chocolate.',
      path: ''
  
    },
    {
      nombre: "Submarino",
      precio: '$200',
      id: 9,
      description: 'Bebida tradicional argentina, en la cual se disuelve en leche caliente una barra de chocolate.',
      path: ''
    },
    {
      nombre: "Café bombón",
      precio: '$200',
      id: 10,
      description: 'Café expresso con leche condensada (al tenes leche condensada ya es dulce).',
      path: ''
    },
    {
      nombre: "Café irlandes",
      precio: '$300',
      id: 11,
      description: 'es un coctel que consiste en la mezcla de whisky, una cucharada de azucar, café y finalmente va cubierto con crema.',
      path: ''
    },
    {
      nombre: "Café XXL.",
      precio: '$250',
      id: 12,
      description: 'Café o cafe con leche, en taza XXL.',
      path: ''
    },{
      nombre: "Frappuccino.",
      precio: '$350',
      id: 13,
      description: 'Perfecta mezcla que combina café, leche, batido con hielo coronado con crema batida. Opciones de sabor: chocolate / oreo / caramel macchiato / frutosrojos.',
      path: ''
    },
    {
      nombre: "Affogato",
      precio: '$250',
      id: 14,
      description: 'Es un postre italiano a base de café, el cual consiste en una bocha de helado coronada con un café espresso caliente. Variedades de helado americanavainilla-pistacho.',
      path: ''
    },
    {
      nombre: "Iced latte",
      precio: '$250',
      id: 15,
      description: 'Es una bebida fria de café compuesta por hielo, café espresso y leche espumada.',
      path: ''
    },
    {
      nombre: "Iced vanilla latte",
      precio: '$250',
      id: 16,
      description: 'Es una bebida fria de café compuesta por hielo, café espresso y leche espumada.',
      path: ''
    },
    {
      nombre: "Iced caramel latte",
      precio: '$250',
      id: 17,
      description: 'Es una bebida fria de café compuesta por hielo, café espresso, leche espumada, y vainilla.',
      path: ''
    },
    {
      nombre: "Expresso tonic",
      precio: '$250',
      id: 18,
      description: 'Se trata de un refresco que se caracteriza por un intenso sabor amargo, el cual se compone de hielo, café espresso, una rodaja de naranja y tonica.',
    }
    
  ]
  
  
  //TODO: Tortas
  export const tortas=[
      {
        nombre: "Porcion de Budín",
        precio: '$400',
        id:0,
        description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
        path:'https://images.aws.nestle.recipes/original/2020_04_15T09_07_32_mrs_ImageRecipes_146844lrg.jpg'
        
      },{
        nombre: "Brownie",
        precio: '$380',
        id:1,
        path: 'http://1.bp.blogspot.com/-l6nKctd0E2c/VdzJfFRBC4I/AAAAAAAABEs/u3t4muBeWCs/s280/images.jpg',
        description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
  
      },{
        nombre: "Bomba Brownie",
        precio: '$380',
        id:2,
        path: 'https://panificadosmana.com.ar/wp-content/uploads/2021/02/TortaSelvaNegra-Mana.jpg',
        description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
      },{
        nombre: "Marquese de chocolate",
        precio: '$480',
        id:3,
        path: 'http://1.bp.blogspot.com/-CRcuIGpBjz0/T7-DZfjb1xI/AAAAAAAAB6M/zY0NJxckUgc/s1600/IMG_1265+editada+blog+CLONADA.jpg',
        description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
        
      },{
        nombre: "Selva Negra",
        precio: '$250',
        id:4,
        path: 'https://t1.uc.ltmcdn.com/images/4/6/6/como_hacer_brownies_caseros_51664_600_square.jpg',
        description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
  
      },{
        nombre: "Frutos Rojos",
        precio: '$350',
        id:5,
        path: 'https://static.wixstatic.com/media/75f8cb_b7a2dac8ab9c47bd9419e37ebb7d0d52~mv2.png/v1/fill/w_520,h_420,al_c/75f8cb_b7a2dac8ab9c47bd9419e37ebb7d0d52~mv2.png'
  ,
        description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
      },
      {
        nombre: "Frutilla con crema",
        precio: '$380',
        id:6,
        path: 'https://jameaperu.com/wp-content/uploads/2020/05/torta-de-maracuya_700x465.jpg',
        description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
  
      },
      {
        nombre: "Limon Cocado",
        precio: '$280',
        id:7,
        path: 'https://cdn6.recetasdeescandalo.com/wp-content/uploads/2017/08/Tarta-de-Oreo-y-queso-fria-sin-horno.jpg',
        description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
  
      },
      {
        nombre: "Cheesecacke Frutos Rojos",
        precio: '$280',
        id:7,
        path: 'https://cdn6.recetasdeescandalo.com/wp-content/uploads/2017/08/Tarta-de-Oreo-y-queso-fria-sin-horno.jpg',
        description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
  
      },
      {
        nombre: "Cheesecacke Maracuya",
        precio: '$280',
        id:7,
        path: 'https://cdn6.recetasdeescandalo.com/wp-content/uploads/2017/08/Tarta-de-Oreo-y-queso-fria-sin-horno.jpg',
        description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
  
      },
      {
        nombre: "Cheesecacke palta y chocolate",
        precio: '$280',
        id:7,
        path: 'https://cdn6.recetasdeescandalo.com/wp-content/uploads/2017/08/Tarta-de-Oreo-y-queso-fria-sin-horno.jpg',
        description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
  
      },
      {
        nombre: "Cheesecacke X 3",
        precio: '$280',
        id:7,
        path: 'https://cdn6.recetasdeescandalo.com/wp-content/uploads/2017/08/Tarta-de-Oreo-y-queso-fria-sin-horno.jpg',
        description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
  
      }
      
  ]
  //TODO: Panaderia
  export const panaderia=[
    {
      nombre: "Medialuna",
      precio: '$60',
      id:0,
      description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
      path:'https://images.aws.nestle.recipes/original/2020_04_15T09_07_32_mrs_ImageRecipes_146844lrg.jpg'
      
    },{
      nombre: "Mediauluna con jamon y queso",
      precio: '$100',
      id:1,
      path: 'http://1.bp.blogspot.com/-l6nKctd0E2c/VdzJfFRBC4I/AAAAAAAABEs/u3t4muBeWCs/s280/images.jpg',
      description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
  
    },{
      nombre: "Tortita",
      precio: '$40',
      id:2,
      path: 'https://panificadosmana.com.ar/wp-content/uploads/2021/02/TortaSelvaNegra-Mana.jpg',
      description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
    },{
      nombre: "Rolls De Canela",
      precio: '$100',
      id:3,
      path: 'http://1.bp.blogspot.com/-CRcuIGpBjz0/T7-DZfjb1xI/AAAAAAAAB6M/zY0NJxckUgc/s1600/IMG_1265+editada+blog+CLONADA.jpg',
      description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
      
    },{
      nombre: "Pan de queso",
      precio: '$150',
      id:4,
      path: 'https://t1.uc.ltmcdn.com/images/4/6/6/como_hacer_brownies_caseros_51664_600_square.jpg',
      description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
  
    },{
      nombre: "Tostadas con mermelada y queso",
      precio: '$220',
      id:5,
      path: 'https://static.wixstatic.com/media/75f8cb_b7a2dac8ab9c47bd9419e37ebb7d0d52~mv2.png/v1/fill/w_520,h_420,al_c/75f8cb_b7a2dac8ab9c47bd9419e37ebb7d0d52~mv2.png'
  ,
      description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
    },
    {
      nombre: "Tostadas con palta y huevo",
      precio: '$450',
      id:6,
      path: 'https://jameaperu.com/wp-content/uploads/2020/05/torta-de-maracuya_700x465.jpg',
      description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
  
    },
    {
      nombre: "Toston individual con palta y huevo",
      precio: '$390',
      id:7,
      path: 'https://cdn6.recetasdeescandalo.com/wp-content/uploads/2017/08/Tarta-de-Oreo-y-queso-fria-sin-horno.jpg',
      description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
  
    },
    {
      nombre: "Toston individual con rucula y jamon crudo",
      precio: '$390',
      id:8,
      path: 'https://cdn6.recetasdeescandalo.com/wp-content/uploads/2017/08/Tarta-de-Oreo-y-queso-fria-sin-horno.jpg',
      description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
  
    }
    
  ]
  //TODO: jugos
  export const jugos=[
    {
      nombre: 'Sobre Nuestros jugos:',
      precio: null,
      id:23,
      description:'Todos Nuestros jugos son naturales y exprimidos en el momento sin ningun tipo de agregado de azucar o edulcorante',
      path:'https://www.tododisca.com/wp-content/uploads/2020/12/Frutas.jpg'
      
    },
    {
      nombre: "Naranja ",
      precio: 'Grande$290',
      precio2: ' Mediano $200',
      id:0,
      description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
      path:'https://images.aws.nestle.recipes/original/2020_04_15T09_07_32_mrs_ImageRecipes_146844lrg.jpg'
      
    },{
      nombre: "Naranja y zanahoria",
      precio: 'Grande $380',
      precio2: ' Mediano $200',
      id:2,
      path: 'https://panificadosmana.com.ar/wp-content/uploads/2021/02/TortaSelvaNegra-Mana.jpg',
      description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
    }
    ,{
      nombre:"Manzana y jengibre",
      precio: 'Grande $250',
      precio2: ' Mediano $200',
      id:4,
      path: 'https://t1.uc.ltmcdn.com/images/4/6/6/como_hacer_brownies_caseros_51664_600_square.jpg',
      description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
    }
    ,{
      nombre:"Manzana y zanahoria",
      precio: 'Grande $250',
      precio2: ' Mediano $200',
      id:4,
      path: 'https://t1.uc.ltmcdn.com/images/4/6/6/como_hacer_brownies_caseros_51664_600_square.jpg',
      description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
  
    },{
      nombre: "Limonada con menta y jengibre",
      precio: 'Grande $350',
      precio2: ' Mediano $200',
      id:5,
      path: 'https://static.wixstatic.com/media/75f8cb_b7a2dac8ab9c47bd9419e37ebb7d0d52~mv2.png/v1/fill/w_520,h_420,al_c/75f8cb_b7a2dac8ab9c47bd9419e37ebb7d0d52~mv2.png'
  ,
      description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
    },
    {
      nombre: "Limonada de frutos rojos",
      precio: 'Grande $380',
      precio2: ' Mediano $200',
      id:6,
      path: 'https://jameaperu.com/wp-content/uploads/2020/05/torta-de-maracuya_700x465.jpg',
      description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
  
    }
    
  ]
  //TODO:smoothies
  export const smoothies = [
    {
      nombre: 'Sobre Nuestros Licuados:',
      precio: null,
      id:23,
      description:'Todos Nuestros Smoothies/licuados son con frutas naturales,sin ningun tipo de agregado de azucar o edulcorante. Pueden ser con agua o leche',
      path:'https://lh3.googleusercontent.com/p/AF1QipPIGcOfX1HEdzXN1qZEeohorPgJeUk-k4yLJnGB=s1600-w400'
      
    },
    {
        nombre: "Anana",
        precio: '$280',
        id:1,
        path: 'https://i0.wp.com/lohecocinadoyo.com/wp-content/uploads/2017/04/5-Recetas-de-Smoothies.jpg?fit=750%2C500&ssl=1',
        description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
  
    },
    {
      nombre: "Arandanos",
      precio: '$280',
      id:2,
      path: 'https://i0.wp.com/lohecocinadoyo.com/wp-content/uploads/2017/04/5-Recetas-de-Smoothies.jpg?fit=750%2C500&ssl=1',
      description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
  
  },
  {
    nombre: "Banana",
    precio: '$280',
    id:3,
    path: 'https://i0.wp.com/lohecocinadoyo.com/wp-content/uploads/2017/04/5-Recetas-de-Smoothies.jpg?fit=750%2C500&ssl=1',
    description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
  
  },{
    nombre: "Durazno",
    precio: '$280',
    id:4,
    path: 'https://i0.wp.com/lohecocinadoyo.com/wp-content/uploads/2017/04/5-Recetas-de-Smoothies.jpg?fit=750%2C500&ssl=1',
    description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
  
  },{
    nombre: "Frutilla",
    precio: '$280',
    id:5,
    path: 'https://i0.wp.com/lohecocinadoyo.com/wp-content/uploads/2017/04/5-Recetas-de-Smoothies.jpg?fit=750%2C500&ssl=1',
    description:'Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche o nata, harina, patata, almendras o frutas.',
  
  
  }
  ]


  