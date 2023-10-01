document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const URL = 'https://jsonplaceholder.typicode.com/users';

    form.addEventListener('submit', e => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre: nombre,
                apellido: apellido,
                fecha: fechaNacimiento,
            }),
        })
        .then(res => res.json())
        .then(data => console.log(data))
    });
});

