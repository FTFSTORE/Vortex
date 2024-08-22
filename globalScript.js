// auth.js

// Função para registrar um novo usuário
function signUp() {
    const username = document.getElementById('usuario').value;
    const password = document.getElementById('senha').value;
    const confirmPassword = document.getElementById('Csenha').value;
    const errorElement = document.getElementById('signup-error');

    if (password !== confirmPassword) {
        errorElement.textContent = 'Senhas não coincidem!';
        errorElement.style.display = 'block';
        return;
    }

    // Mostrar modal de carregamento
    document.querySelector('.modal').style.display = 'flex';

    // Simulação de registro
    setTimeout(function() {
        // Salva as credenciais no localStorage
        localStorage.setItem('user', JSON.stringify({ username, password }));
        document.querySelector('.modal').style.display = 'none';
        document.querySelector('.modal-signup').style.display = 'block';
    }, 2000);
}

// Função para finalizar o cadastro
function Finish() {
    const email = document.getElementById('email').value;
    const errorElement = document.getElementById('finish-error');

    if (!email) {
        errorElement.textContent = 'Email é obrigatório!';
        errorElement.style.display = 'block';
        return;
    }

    // Mostrar modal de carregamento
    document.querySelector('.modal-signup').style.display = 'none';
    document.querySelector('.modal').style.display = 'flex';

    // Simulação de finalização
    setTimeout(function() {
        document.querySelector('.modal').style.display = 'none';
        window.location.href = './'; // Redireciona após a conclusão
    }, 2000);
}

// Função para redirecionar para a página de login
function PageL() {
    document.querySelector('.modal').style.display = 'flex';
    setTimeout(function() {
        document.querySelector('.modal').style.display = 'none';
        window.location.href = "./";
    }, 2500);
}

// Função para autenticar o usuário no login
function authenticate(username, password) {
    const user = JSON.parse(localStorage.getItem('user'));
    return user && user.username === username && user.password === password;
}

// Exemplo de uso da autenticação
document.querySelector('.btn-login').addEventListener('click', function() {
    const username = document.getElementById('usuario').value;
    const password = document.getElementById('senha').value;
    const errorElement = document.getElementById('signup-error');

    if (authenticate(username, password)) {
        alert('Login bem-sucedido!');
        // Redireciona ou exibe uma mensagem de sucesso
    } else {
        errorElement.textContent = 'Usuário ou senha inválidos!';
        errorElement.style.display = 'block';
    }
});
