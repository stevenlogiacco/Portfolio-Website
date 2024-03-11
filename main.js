// Skills game on homepage
// Initialize skills and revealedSkills arrays
let skills = [
    'Collaboration', 'Teamwork', 'Communication', 'Time Management', 
    'Solid Leadership', 'Organisation', 'Problem Solving', 'Critical Thinking', 'Attention to Detail',
    'Project Management Professional (PMP)', 'Agile PM', 
    'Microsoft Suite', 'SAP', 'HTML/CSS/JS'];
let revealedSkills = [];

// Get the button element
const addButton = document.getElementById('addSkillButton');

// Add click event listener
addButton.addEventListener('click', addSkill);

function addSkill() {
    // Check if all skills have been revealed
    if (revealedSkills.length === skills.length) {
        // Reset revealedSkills array
        revealedSkills = [];
    }

    // Get the next skill from the skills array
    const nextSkill = skills[revealedSkills.length];

    // Add the skill to END of revealedSkills
    // revealedSkills.push(nextSkill);

    // Add the skill to the START of revealedSkills
    revealedSkills.unshift(nextSkill); // Use .unshift() here

    // Update the DOM to display the revealedSkills
    updateSkillsDisplay();
}

function updateSkillsDisplay() {
    const skillsContainer = document.getElementById('revealedSkillsContainer');
    skillsContainer.innerHTML = ''; // Clear existing content

    // Create a list to display the skills
    const ul = document.createElement('ul');
    revealedSkills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        ul.appendChild(li);
    });

    // Append the list to the container
    skillsContainer.appendChild(ul);
}

// Initial update to display any pre-existing skills
updateSkillsDisplay();



// SIDEBAR OPEN AND CLOSE


function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// PROJECTS PAGE EXPAND AND COLLAPSE

function showNZGT () {
    const NZGTOpen = document.querySelector("#NZGTOpen");
    const NZGTClosed = document.querySelector("#NZGTClosed");
    NZGTOpen.style.display = 'grid';
    NZGTClosed.style.display = 'none';   
}

function hideNZGT () {
    const NZGTOpen = document.querySelector("#NZGTOpen");
    const NZGTClosed = document.querySelector("#NZGTClosed");
    NZGTOpen.style.display = 'none';
    NZGTClosed.style.display = 'flex';  
}

function showQuantum () {
    const QuantumOpen = document.querySelector("#QuantumOpen");
    const QuantumClosed = document.querySelector("#QuantumClosed");
    QuantumOpen.style.display = 'grid';
    QuantumClosed.style.display = 'none'; 
}

function hideQuantum () {
    const QuantumOpen = document.querySelector("#QuantumOpen");
    const QuantumClosed = document.querySelector("#QuantumClosed");
    QuantumOpen.style.display = 'none';
    QuantumClosed.style.display = 'flex';  
}

function showTrace () {
    const TraceOpen = document.querySelector("#TraceOpen");
    const TraceClosed = document.querySelector("#TraceClosed");
    TraceOpen.style.display = 'grid';
    TraceClosed.style.display = 'none'; 
}

function hideTrace () {
    const TraceOpen = document.querySelector("#TraceOpen");
    const TraceClosed = document.querySelector("#TraceClosed");
    TraceOpen.style.display = 'none';
    TraceClosed.style.display = 'flex';  
}

function showNZPost () {
    const NZPostOpen = document.querySelector("#NZPostOpen");
    const NZPostClosed = document.querySelector("#NZPostClosed");
    NZPostOpen.style.display = 'grid';
    NZPostClosed.style.display = 'none'; 
}

function hideNZPost () {
    const NZPostOpen = document.querySelector("#NZPostOpen");
    const NZPostClosed = document.querySelector("#NZPostClosed");
    NZPostOpen.style.display = 'none';
    NZPostClosed.style.display = 'flex';  
}

function showDataminer () {
    const DataminerOpen = document.querySelector("#DataminerOpen");
    const DataminerClosed = document.querySelector("#DataminerClosed");
    DataminerOpen.style.display = 'grid';
    DataminerClosed.style.display = 'none'; 
}

function hideDataminer () {
    const DataminerOpen = document.querySelector("#DataminerOpen");
    const DataminerClosed = document.querySelector("#DataminerClosed");
    DataminerOpen.style.display = 'none';
    DataminerClosed.style.display = 'flex';  
}