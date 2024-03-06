// Skills game on homepage
// Initialize skills and revealedSkills arrays
let skills = ['skill-1', 'skill-2', 'skill-3', 'skill-4', 'skill-5'];
let revealedSkills = [];

// Get the button element
const addButton = document.getElementById('addSkillButton');

// Add click event listener
addButton.addEventListener('click', addSkill);

function addSkill() {
    // Check if all skills have been revealed
    if (revealedSkills.length === skills.length) {
        // Disable the button
        addButton.disabled = true;
        return; // Exit the function
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
