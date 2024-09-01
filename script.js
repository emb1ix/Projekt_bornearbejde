document.getElementById('userType').addEventListener('change', function() {
    const workerDetails = document.getElementById('workerDetails');
    if (this.value === 'worker') {
        workerDetails.style.display = 'block';
    } else {
        workerDetails.style.display = 'none';
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userType = document.getElementById('userType').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rate = document.getElementById('rate').value;

    if (userType === 'worker') {
        const workerList = document.getElementById('workerList');
        const listItem = document.createElement('li');
        listItem.textContent = `${name} - ${rate} DKK/hour`;
        workerList.appendChild(listItem);
    }

    alert('Sign up successful!');
    this.reset();
});
