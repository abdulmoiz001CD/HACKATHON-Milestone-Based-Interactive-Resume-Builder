var form = document.getElementById("resume-form");
var resumeOutput = document.getElementById("resume-output");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var degree = document.getElementById("degree").value;
    var institution = document.getElementById("institution").value;
    var graduationYear = document.getElementById("graduation-year").value;
    var jobTitle = document.getElementById("job-title").value;
    var company = document.getElementById("company").value;
    var jobYears = document.getElementById("job-years").value;
    var skills = document.getElementById("skills").value;
    resumeOutput.style.display = "block";
    // Display the resume
    resumeOutput.innerHTML = "\n        <div class=\"resume-header\">\n            <h2 class=\"name\">".concat(name, "'s</h2>\n           <div id =\"EmailPhonePar\"><p class=\"email\"><strong>Email:</strong> ").concat(email, "</p>\n            <p class=\"phone\"><strong>Phone:</strong> ").concat(phone, "</p></div>\n\n        </div>\n\n        <div class=\"resume-section\">\n            <h3>Education</h3>\n            <p><strong>Degree:</strong> ").concat(degree, "</p>\n            <p><strong>Institution:</strong> ").concat(institution, "</p>\n            <p><strong>Graduation Year:</strong> ").concat(graduationYear, "</p>\n        </div>\n\n        <div class=\"resume-section\">\n            <h3>Work Experience</h3>\n            <p><strong>Job Title:</strong> ").concat(jobTitle, "</p>\n            <p><strong>Company:</strong> ").concat(company, "</p>\n            <p><strong>Years:</strong> ").concat(jobYears, "</p>\n        </div>\n\n        <div class=\"resume-section\">\n            <h3>Skills</h3>\n            <p>").concat(skills.split(',').map(function (skill) { return "<span>".concat(skill.trim(), "</span>"); }).join(', '), "</p>\n        </div>\n    ");
    form.reset();
});
