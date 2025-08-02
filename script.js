document.addEventListener('DOMContentLoaded', function() {
    // Your code goes here
    const form = document.getElementById('registration-form');
    // const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event){
        event.preventDefault(); // Prevent the default form submission

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const feedbackDiv = document.getElementById('form-feedback');

        // Basic validation

        let isValid = true;
        const messages = [];
        if(username.length < 3){
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }
        if(email.includes('@') === false){
            isValid = false;
            messages.push('Please enter a valid email address.');
        }
        if(password.length < 6){
            isValid = false;
            messages.push('Password must be at least 6 characters long.');
        }

        if(isValid){
            feedbackDiv.style.display = 'block';
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
            form.reset();
        } else {
            feedbackDiv.style.display = 'block';
            feedbackDiv.innerHTML = ''; // Clear previous messages
            feedbackDiv.textContent = messages.join('<br>'); 
            feedbackDiv.style.color = '#dc3545';
        }


    });

 
    
});    console.log('DOM fully loaded and parsed');