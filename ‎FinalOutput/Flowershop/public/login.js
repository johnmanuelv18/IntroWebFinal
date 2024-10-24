document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent default form submission

            const formData = new FormData(event.target);
            const data = {
                email: formData.get('email'),
                password: formData.get('password'),
            };

            console.log('Login data submitted:', data); // Debugging log

            try {
                // Send POST request to login
                const response = await fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                console.log('Response status:', response.status); // Log response status
                const responseBody = await response.text(); // Get the response body as text
                console.log('Response body:', responseBody); // Log response body

                if (response.ok) {
                    const responseData = JSON.parse(responseBody); // Parse the response data
                    alert('Login successful! Click okay to go to homepage!');
                    window.location.href = '/FLOWERS_HOME.html'; // Adjust the URL as needed
                } else {
                    const errorData = JSON.parse(responseBody); // Parse the error response
                    console.error('Error response data:', errorData); // Log error data
                    alert(`Login failed: ${errorData.message || 'Please check your credentials and try again.'}`);
                }
            } catch (error) {
                console.error('Error during login:', error); // Log the error
                alert('An error occurred. Please try again later.');
            }
        });
    } else {
        console.error('Login form not found.'); // Log if the form is not found
    }
});