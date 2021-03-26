'use strict'

let listaHistorialOrdenes = [{
    'cliente': 'Neymar Cabezas',
    'mascota': 'Pongo',
    'especie': 'Perro',
    'raza': 'Terrier',
    'servicio': 'Baño, corte según raza'
}, {
    'cliente': 'Eva Lee',
    'mascota': 'Akita',
    'especie': 'Perro',
    'raza': 'Pekinés',
    'servicio': 'Baño, corte según raza'
}, {
    'cliente': 'Andrés Solano',
    'mascota': 'Milly',
    'especie': 'Perro',
    'raza': 'Mastín',
    'servicio': 'Corte según raza'
}, {
    'cliente': 'Cristian Sandoval',
    'mascota': 'Tom',
    'especie': 'Perro',
    'raza': 'Pug',
    'servicio': 'Baño, corte según raza'
}, {
    'cliente': 'Ana Araya',
    'mascota': 'Tiger',
    'especie': 'Perro',
    'raza': 'Poodle',
    'servicio': 'Tinte temporal'
}, {
    'cliente': 'Leonel Rodríguez',
    'mascota': 'Coco',
    'especie': 'Perro',
    'raza': 'Terrier',
    'servicio': 'Baño de fumigación'
}, {
    'cliente': 'Karla Hernández',
    'mascota': 'Chispas',
    'especie': 'Perro',
    'raza': 'Golden Retriever',
    'servicio': 'Corte según raza'
}, {
    'cliente': 'Karla Hernández',
    'mascota': 'Mani',
    'especie': 'Perro',
    'raza': 'Terrier',
    'servicio': 'Baño, corte según raza'
}, {
    'cliente': 'Juan García',
    'mascota': 'Bailey',
    'especie': 'Perro',
    'raza': 'Golden Retriever',
    'servicio': 'Tinte temporal'
}, {
    'cliente': 'Iván Acón',
    'mascota': 'Daisey',
    'especie': 'Perro',
    'raza': 'Poodle',
    'servicio': 'Tinte temporal'
}];

let listaMisServicios = [{
    'nombre': 'Keratina',
    'descripcion': 'Restaura el pelo de tu mascota',
    'costo': '₡ 12000'
}, {
    'nombre': 'Baño de fumigación',
    'descripcion': 'Baño profundo para eliminar toda la suciedad de tu mascota',
    'costo': '₡ 7000'
}, {
    'nombre': 'Corte según raza',
    'descripcion': 'Estiliza tu mascota con nuestro experto en corte',
    'costo': '₡ 6500'
}, {
    'nombre': 'Baño',
    'descripcion': 'Baño y cepillado para consentir a tu mascota',
    'costo': '₡ 5000'
}, {
    'nombre': 'Tinte temporal',
    'descripcion': 'Cambia el look de tu mascota con una explosión de color',
    'costo': '₡ 7000'
}];

let listaOrdenesPendientes = [{
    'cliente': 'Gonzálo Nuñez',
    'mascota': 'Rex',
    'especie': 'Perro',
    'raza': 'Bulldog',
    'servicio': 'Keratina'
}, {
    'cliente': 'Rodrigo Arauz',
    'mascota': 'Charlie',
    'especie': 'Perro',
    'raza': 'Terrier',
    'servicio': 'Baño de fumigación'
}, {
    'cliente': 'Sergio Sánchez',
    'mascota': 'Max',
    'especie': 'Perro',
    'raza': 'Golden Retriever',
    'servicio': 'Corte según raza'
}, {
    'cliente': 'Amy Bosques',
    'mascota': 'Kiara',
    'especie': 'Perro',
    'raza': 'Terrier',
    'servicio': 'Baño, corte según raza'
}, {
    'cliente': 'Andrey Lobo',
    'mascota': 'Ori',
    'especie': 'Perro',
    'raza': 'Poodle',
    'servicio': 'Tinte temporal'
}];

