import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js'
import { Tareas } from './models/tareas.js';
const colors = import('colors');
// require ('colors');



const main  = async() => {    
    
    let opt = '';
    const tareas = new Tareas();

    do {

        opt = await inquirerMenu();
        switch (opt) {
            case '1':   
                const desc = await leerInput('Descripcion: ');
                // tareas.crearTarea(desc); 
                // console.log(desc);
                tareas.crearTarea(desc);        
            break;
            case '2': 
                console.log(tareas._listado);               
            break;
            case '3':                
            break;
        
        }  

        
     
        
        await pausa();
        
    } while (opt !== '0');

} ;

main();