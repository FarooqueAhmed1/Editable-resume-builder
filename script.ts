// script.ts

document.getElementById('generateResume')?.addEventListener('click', () => {
    // Get the values from the input fields
    const nameElement = document.getElementById('name') as HTMLInputElement | null;
    const emailElement = document.getElementById('email') as HTMLInputElement | null;
    const phoneElement = document.getElementById('phone') as HTMLInputElement | null;
    const locationElement = document.getElementById('location') as HTMLInputElement | null;
    const objectiveElement = document.getElementById('objective') as HTMLTextAreaElement | null;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement | null;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement | null;
    const skillsElement = document.getElementById('skills') as HTMLInputElement | null;

    // Check if any of the elements are null
    if (!nameElement || !emailElement || !phoneElement || !locationElement || 
        !objectiveElement || !educationElement || !experienceElement || !skillsElement) {
        console.error("One or more input fields are missing.");
        return;
    }

    // Get the values
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const location = locationElement.value;
    const objective = objectiveElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value.split(',').map(skill => skill.trim());

    // Validate required fields
    if (!name || !email || !phone || !location) {
        alert("Please fill in all required fields.");
        return;
    }

    // Create resume content
    const resumeContent = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        <h4>Objective</h4>
        <p>${objective}</p>
        <h4>Education</h4>
        <p>${education}</p>
        <h4>Experience</h4>
        <p>${experience}</p>
        <h4>Skills</h4>
        <p>${skills.join(', ')}</p>
    `;

    // Display the resume content
    document.getElementById('resumeContent')!.innerHTML = resumeContent;
});