//Lista de razas
let listaRazas = [{
    'nombre': 'Affenpinscher',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Airedale terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Akita',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Alaskan Husky',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Alaskan malamute',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'American Foxhound',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'American pit bull terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'American staffordshire terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Ariegeois',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Artois',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Australian silky terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Australian Terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Austrian Black & Tan Hound',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Azawakh',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Balkan Hound',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Basenji',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Basset',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Bavarian Mountain Scenthound',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Beagle',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Beauceron',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Bedlington Terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Bulldog',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Bichón',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Billy',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Black and Tan Coonhound',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Bloodhound',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Bobtail',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Boerboel',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Border Collie',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Border terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Borzoi',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Bosnian Hound',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Boston terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Boxer',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Boyero',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Braco',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Broholmer',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Buhund Noruego',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Bull terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Bulldog',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Bullmastiff',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Cairn terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Cane Corso',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Caniche (Poodle)',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Caniche Toy (Toy Poodle)',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Cao da Serra',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Cavalier King Charles Spaniel',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Cesky',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Chesapeake Bay Retriever',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Chihuahua',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Chin',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Chow Chow',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Cirneco del Etna',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Clumber Spaniel',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Cocker Spaniel',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Collie',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Cotón de Tuléar',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Curly Coated Retriever',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Dálmata',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Dandie dinmont terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Deerhound',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Dobermann',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Dogo',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Drentse Partridge Dog',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Drever',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Dunker',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Elkhound',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'English Foxhound',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'English Springer Spaniel',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'English Toy Terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Epagneul Picard',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Eurasier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Fila Brasileiro',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Finnish Lapphound',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Flat Coated Retriever',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Fox terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Foxhound Inglés',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Frisian Pointer',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Galgo',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Glen of Imaal Terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Golden Retriever',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Gordon Setter',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Gran Boyero',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Gran Danés',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Gran Gascón Saintongeois',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Gran Griffon Vendeano',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Gran Munsterlander',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Gran Perro Japonés',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Grand Anglo Francais Tricoleur',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Greyhound',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Griffon',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Haldenstoever',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Harrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Hokkaido',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Hovawart',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Husky Siberiano',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Irish terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Irish Wolfhound',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Jack Russell terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Jindo Coreano',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Kai',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Keeshond',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Kerry blue terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'King Charles Spaniel',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Kishu',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Komondor',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Kooiker',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Kromfohrländer',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Kuvasz',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Labrador Retriever',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Laika',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Lakeland terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Maltés',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Manchester terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Mastín',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Norfolk terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Norwich terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Ovejero alemán',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Otterhound',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Retriever de Nueva Escocia',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Rottweiler',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Sabueso',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'San Bernardo',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Schipperke',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Schnauzer',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Scottish terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Shar Pei',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Shih Tzu',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Spaniel',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Staffordshire bull terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Staffordshire terrier americano',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Sussex Spaniel',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Yorkshire Terrier',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'American curl',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Azul ruso',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'American shorthair',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'American wirehair',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Angora turco',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Africano doméstico',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Bengala',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Bobtail japonés',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Bombay',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Boque de Noruega',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'British shorthair',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Burmés',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Cornish rex',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'California Spangled',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Chartreux',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Carex',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Gato Carey',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Deutsch Langhaar',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Devon rex',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Dorado africano',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Don Sphynx',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Dragon Li',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Europeo Común',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Exótico de Pelo Corto',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Gato europeo bicolor',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'German Rex',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Habana brown',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Himalayo',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Korat',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Khao Manee',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Maine Coon',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Manx',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Mau egipcio',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Munchkin',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Ocicat',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Oriental',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Persa Americano o Moderno',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Peterbald',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Pixie Bob',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Gato rojo',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Ragdoll',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Sagrado de Birmania',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Savannah',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Selkirk rex',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Serengeti',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Seychellois',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Siamés',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Siberiano',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Snowshoe',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Sphynx',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Tonkinés',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Van Turco',
    'especie': 'Gato',
    'estado': 'Activo'
}];


//Lista de padecimientos
let listaEnfermedades = [{
    'nombre': 'Coranovorosis canina',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Distemper',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Hepatitis infecciosa canina',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Herpesvirosis Canina',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Influenza canina',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Parvovirosis canina',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Parvovirus',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Rabia',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Traqueobronquitis infecciosa canina',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Brucelosis',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Clostridiosis canina',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Enfermedad de Lyme',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Erliquiosis canina',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Leptospirosis',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Dermatitis alérgica picadura de pulgas',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Granuloma por lamido',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Meningoencefalitis granulomatosa',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Síndrome de cauda equina',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Displasia de cadera (canina)',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Pancreatitis canina',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Torsión gástrica',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Tumor venéreo transmisible',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Ectropión',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Entropión',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Babesia canis',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Demodicosis',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Dermatofitosis',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Dirofilariasis canina',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Escabiosis',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Gusano de la vejiga del perro',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Ixidiosis',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Toxoplasmosis',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Tripanosomiasis',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Síndrome de furia',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Insuficiencia renal',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Leucemia felina',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Panleucopenia felina',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Inmunodeficiencia felina',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Peritonitis infecciosa felina',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Trastornos gastrointestinales',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Otitis',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Conjuntivitis',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Cataratas',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Glaucoma',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Alergias y dermatitis',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Tiña',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Toxocariasis',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Toxoplasmosis',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Asma felina',
    'especie': 'Gato',
    'estado': 'Activo'
}];

//Lista de vacunas
let listaVacunas = [{
    'nombre': 'Parvovirus',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Leptospirosis',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Rabia',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Hepatitis infecciosa',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Moquillo canino',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Traquiobronquitis',
    'especie': 'Perro',
    'estado': 'Activo'
}, {
    'nombre': 'Leucemia felina (leucosis)',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Moquillo (panleucopenia)',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Gripe felina',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Peritonitis infecciosa felina',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Rabia',
    'especie': 'Gato',
    'estado': 'Activo'
}, {
    'nombre': 'Trivalente felina',
    'especie': 'Gato',
    'estado': 'Activo'
}];


