// script.ts
var _a;
(_a = document.getElementById('generateResume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    // Get the values from the input fields
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var locationElement = document.getElementById('location');
    var objectiveElement = document.getElementById('objective');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    // Check if any of the elements are null
    if (!nameElement || !emailElement || !phoneElement || !locationElement ||
        !objectiveElement || !educationElement || !experienceElement || !skillsElement) {
        console.error("One or more input fields are missing.");
        return;
    }
    // Get the values
    var name = nameElement.value;
    var email = emailElement.value;
    var phone = phoneElement.value;
    var location = locationElement.value;
    var objective = objectiveElement.value;
    var education = educationElement.value;
    var experience = experienceElement.value;
    var skills = skillsElement.value.split(',').map(function (skill) { return skill.trim(); });
    // Validate required fields
    if (!name || !email || !phone || !location) {
        alert("Please fill in all required fields.");
        return;
    }
    // Create resume content
    var resumeContent = "\n        <h3>".concat(name, "</h3>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Location:</strong> ").concat(location, "</p>\n        <h4>Objective</h4>\n        <p>").concat(objective, "</p>\n        <h4>Education</h4>\n        <p>").concat(education, "</p>\n        <h4>Experience</h4>\n        <p>").concat(experience, "</p>\n        <h4>Skills</h4>\n        <p>").concat(skills.join(', '), "</p>\n    ");
    // Display the resume content
    document.getElementById('resumeContent').innerHTML = resumeContent;
});
