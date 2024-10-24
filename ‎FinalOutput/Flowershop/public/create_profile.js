document.querySelector('.login-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target);
    const data = {
        first_name: formData.get('first_name'),
        last_name: formData.get('last_name'),
        email: formData.get('email'),
        password: formData.get('password'),
    };

    try {
        // Send POST request to create account
        const response = await fetch('/create_account', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            // Automatically log in the user after successful registration
            const loginResponse = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: data.email, password: data.password }),
            });

            if (loginResponse.ok) {
                // Redirect to profile page after successful login
                window.location.href = '/profile.html';
            } else {
                alert('Login failed. Please try again.');
            }
        } else {
            alert('Registration failed. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});