// Lista de usuarios para probar inicio de sesión
let listaUsuarios = [
    {
        'correo': 'admin@mundomascota.com',
        'nombre': 'Raúl Pérez',
        'nacimiento': '09-20-1973',
        'sexo': 'Masculino',
        'contrasenna': 'Qwerty457!',
        'tipo': 'Administrador'
    }, {
        'correo': 'admin@admin.com',
        'nombre': 'Raúl Pérez',
        'nacimiento': '09-20-1973',
        'sexo': 'Masculino',
        'contrasenna': '123',
        'tipo': 'Administrador'
    }, {
        'correo': 'cliente@cliente.com',
        'nombre': 'Amanda Víquez',
        'nacimiento': '03-11-1991',
        'sexo': 'Femenino',
        'contrasenna': '123',
        'tipo': 'Cliente'
    },
    {
        'correo': 'proveedor@proveedor.com',
        'nombre': 'Pablo Monestel',
        'nacimiento': '10-12-1987',
        'sexo': 'Masculino',
        'contrasenna': '123',
        'tipo': 'Proveedor'
    },
    {
        'correo': 'jose@gmail.com',
        'nombre': 'José Ramírez',
        'nacimiento': '03-11-1990',
        'sexo': 'Masculino',
        'contrasenna': 'Qwerty457!',
        'tipo': 'Cliente'
    },
    {
        'correo': 'carmensolano@gmail.com',
        'nombre': 'Carmen Solano',
        'nacimiento': '08-01-1990',
        'sexo': 'Femenino',
        'contrasenna': 'Carmen01!',
        'tipo': 'Cliente'
    },
    {
        'correo': 'miguel@gmail.com',
        'nombre': 'Miguel Gomez',
        'nacimiento': '09-10-1980',
        'sexo': 'Masculino',
        'contrasenna': 'Qwerty457!',
        'tipo': 'Cliente'
    },
    {
        'correo': 'carolina746@gmail.com',
        'nombre': 'Carolina Diaz',
        'nacimiento': '08-02-1987',
        'sexo': 'Femenino',
        'contrasenna': 'Qwerty457!',
        'tipo': 'Cliente'
    },
    {
        'correo': 'danielacarbacr@gmail.com',
        'nombre': 'Daniela Carvajal',
        'nacimiento': '09-09-1999',
        'sexo': 'Femenino',
        'contrasenna': 'Qwerty457!',
        'tipo': 'Cliente'
    },
    {
        'correo': 'pablito76@gmail.com',
        'nombre': 'Pablo Pinzón',
        'nacimiento': '02-03-2000',
        'sexo': 'Masculino',
        'contrasenna': 'Qwerty457!',
        'tipo': 'Cliente'
    },
    {
        'correo': 'camiloellindo@gmail.com',
        'nombre': 'Camilo Bravo',
        'nacimiento': '12-12-1963',
        'sexo': 'Masculino',
        'contrasenna': 'Qwerty457!',
        'tipo': 'Cliente'
    },
    {
        'correo': 'laurita9cr@gmail.com',
        'nombre': 'Laura Moreno',
        'nacimiento': '11-12-1970',
        'sexo': 'Femenino',
        'contrasenna': 'Qwerty457!',
        'tipo': 'Cliente'
    },
    {
        'correo': 'marcejandra@gmail.com',
        'nombre': 'Marcela Galeano',
        'nacimiento': '01-01-1999',
        'sexo': 'Femenino',
        'contrasenna': 'Qwerty457!',
        'tipo': 'Cliente'
    },
    {
        'correo': 'sandraximena@gmail.com',
        'nombre': 'Sandra Parra',
        'nacimiento': '12-05-1976',
        'sexo': 'Femenino',
        'contrasenna': 'Qwerty457!',
        'tipo': 'Cliente'
    },
    {
        'correo': 'stephespacr@gmail.com',
        'nombre': 'Stephanie Brenes',
        'nacimiento': '03-11-1993',
        'sexo': 'Femenino',
        'contrasenna': 'Qwerty457!',
        'tipo': 'Proveedor'
    },
    {
        'correo': 'Sebastiancasas@gmail.com',
        'nombre': 'Sebastian Casas',
        'nacimiento': '02-08-1985',
        'sexo': 'Masculino',
        'contrasenna': 'Qwerty457!',
        'tipo': 'Proveedor'
    },
    {
        'correo': 'Ricardovegueta@gmail.com',
        'nombre': 'Ricardo Acuña',
        'nacimiento': '02-06-1996',
        'sexo': 'Masculino',
        'contrasenna': 'Qwerty457!',
        'tipo': 'Proveedor'
    },
    {
        'correo': 'mariafercr2@gmail.com',
        'nombre': 'María Fernandez',
        'nacimiento': '08-01-1990',
        'sexo': 'Femenino',
        'contrasenna': 'Qwerty457!',
        'tipo': 'Proveedor'
    },
    {
        'correo': 'miguelLeecr@gmail.com',
        'nombre': 'Miguel Lee',
        'nacimiento': '06-02-1960',
        'sexo': 'Masculino',
        'contrasenna': 'Qwerty457!',
        'tipo': 'Proveedor'
    },
    {
        'correo': 'sandrapusk@gmail.com',
        'nombre': 'Sandra Ochoa',
        'nacimiento': '11-11-1950',
        'sexo': 'Femenino',
        'contrasenna': 'Qwerty457!',
        'tipo': 'Proveedor'
    },
    {
        'correo': 'paseospaco@gmail.com',
        'nombre': 'Pablo Larios',
        'nacimiento': '08-08-1998',
        'sexo': 'Masculino',
        'contrasenna': 'Qwerty457!',
        'tipo': 'Proveedor'
    },
    {
        'correo': 'perritosfelicezcr@gmail.com',
        'nombre': 'Paola Páez',
        'nacimiento': '12-10-1991',
        'sexo': 'Femenino',
        'contrasenna': 'Qwerty457!',
        'tipo': 'Proveedor'
    },
    {
        'correo': 'marioperritos@gmail.com',
        'nombre': 'Mario Luna',
        'nacimiento': '09-02-1982',
        'sexo': 'Masculino',
        'contrasenna': 'Qwerty457!',
        'tipo': 'Proveedor'
    },
    {
        'correo': 'olgavivicr@gmail.com',
        'nombre': 'Olga Rojas',
        'nacimiento': '07-05-1995',
        'sexo': 'Femenino',
        'contrasenna': 'Qwerty457!',
        'tipo': 'Proveedor'
    }

];
let listaUsuariosProveedores = [{
    'correo': 'proveedor@proveedor.com',
    'nombre': 'Pablo Monestel',
    'nacimiento': '10-12-1987',
    'sexo': 'Masculino',
    'contrasenna': '123',
    'nombreNegocio': "Grooming Pablo",
    'tipo': 'Proveedor'
}, {
    "correo": "alejandroproveedor@gmail.com",
    "nombre": "Alejandro Ortiz",
    "nacimiento": "29-01-1998",
    'sexo': 'Masculino',
    'contrasenna': 'abcd1254',
    'nombreNegocio': "Receta Alejo",
    'tipo': 'Proveedor'
}, {
    "correo": "josemendez@gmail.com",
    "nombre": "Jose Mendez",
    "nacimiento": "24-05-1995",
    'sexo': 'Masculino',
    'contrasenna': 'qwert124',
    'nombreNegocio': "Paseo Chepe",
    'tipo': 'Proveedor'
}, {
    "correo": "miguelperez@puppyworld.com",
    "nombre": "Miguel Perez",
    "nacimiento": "15-07-2000",
    'sexo': 'Masculino',
    'contrasenna': 'proveedor445',
    'nombreNegocio': "Paseos Migue",
    'tipo': 'Proveedor'
}, {
    "correo": "Sammy12@outlook.com",
    "nombre": "Samantha Hernandez",
    "nacimiento": "21-04-1997",
    'sexo': 'Femenino',
    'contrasenna': 'sammy123',
    'nombreNegocio': "YummyPet",
    'tipo': 'Proveedor'
}, {
    "correo": "douglas78@hotmail.com",
    "nombre": "Jhonny Jimenez",
    "nacimiento": "01-07-1997",
    'sexo': 'Masculino',
    'contrasenna': 'rodri415',
    'nombreNegocio': "DeliPet",
    'tipo': 'Proveedor'
}, {
    "correo": "Glori@yahoo.com",
    "nombre": "Gloriana Morales",
    "nacimiento": "24-12-1992",
    'sexo': 'Femenino',
    'contrasenna': 'glorigirl48',
    'nombreNegocio': "Cuidos Glori",
    'tipo': 'Proveedor'
}, {
    "correo": "steph45@proveedor.com",
    "nombre": "Stephan Ruiz",
    "nacimiento": "22-05-1992",
    'sexo': 'Masculino',
    'contrasenna': 'Steph48',
    'nombreNegocio': "Peluqueria Canina Steph",
    'tipo': 'Proveedor'
}];

