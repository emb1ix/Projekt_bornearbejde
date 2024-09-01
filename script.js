// Korrekte loginoplysninger
const correctEmail = "oliverejsing11@gmail.com";
const correctPassword = "4565";

// Håndterer login-formularen
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Hent værdier fra formularen
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Kontroller loginoplysninger
    if (email === correctEmail && password === correctPassword) {
        // Hvis login er korrekt, skjul splash-skærmen og vis hovedindholdet
        document.getElementById('splash').style.display = 'none';
        document.getElementById('mainHeader').style.display = 'flex';
    } else {
        alert('Forkert email eller adgangskode. Prøv igen.');
    }
});

// Opdaterer knappen til at gå ind på hjemmesiden
document.getElementById('enterSite').addEventListener('click', function() {
    document.getElementById('splash').style.display = 'none';
    document.getElementById('mainHeader').style.display = 'flex';
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

    alert('Tilmelding fuldført!');
    this.reset();
});

function addWorkerToList(worker) {
    const workerList = document.getElementById('workerList');
    const listItem = document.createElement('li');
    listItem.textContent = `${worker.name} - ${worker.rate} DKK/time`;
    workerList.appendChild(listItem);
}

function updateWorkerSelect(worker) {
    const workerSelect = document.getElementById('workerSelect');
    const option = document.createElement('option');
    option.value = worker.email;
    option.textContent = `${worker.name} - ${worker.rate} DKK/time`;
    workerSelect.appendChild(option);
}

// Pre-definerede medarbejdere gemt direkte i scriptet
const predefinedWorkers = [
    { name: "John Doe", email: "john@example.com", rate: "150" },
    { name: "Jane Smith", email: "jane@example.com", rate: "200" },
    { name: "Max Mustermann", email: "max@example.com", rate: "175" }
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
        alert(`Går videre til betaling for ${hours} timer med medarbejder ${workerEmail}.`);
        // Implementer reel betalingsproces med MobilePay her
    } else {
        alert('Vælg en medarbejder og indtast antal timer.');
    }
});

document.getElementById('sendMessage').addEventListener('click', function() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const message = chatInput.value.trim();

    if (message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `Du: ${message}`;
        chatMessages.appendChild(messageElement);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight; // Rul til bunden
    }
});

document.getElementById('editProfile').addEventListener('click', function() {
    alert('Profiloplysninger kan redigeres her.');
});
