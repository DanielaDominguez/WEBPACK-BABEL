
//import fslightbox from 'fslightbox';

//fsLightboxInstances['first-lightbox'].open(0);
//fsLightboxInstances['second-lightbox'].props.onOpen = () => console.log('Lightbox open!');

//import {suma, saludo} from './operaciones';

import Swal from 'sweetalert2';
require('fslightbox'); 

//document.write(`<h1> ${suma(1,2)}</h1>`);
//document.write(`<h2> ${suma(10,22)}</h2>`);


//console.log(suma(1, 2));
//console.log(suma(10, 22));
//console.log(saludo);

Swal.fire({
    title: 'Dani logrará realizar éste ejercicio con éxito?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
})

 Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
}); 

/* import _ from 'lodash'; 

function component() {
const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
 //  element.innerHTML = _.join(['Hello', 'webpack'], ' '); 

  return element;
}

document.body.appendChild(component()); */

// npm run build