let listaUsuariosRechazados = [{
    'correo': 'julyy@proveedor.com',
    'nombre': 'Julio Iglesias',
    'nacimiento': '10-12-1987',
    'sexo': 'Masculino',
    'contrasenna': '123',
    'tipo': 'Proveedor',
    "razon": "Falta de informacion"
}, {
    'correo': 'enrique@gmail.com',
    'nombre': 'Enrique Garcia',
    'nacimiento': '11-12-1977',
    'sexo': 'Masculino',
    'contrasenna': '12q3',
    'tipo': 'Proveedor',
    "razon": "Falta de informacion"
}, {
    'correo': "julain@hotmail.com",
    'nombre': 'Byron Rodriguez',
    'nacimiento': '10-02-1998',
    'sexo': 'Masculino',
    'contrasenna': 'qwert3',
    'tipo': 'Proveedor',
    "razon": "Falta de informacion"
}, {
    'correo': 'bernies@projectx.com',
    'nombre': 'Bernie Ortiz',
    'nacimiento': '29-07-2001',
    'sexo': 'Masculino',
    'contrasenna': '112',
    'tipo': 'Proveedor',
    "razon": "Falta de informacion"
}, {
    'correo': 'Julissa2@proveedor.com',
    'nombre': 'Julissa Fonseca',
    'nacimiento': '08-08-1999',
    'sexo': 'Femenino',
    'contrasenna': '123233',
    'tipo': 'Proveedor',
    "razon": "Falta de informacion"
}, {
    'correo': 'richard@gmail.com',
    'nombre': 'Ricardo Gutierrez',
    'nacimiento': '11-12-2002',
    'sexo': 'Masculino',
    'contrasenna': 'qwert12',
    'tipo': 'Proveedor',
    "razon": "Falta de informacion"
}, {
    'correo': 'henry@decktech.com',
    'nombre': 'Henry Bejarano',
    'nacimiento': '10-03-1995',
    'sexo': 'Masculino',
    'contrasenna': 'raplife1010',
    'tipo': 'Proveedor',
    "razon": "Falta de informacion"
}, {
    'correo': 'guti12@yahoo.com',
    'nombre': 'Julian Gutierrez',
    'nacimiento': '14-02-1999',
    'sexo': 'Masculino',
    'contrasenna': 'gutiking101',
    'tipo': 'Proveedor',
    "razon": "Falta de informacion"
}, {
    'correo': 'josuecc@yahoo.com',
    'nombre': 'Josue Cascante',
    'nacimiento': '22-04-1989',
    'sexo': 'Masculino',
    'contrasenna': 'jouseccc',
    'tipo': 'Proveedor',
    "razon": "Falta de informacion"
}, {
    'correo': 'ronny12@proveedor.com',
    'nombre': 'Ronny Altamirano',
    'nacimiento': '10-12-1990',
    'sexo': 'Masculino',
    'contrasenna': 'ronnyxw',
    'tipo': 'Proveedor',
    "razon": "Falta de informacion"
}, ];

