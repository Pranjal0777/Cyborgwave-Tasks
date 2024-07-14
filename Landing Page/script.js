function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    fetch('/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.token) {
            localStorage.setItem('token', data.token);
            document.getElementById('signup-message').textContent = 'Signup successful!';
            document.getElementById('signup-form').style.display = 'none';
            document.getElementById('dashboard').style.display = 'block';
        } else {
            document.getElementById('signup-message').textContent = data.error;
        }
    })
    .catch(err => console.error('Error:', err));
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.token) {
            localStorage.setItem('token', data.token);
            document.getElementById('login-message').textContent = 'Login successful!';
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('dashboard').style.display = 'block';
        } else {
            document.getElementById('login-message').textContent = data.error;
        }
    })
    .catch(err => console.error('Error:', err));
}

function logout() {
    localStorage.removeItem('token');
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'block';
}
