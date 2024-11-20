
document.addEventListener('DOMContentLoaded', () => {
    
    const listaTareas = document.getElementById('lista-tareas');
    
    const inputTarea = document.getElementById('nueva-tarea');

    
    function crearElementoTarea(texto) {
    
        const nuevaTarea = document.createElement('div');
        nuevaTarea.classList.add('item'); 

        
        const textoTarea = document.createElement('span');
        textoTarea.textContent = texto; 

        
        const contenedorBotones = document.createElement('div');

        
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Editar'; 
        editBtn.classList.add('edit-btn'); 

    
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar'; 
        deleteBtn.classList.add('delete-btn');

        
        editBtn.addEventListener('click', () => {
            
            const nuevoTexto = prompt('Editar tarea:', textoTarea.textContent);
            if (nuevoTexto && nuevoTexto.trim() !== '') { 
                textoTarea.textContent = nuevoTexto; 
            }
        });

        
        deleteBtn.addEventListener('click', () => {
            nuevaTarea.remove(); 
        });

        
        textoTarea.addEventListener('click', () => {
            nuevaTarea.classList.toggle('destacado'); 
        });

        
        contenedorBotones.appendChild(editBtn);
        contenedorBotones.appendChild(deleteBtn);

        
        nuevaTarea.appendChild(textoTarea);
        nuevaTarea.appendChild(contenedorBotones);

        return nuevaTarea; 
    }

    
    function agregarTarea() {
        const texto = inputTarea.value.trim(); 
        if (texto) { 
            const nuevaTarea = crearElementoTarea(texto); 
            listaTareas.appendChild(nuevaTarea); 
            inputTarea.value = ''; 
        }
    }


    document.querySelector('button[onclick="agregarTarea()"]')
        .addEventListener('click', agregarTarea);

    
    listaTareas.querySelectorAll('.item').forEach(tarea => {
        const deleteBtn = tarea.querySelector('.delete-btn');
        const textoTarea = tarea.querySelector('span:first-child'); 

        
        deleteBtn.addEventListener('click', () => {
            tarea.remove(); 
        });

    
        textoTarea.addEventListener('click', () => {
            tarea.classList.toggle('destacado'); 
        });
    });
});