let listaUsuariostotales = [{
        'correo': 'cliente@cliente.com',
        'nombre': 'Amanda Víquez',
        'nacimiento': '03-11-1991',
        'sexo': 'Femenino',
        'contrasenna': '123',
        'tipo': 'Cliente'
    },
    {
        'correo': 'proveedor@proveedor.com',
        'nombre': 'Pablo Monestel',
        'nacimiento': '10-12-1987',
        'sexo': 'Masculino',
        'contrasenna': '123',
        'tipo': 'Proveedor'
    },
    {
        'correo': 'jose@gmail.com',
        'nombre': 'José Ramírez',
        'nacimiento': '03-11-1990',
        'sexo': 'Masculino',
        'contrasenna': '123Abc!',
        'tipo': 'Cliente'
    }, {
        'correo': 'proveedor@proveedor.com',
        'nombre': 'Pablo Monestel',
        'nacimiento': '10-12-1987',
        'sexo': 'Masculino',
        'contrasenna': '123',
        'tipo': 'Proveedor'
    }, {
        "correo": "alejandroproveedor@gmail.com",
        "nombre": "Alejandro Ortiz",
        "nacimiento": "29-01-1998",
        'sexo': 'Masculino',
        'contrasenna': 'abcd1254',
        'tipo': 'Proveedor'
    }, {
        "correo": "josemendez@gmail.com",
        "nombre": "Jose Mendez",
        "nacimiento": "24-05-1995",
        'sexo': 'Masculino',
        'contrasenna': 'qwert124',
        'tipo': 'Proveedor'
    }, {
        "correo": "miguelperez@puppyworld.com",
        "nombre": "Miguel Perez",
        "nacimiento": "15-07-2000",
        'sexo': 'Masculino',
        'contrasenna': 'proveedor445',
        'tipo': 'Proveedor'
    }, {
        "correo": "Sammy12@outlook.com",
        "nombre": "Samantha Hernandez",
        "nacimiento": "21-04-1997",
        'sexo': 'Femenino',
        'contrasenna': 'sammy123',
        'tipo': 'Proveedor'
    }, {
        "correo": "douglas78@hotmail.com",
        "nombre": "Jhonny Jimenez",
        "nacimiento": "01-07-1997",
        'sexo': 'Masculino',
        'contrasenna': 'rodri415',
        'tipo': 'Proveedor'
    }, {
        "correo": "Glori@yahoo.com",
        "nombre": "Gloriana Morales",
        "nacimiento": "24-12-1992",
        'sexo': 'Femenino',
        'contrasenna': 'glorigirl48',
        'tipo': 'Proveedor'
    }, {
        "correo": "steph45@proveedor.com",
        "nombre": "Stephan Ruiz",
        "nacimiento": "22-05-1992",
        'sexo': 'Masculino',
        'contrasenna': 'Steph48',
        'tipo': 'Proveedor'
    }, {
        'correo': 'gonza@gmail.com',
        'nombre': 'Gonzalo Nunez',
        'nacimiento': '03-11-1991',
        'sexo': 'Masculino',
        'contrasenna': 'ASDF12',
        'tipo': 'Cliente'
    }, {
        'correo': 'Rodri@outlook.com',
        'nombre': 'Rodrigo Arauz',
        'nacimiento': '04-11-1999',
        'sexo': 'Masculino',
        'contrasenna': 'xd249',
        'tipo': 'Cliente'
    }, {
        'correo': 'Busqets@gmail.com',
        'nombre': 'Sergio Sanchez',
        'nacimiento': '03-11-1998',
        'sexo': 'Masculino',
        'contrasenna': '1793qwert',
        'tipo': 'Cliente'
    }, {
        'correo': 'Amy@yahoo.com',
        'nombre': 'Amy Bosques',
        'nacimiento': '03-11-1991',
        'sexo': 'Femenino',
        'contrasenna': '123',
        'tipo': 'Cliente'
    }, {
        'correo': 'anderya@yahoo.com',
        'nombre': 'Andrey Lobo',
        'nacimiento': '04-11-2001',
        'sexo': 'Masculino',
        'contrasenna': 'pid78',
        'tipo': 'Cliente'
    }, {
        'correo': 'Nathaly@yahoo.com',
        'nombre': 'Nathalia Oconitrillo',
        'nacimiento': '04-01-1998',
        'sexo': 'Femenino',
        'contrasenna': 'ghost1111',
        'tipo': 'Cliente'
    },
];
let listaUsuariosPendientes = [{
    'correo': 'Christian@servipet.com',
    'nombre': 'Christian Víquez',
    'nacimiento': '03-11-1999',
    'nombreNegocio': 'Servipet',
    "estado": "Pendiente",

}, {
    'correo': 'Julio@yahoo.com',
    'nombre': 'Julio Nunez',
    'nacimiento': '03-12-2001',
    'nombreNegocio': 'Paseos Paco',
    "estado": "Pendiente",
}, {
    'correo': 'nyrontt@yahoo.com',
    'nombre': 'Nyron Salas',
    'nacimiento': '11-02-1998',
    'nombreNegocio': 'Servicios Kakaroto',
    "estado": "Pendiente",
}, {
    'correo': 'jimena@gmail.com',
    'nombre': 'Jimena Arauz',
    'nacimiento': '12-08-2000',
    'nombreNegocio': 'Jime Mascotas',
    "estado": "Pendiente",
}, {
    'correo': 'andresc@yahoo.com',
    'nombre': 'Andrés Ortiz',
    'nacimiento': '29-01-1997',
    'nombreNegocio': 'Cuidado de perros Andrés',
    "estado": "Pendiente",
}, {
    'correo': 'jeremn@aol.com',
    'nombre': 'Jeremy Sancho',
    'nacimiento': '05-12-2001',
    'nombreNegocio': 'Queques para perro Pancho',
    "estado": "Pendiente",
}, {
    'correo': 'fabrizzio@upet.com',
    'nombre': 'Fabrizzio Vargas',
    'nacimiento': '03-08-1994',
    'nombreNegocio': 'Veterinaria el Barrio',
    "estado": "Pendiente",
}, {
    'correo': 'Jeferg@aol.com',
    'nombre': 'Jefferson Victor',
    'nacimiento': '22-04-1994',
    'nombreNegocio': 'Paseos Juanca',
    "estado": "Pendiente",
}, {
    'correo': 'Henry12@yahoo.com',
    'nombre': 'Henry Bejarano',
    'nacimiento': '07-07-1990',
    'nombreNegocio': 'Veterianaria Express el Pitufo',
    "estado": "Pendiente",
}, {
    'correo': 'andre333@gmail.com',
    'nombre': 'Andrea Blanco',
    'nacimiento': '12-05-1985',
    'nombreNegocio': 'Cuidado de mascotas Andrea',
    "estado": "Pendiente",
}, ];

