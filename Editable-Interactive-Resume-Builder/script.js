// Form and DOM element declarations with TypeScript type assertions
var form = document.getElementById("resume-form");
var resumeOutput = document.getElementById("resume-output");
var iconEditEl = document.getElementById("iconEdit");
// User data variables (to store the previous values)
var userName = '';
var email = '';
var phone = '';
var degree = '';
var institution = '';
var graduationYear = '';
var jobTitle = '';
var company = '';
var jobYears = '';
var skills = '';
// Function to populate form fields with stored values
function populateForm() {
    document.getElementById("name").value = userName;
    document.getElementById("email").value = email;
    document.getElementById("phone").value = phone;
    document.getElementById("degree").value = degree;
    document.getElementById("institution").value = institution;
    document.getElementById("graduation-year").value = graduationYear;
    document.getElementById("job-title").value = jobTitle;
    document.getElementById("company").value = company;
    document.getElementById("job-years").value = jobYears;
    document.getElementById("skills").value = skills;
}
// Add submit event listener to the form
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get form data and update user variables
    userName = document.getElementById("name").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    degree = document.getElementById("degree").value;
    institution = document.getElementById("institution").value;
    graduationYear = document.getElementById("graduation-year").value;
    jobTitle = document.getElementById("job-title").value;
    company = document.getElementById("company").value;
    jobYears = document.getElementById("job-years").value;
    skills = document.getElementById("skills").value;
    // Display the resume with user inputs
    resumeOutput.style.display = "block";
    resumeOutput.innerHTML = "\n    <a id=\"iconEdit\" href=\"#Resume\"><i class=\"far fa-edit\"></i></a>\n    <div class=\"resume-header\">\n      <h2 class=\"name\"><span id=\"rename\">".concat(userName, "'s</span> Resume</h2>\n      <div id=\"EmailPhonePar\">\n        <p class=\"email\"><strong>Email:</strong> ").concat(email, "</p>\n        <p class=\"phone\"><strong>Phone:</strong> ").concat(phone, "</p>\n      </div>\n    </div>\n    <div class=\"resume-section\">\n      <h3>Education</h3>\n      <p><strong>Degree:</strong> ").concat(degree, "</p>\n      <p><strong>Institution:</strong> ").concat(institution, "</p>\n      <p><strong>Graduation Year:</strong> ").concat(graduationYear, "</p>\n    </div>\n    <div class=\"resume-section\">\n      <h3>Work Experience</h3>\n      <p><strong>Job Title:</strong> ").concat(jobTitle, "</p>\n      <p><strong>Company:</strong> ").concat(company, "</p>\n      <p><strong>Years:</strong> ").concat(jobYears, "</p>\n    </div>\n    <div class=\"resume-section\">\n      <h3>Skills</h3>\n      <p>").concat(skills.split(',').map(function (skill) { return "<span>".concat(skill.trim(), "</span>"); }).join(', '), "</p>\n    </div>\n  ");
    // Clear all input fields after form submission
    form.reset();
    // Function to smoothly scroll the page down and bring content into view
    function scrollPageDown(offset) {
        // Scroll to the element with smooth behavior
        window.scrollTo({
            top: window.scrollY + offset,
            behavior: 'smooth'
        });
    }
    // Call the function with the desired offset (e.g., 100 pixels down)
    scrollPageDown(1000);
    // Add event listener to the edit icon
    var newIconEditEl = document.getElementById("iconEdit");
    newIconEditEl.addEventListener("click", function (e) {
        e.preventDefault();
        populateForm();
        form.scrollIntoView({ behavior: 'smooth' });
    });
});
