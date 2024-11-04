document.addEventListener('DOMContentLoaded', () => {
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('inputpassword');
    const loginForm = document.getElementById('loginForm');
    const statusDiv = document.getElementById('status');

    // Habilita os campos de entrada após um atraso (simulando uma lógica de desbloqueio)
    setTimeout(() => {
        usernameField.removeAttribute('readonly');
        passwordField.removeAttribute('readonly');
    }, 1000); // O atraso pode ser ajustado conforme necessário

    // Limita o campo de matrícula a 6 dígitos
    usernameField.addEventListener('input', () => {
        if (usernameField.value.length > 6) {
            usernameField.value = usernameField.value.slice(0, 6);
        }
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita o envio do formulário

        const username = usernameField.value;
        const password = passwordField.value;

        // Simula uma validação de login
        if (username === '000000' && password === 'senha') {
            statusDiv.textContent = 'Login bem-sucedido!';
            statusDiv.style.color = 'green';

            // Redireciona para a página de upload após a validação bem-sucedida
            window.location.href = 'index2.html'; // Ajuste conforme necessário
        } else {
            statusDiv.textContent = 'Login falhou. Verifique suas credenciais.';
            statusDiv.style.color = 'red';  // Altera a cor do texto para vermelho
        }
    });
});