let listaUsuariosBaneados = [{
    'correo': 'Gonzarey@gmail.com',
    'nombre': 'Gonzalo Granados',
    'nacimiento': '03-11-1989',
    'sexo': 'Masculino',
    "estado": "Baneado",
    "tipo": "Cliente",
    "Razon": "Acoso",
}, {
    'correo': 'celest23@gmail.com',
    'nombre': 'Celeste Ulloa',
    'nacimiento': '04-05-1998',
    'sexo': 'Femenino',
    "estado": "Baneado",
    "tipo": "Proveedor",
    "Razon": "Acoso",
}, {
    'correo': 'amardor4@gmail.com',
    'nombre': 'Andrey Amador',
    'nacimiento': '14-01-1979',
    'sexo': 'Masculino',
    "estado": "Baneado",
    "tipo": "Proveedor",
    "Razon": "Incumplimiento",
}, {
    'correo': 'andecr1992@hotmail.com',
    'nombre': 'Andrey Cardenas',
    'nacimiento': '07-02-1992',
    'sexo': 'Masculino',
    "estado": "Baneado",
    "tipo": "Proveedor",
    "Razon": "Amenaza",
}, {
    'correo': 'gacavi@yahoo.com',
    'nombre': 'Gabriel Camanno',
    'nacimiento': '03-11-1989',
    'sexo': 'Masculino',
    "estado": "Baneado",
    "tipo": "Cliente",
    "Razon": "Discriminación",
}, {
    'correo': 'Kevins@gmail.com',
    'nombre': 'Kevin Siles',
    'nacimiento': '16-06-1996',
    'sexo': 'Masculino',
    "estado": "Baneado",
    "tipo": "Proveedor",
    "Razon": "Violencia",
}, {
    'correo': 'camii25@gmail.com',
    'nombre': 'Camila Rojas',
    'nacimiento': '24-12-1999',
    'sexo': 'Femenino',
    "estado": "Baneado",
    "tipo": "Cliente",
    "Razon": "Incumplimiento",
}, {
    'correo': 'Abigama2@gmail.com',
    'nombre': 'Abigail Gamboa',
    'nacimiento': '12-08-1999',
    'sexo': 'Femenino',
    "estado": "Baneado",
    "tipo": "Proveedor",
    "Razon": "Incitación al odio",
}, {
    'correo': 'Ivanmd@gmail.com',
    'nombre': 'Ivan Granados',
    'nacimiento': '04-07-1993',
    'sexo': 'Masculino',
    "estado": "Baneado",
    "tipo": "Proveedor",
    "Razon": "Acoso",
}, {
    'correo': 'Manuel12@gmail.com',
    'nombre': 'Manuel Portillo',
    'nacimiento': '07-12-1980',
    'sexo': 'Masculino',
    "estado": "Baneado",
    "tipo": "Cliente",
    "Razon": "Discriminación",
}, {
    'correo': 'juansho2@gmail.com',
    'nombre': 'Juan Fernandez',
    'nacimiento': '22-05-1990',
    'sexo': 'Masculino',
    "estado": "Baneado",
    "tipo": "Proveedor",
    "Razon": "Incumplimiento",
}, ];

