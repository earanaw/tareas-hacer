import colors from 'colors'
import inquirer from 'inquirer';

const preguntas = [
    {
        type: 'list',
        name: 'opción',
        message: '¿quede desea hacer?',
        choices: [
            {
                value:'1',
                name:'1. Crear tarea'               
            },
            {
                value:'2',
                name:'2. Listar tareas'               
            },
            {
                value:'3',
                name:'3. Listar tareas completadas'               
            },
            {
                value:'4',
                name:'4. Listar tareas pendientes'               
            },
            {
                value:'5',
                name:'5. Completar tareas'               
            },
            {
                value:'6',
                name:'6. Borrar tareas'               
            },
            {
                value:'0',
                name:'0. Salir'               
            }
            
        ] 
    
    }
]

export const inquirerMenu = async() => {
    console.clear();    
    console.log('==========================='.green);
    console.log('== Seleccione una Opción =='.green);
    console.log('===========================\n'.green);
   
    const {opción} = await inquirer.prompt(preguntas);
    // await inquirer.prompt(preguntas)
    return opción
}

export const pausa = async() => {
    const question = [
        {
            type: 'input',
            name: 'Enter',
            message: `Presione ${'ENTER'.green} para continuar`
        }
    ];

    await inquirer.prompt(question);
    return question;

}

export const leerInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Porfavor ingrese un valor'
                }
                return true
            }
        }
    
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;
}


