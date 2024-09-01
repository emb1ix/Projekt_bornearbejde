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

// Pre-defined workers stored directly in the script
const predefinedWorkers = [
    { name: "Oliver Ejsing", email: "oliverejsing11@gmail.com", rate: "100" },
    { name: "Alfred Damn", email: "Alfreddamn@gmail.com", rate: "30" },
    { name: "Max Mustermann", email: "max@example.com", rate: "175" }
];

function loadPredefinedWorkers() {
    predefined
