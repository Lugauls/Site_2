document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    if (localStorage.getItem(username)) {
        alert('Nome de usuário já existe. Por favor, escolha outro.');
        return;
    }

    localStorage.setItem(username, JSON.stringify({ password }));
    alert('Cadastro bem-sucedido!');
    window.location.href = './login.html';
});


document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const userData = JSON.parse(localStorage.getItem(username));

    if (userData && userData.password === password) {
        localStorage.setItem('loggedUser', username);
        alert('Login bem-sucedido!');
        window.location.href = '../../index.html';
    } else {
        alert('Nome de usuário ou senha incorretos.');
    }
});


function updateNavbar() {
    const userSection = document.getElementById('userSection');
    const loggedUser = localStorage.getItem('loggedUser');

    if (loggedUser) {
        userSection.innerHTML = `
            <span class="navbar-text text-light me-3">Bem-vindo, ${loggedUser}</span>
            <button class="btn btn-outline-light" onclick="logout()">Logout</button>
        `;
    } else {
        userSection.innerHTML = `
            <button class="btn btn-outline-light" onclick="redirectToLogin()">Login</button>
            <button class="btn btn-outline-light" onclick="redirectToSignup()">Inscrever-se</button>
        `;
    }
}


function redirectToLogin() {
    window.location.href = '../.././FlexCursos/pages/login.html';
}


function redirectToSignup() {
    window.location.href = '../.././FlexCursos/pages/inscrever.html';
}


function logout() {
    localStorage.removeItem('loggedUser');
    updateNavbar();
    window.location.reload();
}


document.addEventListener('DOMContentLoaded', updateNavbar);
