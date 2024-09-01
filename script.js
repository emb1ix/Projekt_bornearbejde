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

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const newUser = {
        type: userType,
        name: name,
        email: email,
        rate: rate
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    if (userType === 'worker') {
        addWorkerToList(newUser);
    }

    alert('Sign up successful!');
    this.reset();
});

function addWorkerToList(user) {
    const workerList = document.getElementById('workerList');
    const listItem = document.createElement('li');
    listItem.textContent = `${user.name} - ${user.rate} DKK/hour`;
    workerList.appendChild(listItem);
}

function loadWorkers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach(user => {
        if (user.type === 'worker') {
            addWorkerToList(user);
        }
    });
}

window.onload = loadWorkers;