let listaActividadUsuarios = [{
    "Cliente": 'José Ramírez',
    'Servicio': 'Paseo Mascota',
    'Fecha': '22-03-2021',
    'Proveedor': 'Alejandro Ortiz',
}, {
    "Cliente": 'Gonzalo Nunez',
    'Servicio': 'Grooming',
    'Fecha': '22-03-2021',
    'Proveedor': 'Miguel Perez',
}, {
    "Cliente": 'Nathalia Oconitrillo',
    'Servicio': 'Paseo Mascota',
    'Fecha': '22-03-2021',
    'Proveedor': 'Alejandro Ortiz',
}, {
    "Cliente": 'Amy Bosques',
    'Servicio': 'Grooming',
    'Fecha': '22-03-2021',
    'Proveedor': 'Jose Mendez',
}, {
    "Cliente": 'Andrey Lobo',
    'Servicio': 'Paseo Mascota',
    'Fecha': '22-03-2021',
    'Proveedor': 'Jhonny Jimenez',
}, {
    "Cliente": 'Samantha Hernandez',
    'Servicio': 'Grooming',
    'Fecha': '22-03-2021',
    'Proveedor': 'Jhonny Jimenez',
}, {
    "Cliente": 'Gonzalo Nunez',
    'Servicio': 'Paseo Mascota',
    'Fecha': '21-03-2021',
    'Proveedor': 'Alejandro Ortiz',
}, {
    "Cliente": 'Rodrigo Arauz',
    'Servicio': 'Paseo Mascota',
    'Fecha': '21-03-2021',
    'Proveedor': 'Stephan Ruiz',
}, {
    "Cliente": 'Gloriana Morales',
    'Servicio': 'Paseo Mascota',
    'Fecha': '21-03-2021',
    'Proveedor': 'Arion Corella',
}, {
    "Cliente": 'José Ramírez',
    'Servicio': 'Paseo Mascota',
    'Fecha': '21-03-2021',
    'Proveedor': 'Lewis Vargas',
}, {
    "Cliente": 'Sergio Sanchez',
    'Servicio': 'Paseo Mascota',
    'Fecha': '21-03-2021',
    'Proveedor': 'Michael Ortiz',

}, ];
let listaPatrocinadores = [{
    "nombre": 'Taste of the Wild',
    'frase': "Taste of the Wild, tu mascota anhela el sabor de la naturaleza",
    'fotografia': 'patrocinador1.jpg',
}, {
    "nombre": 'Royal Canin',
    'frase': "Royal Canin, la salud es única para cada mascota",
    'fotografia': 'patrocinador2.jpg',
}, {
    "nombre": 'La Vete Veterinaria y Petshop',
    'frase': "La Vete Veterinaria y Petshop, su veterinaria de confianza",
    'fotografia': 'patrocinador3.jpg',
}, {
    "nombre": 'MediPet Veterinaria',
    'frase': "MediPet Veterinaria, su mascota merece la mejor atención",
    'fotografia': 'patrocinador4.jpg',
}, {
    "nombre": 'Alimentos Hills',
    'frase': "Alimentos Hills, alimentación balanceada para ese miembro especial de la familia",
    'fotografia': 'patrocinador5.jpg',

}, {
    "nombre": 'Purina Pro Plan',
    'frase': "Purina Pro Plan, simplemente el mejor alimento para su mascota",
    'fotografia': 'patrocinador6.jpg',
}, {
    "nombre": 'BestForPets',
    'frase': "BestForPets, somos su veterinaria preferida",
    'fotografia': 'patrocinador7.jpg',
}, {
    "nombre": 'Cinepolis',
    'frase': "¿Hace cuánto que no vas al cine? Cinepolis te espera",
    'fotografia': 'patrocinador8.jpg',
}, ];

let listaMisOrdenes = [{
    "mascota": 'Pelusa',
    'proveedor': "Clínica Veterinaria Dra. Andrea Guillén A.",
    'servicio': 'Castración',
    "costo": '20000 colones',
    'estado': 'Pendiente aprobación',
}, {
    "mascota": 'Princesa',
    'proveedor': "Pao Grooming",
    'servicio': 'Baño y corte según raza',
    "costo": '6500 colones',
    'estado': 'Pendiente pago',
}, {
    "mascota": 'Princesa',
    'proveedor': "Pao Grooming",
    'servicio': 'Baño y corte según raza',
    "costo": '6500 colones',
    'estado': 'Pagado',
}, {
    "mascota": 'Princesa',
    'proveedor': "Pao Grooming",
    'servicio': 'Baño y corte según raza',
    "costo": '6500 colones',
    'estado': 'Pagado',
}, {
    "mascota": 'Princesa',
    'proveedor': "Peluqueria Canina Codymax",
    'servicio': 'Baño y corte',
    "costo": '10000 colones',
    'estado': 'Pagado',
}, ];

