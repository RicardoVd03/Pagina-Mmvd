document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    
    if (name.length < 3) {
        showMessage('El nombre debe tener al menos 3 caracteres');
        return;
    }

    if (!validateEmail(email)) {
        showMessage('El correo electrónico no es válido');
        return;
    }

    if (password.length < 6) {
        showMessage('La contraseña debe tener al menos 6 caracteres');
        return;
    }

    
    showMessage('Registro exitoso', 'green');
});

function showMessage(message, color = 'red') {
    let messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.color = color;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
