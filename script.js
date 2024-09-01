document.getElementById('enterSite').addEventListener('click', function() {
    document.getElementById('splash').style.animation = 'fadeOut 2s ease-out forwards';
    setTimeout(() => {
        document.getElementById('splash').style.display = 'none';
        document.getElementById('mainHeader').style.display = 'flex';
    }, 2000); // match animation duration
});

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
        const worker = {
            name: name,
            email: email,
            rate: rate
        };
        addWorkerToList(worker);
        updateWorkerSelect(worker);
    }

    alert('Sign up successful!');
    this.reset();
});

function addWorkerToList(worker) {
    const workerList = document.getElementById('workerList');
    const listItem = document.createElement('li');
    listItem.textContent = `${worker.name} - ${worker.rate} DKK/hour`;
    workerList.appendChild(listItem);
}

function updateWorkerSelect(worker) {
    const workerSelect = document.getElementById('workerSelect');
    const option = document.createElement('option');
    option.value = worker.email;
    option.textContent = `${worker.name} - ${worker.rate} DKK/hour`;
    workerSelect.appendChild(option);
}

// Pre-defined workers stored directly in the script
const predefinedWorkers = [
    { name: "Oliver Ejsing", email: "oliverejsing11@gmail.com", rate: "200" },
    { name: "Alfred Bøgel", email: "ALfredbogel@gmail.com", rate: "15" },
    { name: "Oliver Bech", email: "Oliverbech@gmail.com", rate: "75" }
];

function loadPredefinedWorkers() {
    predefinedWorkers.forEach(worker => {
        addWorkerToList(worker);
        updateWorkerSelect(worker);
    });
}

window.onload = loadPredefinedWorkers;

document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const workerEmail = document.getElementById('workerSelect').value;
    const hours = document.getElementById('hours').value;

    if (workerEmail && hours) {
        alert(`Proceeding to payment for ${hours} hours with worker ${workerEmail}.`);
        // Implement real payment process with MobilePay here
    } else {
        alert('Please select a worker and enter number of hours.');
    }
});

document.getElementById('sendMessage').addEventListener('click', function() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const message = chatInput.value.trim();

    if (message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `You: ${message}`;
        chatMessages.appendChild(messageElement);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
    }
});
