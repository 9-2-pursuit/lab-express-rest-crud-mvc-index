// Los controladores se encargan de ORQUESTAR el flujo de información de nuestras rutas
// 1-. Reciben la peticion
// 2-. Procesan la peticion
// 3-. Si es necesario, buscan / obtienen data de algun modelo requerido
// 4-. Devuelven una respuesta / Renderizan una vista (esto ultimo no ocurre en este ejercicio)
const router = require("express").Router();
const locationsData = require("../models/location.model");
const personsModel = require("../models/person.model");
//////////////////////////////////////////////////////////

// console.log(locationsData);

// const peopleFind = locationsData.map((location) => {
//   const zipFromLocation = location.zip
//   // const personFiltered = personsModel.filter((person) => {
//   //   const zipFromPerson = person.mainLocation
//   //     zipFromLocation === zipFromPerson;
//   //   return personFiltered ;
//   // })
//   return zipFromLocation;
// });

// console.log(peopleFind);

// const peopleFind = locationsData.map((location) => {
//   const personFiltered = personsModel.filter((person) => {
//       return person.mainLocation === location.zip;
//   })
//   // location.people = personFiltered;
//  console.log(personFiltered);
// });

// // console.log(peopleFind);

// 1-. Locations => Un array de locaciones
// 2-. Persons => Un arry de personas

/*
  3-. Transformar (mapear) cada una de las locaciones a el siguiente formato:

  [
    {
      ...location,
      people: [
        ...
      ]
    },
    {
      ...location,
      people: [
        ...
      ]
    },
    {
      ...location,
      people: [
        ...
      ]
    },
  ]
*/


// console.log(peopleFind);
// GET "/:id" ==> /locations/:id
// POST "/persons" ==> /locations/persons
// PUT "/"
// DELET "/"
// OPTIONS "/"

// GET obtener el listado de locaciones
router.get("/", (req, res) => {
  // res.send("Hola desde locations");
  res.json(locationsData);
});

// GET /locations/people Ira esto de primero?
router.get("/people", (req, res) => {
  // REST OPERATOR
  // const locations = ["NY", "BROOKLYN"]
  // arrays => Se trae todos los elementos del array previo ==> [...locations, 'Mi nueva locacion'] ==> ["NY", "BROOKLYN", "Mi nueva locacion"]
 
 
 
  /* const location =   {
      street: "45 Davis Street",
      city: "Long Island City",
      state: "NY",
      zip: "11101",
    },
  */
  // objetos ==> { street: location.street, city: location.city, state: location.state, zip: location.zip, people: personFiltered}
  // {...location, people: personFiltered}

  /**
   * 
   * {
      street: "45 Davis Street",
      city: "Long Island City",
      state: "NY",
      zip: "11101",
      people: [
        {...},
        {...}
      ]
    },
   */

  const peopleFind = locationsData.map((location) => {

    /**
     *    state: "NY",
          zip: "11011", == 11011
     */
    // FILTER ==> Debe retornar un BOOLEANO basado en una condicion a evaluar
    const personFiltered = personsModel.filter((person) => (person.mainLocation === location.zip)); 
    return {
      ...location,
      people: personFiltered 
    }
  });

  res.json(peopleFind);
});

// // POST crear una locacion
// router.post();

// // PUT actualizar la informacion de una locacion
// router.put();

// // DELETE eliminar una locacion
// router.delete();

module.exports = router;
