// Skills game on homepage
// Initialize skills and revealedSkills arrays
let skills = [
    'SOFT SKILLS:', 'collaboration', 'teamwork', 'communication', 'time management', 
    'solid leadership', 'organisation', 'problem solving', 'critical thinking',
    'HARD SKILLS:', 'certified project management professional (PMP)', 'including agile PM', 
    'microsoft suite', 'SAP', 'HTML/CSS/JS'];
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

    // Add the skill to revealedSkills
    revealedSkills.push(nextSkill);

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


function addSkill() {
    // Check if all skills have been revealed
    if (revealedSkills.length === skills.length) {
        // Reset revealedSkills array
        revealedSkills = [];

        // Clear the skills display in the DOM
        updateSkillsDisplay();
    } else {
        // Get the next skill from the skills array
        const nextSkill = skills[revealedSkills.length];

        // Add the skill to revealedSkills
        revealedSkills.push(nextSkill);

        // Update the DOM to display the revealedSkills
        updateSkillsDisplay();
    }
}