let listaServiciosPaco = [{
    'nombre': 'Paseo de mascotas',
    'descripcion': 'El ejercicio es esencial para tu mascota. Duración= 1 hora',
    'costo': '₡ 4000'
}, {
    'nombre': 'Visita y cuidado de mascotas',
    'descripcion': 'Asegurate que tu mascota este bien en todo momento. Costo por visita',
    'costo': '₡ 15000'
}];

let listaServiciosLaura = [{
    'nombre': 'Sesión mascota',
    'descripcion': 'Sesión fotográfica solo de mascota. Duración = 1hora',
    'costo': '₡ 20000'
}, {
    'nombre': 'Sesión mascota/dueño',
    'descripcion': 'Sesión fotográfica mascota y dueño. Duración = 1hora',
    'costo': '₡ 30000'
}, {
    'nombre': 'Sesión video mascota/dueño',
    'descripcion': 'Sesión videografía mascota y dueño. Duración = 1hora',
    'costo': '₡ 35000'
}];

let listaServiciosPao = [{
    'nombre': 'Baño y corte según raza',
    'descripcion': 'Tu mascota estará lista para la alfombra roja con un excelente baño y corte',
    'costo': '₡ 6500'
}];

let listaServiciosPitufo = [{
    'nombre': 'Emergencias',
    'descripcion': 'Atención de emergencias (no incluye medicamentos ni hospitalización',
    'costo': '₡ 35000'
}, {
    'nombre': 'Castración',
    'descripcion': 'Procedimiento castración. No incluye medicamentos postoperatorios',
    'costo': '₡ 18000'
}, {
    'nombre': 'Consulta veterinaria',
    'descripcion': 'Atención de enfermedades crónicas',
    'costo': '₡ 20000'
}];

let listaServiciosAndrea = [{
    'nombre': 'Castración',
    'descripcion': 'Procedimiento castración. ',
    'costo': '₡ 13000'
}, {
    'nombre': 'Consulta veterinaria',
    'descripcion': 'Consulta rutinaria y vacunación (costo vacuna no incluida)',
    'costo': '₡ 10000'
}];


//Lista de usuarios para llenar reportados:

let listaUsuariosReportados = [{
        'Imagen': '<img src="images/reportado1.jpg" class="imagen-reportado">',
        'Usuario': 'Miguel Perez Botero',
        'Razon': 'Acoso',
        'Descripcion': 'No deja de llamarme'

    }, {
        'Imagen': '<img src="images/reportado2.jpg" class="imagen-reportado">',
        'Usuario': 'Samantha Hernandez Ruiz',
        'Razon': 'Violencia',
        'Descripcion': 'Llevó a pasear a mi perrito y le pegó'
    }, {
        'Imagen': '<img src="images/reportado2.jpg" class="imagen-reportado">',
        'Usuario': 'Miguel Santos Polanco',
        'Razon': 'Discriminación',
        'Descripcion': 'Me trató de forma ofensiva por ser afroamericano'
    }, {
        'Imagen': '<img src="images/reportado2.jpg" class="imagen-reportado">',
        'Usuario': 'Luis Daniel Vargas ',
        'Razon': 'Lenguaje',
        'Descripcion': 'Persona sumamente malhablada, trata a mis perritos de hijos de tal'
    }, {
        'Imagen': '<img src="images/reportado2.jpg" class="imagen-reportado">',
        'Usuario': 'Carlos Alpizar Justo',
        'Razon': 'Incumplimiento',
        'Descripcion': 'No cumplió con los tratamientos que pagamos'
    }, {
        'Imagen': '<img src="images/reportado2.jpg" class="imagen-reportado">',
        'Usuario': 'Catherine Pintor Frias',
        'Razon': 'Violencia',
        'Descripcion': 'Mi perrito tiene un morete como si lo hubieran pateado'
    }, {
        'Imagen': '<img src="images/reportado2.jpg" class="imagen-reportado">',
        'Usuario': 'Daniela Guzmán',
        'Razon': 'Incumplimiento',
        'Descripcion': 'Me quedó mal con el servicio y no avisó, mi gatito se quedó sin comida 2 días'
    },
]




//Codigo para validar la información de usuario y contraseña

const iniciarSesion = (correo, contrasenna) => {
    let credencialesCorrectas = false;
    listaUsuarios.forEach(usuario => {
        if (usuario.correo == correo) {
            if (usuario.contrasenna == contrasenna) {
                credencialesCorrectas = true;
                sessionStorage.setItem('usuarioConectado', JSON.stringify(usuario));
            }
        }
    });

    if (credencialesCorrectas == true) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
                icon: 'success',
                title: 'Iniciando sesión'
            })
            //Codigo para redireccionar según el tipo de usuario correspondiente
            .then(() => {
                let usuario;
                sessionStorage.getItem('usuarioConectado')
                usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
                switch (usuario.tipo) {
                    case 'Administrador':
                        window.location.href = 'P49-principal-administrador.html';
                        break;
                    case 'Cliente':
                        window.location.href = 'P09-principal-cliente.html';
                        break;
                    case 'Proveedor':
                        window.location.href = 'P19-principal-proveedor.html';
                        break;
                }
            });
    } else {
        inputCorreo.classList.add('error');
        inputContrasenna.classList.add('error');
        Swal.fire({
            imageUrl: "images/error2.jpg",
            title: "¡OOPS! Algo pasó aqui",
            text: "Usuario o contraseña incorrectos",
            confirmButtonText: "Intentar de nuevo"
        });
    }
};