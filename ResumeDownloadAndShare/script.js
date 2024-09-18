// Declaring form and DOM elements with TypeScript type assertions for proper type checking
var form = document.getElementById("resume-form");
var resumeOutput = document.getElementById("resume-output");
var iconEditEl = document.getElementById("iconEdit");
// Variables to store user input data for form fields
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
// Function to populate form fields with stored values for editing purposes
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
// Function to generate and download PDF from form data using jsPDF
function downloadPDF() {
    var jsPDF = window.jspdf.jsPDF; // Type assertion for accessing jsPDF from the window object
    var doc = new jsPDF();
    // Set font and add content to the PDF
    doc.setFont("helvetica", "normal");
    doc.setFontSize(20);
    doc.text("".concat(userName, "'s"), 20, 20);
    doc.setFontSize(12);
    doc.text("Email: ".concat(email), 20, 30);
    doc.text("Phone: ".concat(phone), 20, 40);
    doc.setFontSize(16);
    doc.text("Education", 20, 55);
    doc.setFontSize(12);
    doc.text("Degree: ".concat(degree), 20, 65);
    doc.text("Institution: ".concat(institution), 20, 75);
    doc.text("Graduation Year: ".concat(graduationYear), 20, 85);
    doc.setFontSize(16);
    doc.text("Work Experience", 20, 100);
    doc.setFontSize(12);
    doc.text("Job Title: ".concat(jobTitle), 20, 110);
    doc.text("Company: ".concat(company), 20, 120);
    doc.text("Years: ".concat(jobYears), 20, 130);
    doc.setFontSize(16);
    doc.text("Skills", 20, 145);
    doc.setFontSize(12);
    var skillsArray = skills.split(',').map(function (skill) { return skill.trim(); });
    doc.text(skillsArray.join(', '), 20, 155, { maxWidth: 170 });
    // Save the PDF with userName as filename
    doc.save("".concat(userName, "_resume.pdf"));
}
// Add submit event listener to form to handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    // Update user variables with form data
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
    // Display resume content and add buttons for PDF download and link generation
    resumeOutput.style.display = "block";
    resumeOutput.innerHTML = "\n    <a id=\"iconEdit\" href=\"#Resume\"><i class=\"far fa-edit\"></i></a>\n    <div class=\"resume-header\">\n      <h2 class=\"name\"><span id=\"rename\">".concat(userName, "'s</span></h2>\n      <div id=\"EmailPhonePar\">\n        <p class=\"email\"><strong>Email:</strong> ").concat(email, "</p>\n        <p class=\"phone\"><strong>Phone:</strong> ").concat(phone, "</p>\n      </div>\n    </div>\n    <div class=\"resume-section\">\n      <h3>Education</h3>\n      <p><strong>Degree:</strong> ").concat(degree, "</p>\n      <p><strong>Institution:</strong> ").concat(institution, "</p>\n      <p><strong>Graduation Year:</strong> ").concat(graduationYear, "</p>\n    </div>\n    <div class=\"resume-section\">\n      <h3>Work Experience</h3>\n      <p><strong>Job Title:</strong> ").concat(jobTitle, "</p>\n      <p><strong>Company:</strong> ").concat(company, "</p>\n      <p><strong>Years:</strong> ").concat(jobYears, "</p>\n    </div>\n    <div class=\"resume-section\">\n      <h3>Skills</h3>\n      <p>").concat(skills.split(',').map(function (skill) { return "<span>".concat(skill.trim(), "</span>"); }).join(', '), "</p>\n    </div>\n    \n    <button id=\"downloadPDF\" class=\"btn btn-primary mt-3\">Download PDF</button>\n    <button id=\"GenerateLink\" class=\"btn btn-primary mt-3\">Generate Link</button>\n    <div id=\"viewLink\"></div>\n  ");
    // Add event listener to the download button
    var downloadButton = document.getElementById("downloadPDF");
    downloadButton.addEventListener("click", downloadPDF);
    // Clear form fields after submission
    form.reset();
    // Add event listener to the edit icon for repopulating form fields
    var newIconEditEl = document.getElementById("iconEdit");
    newIconEditEl.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        populateForm();
        form.scrollIntoView({ behavior: 'smooth' }); // Scroll to the form for editing
    });
    // Add event listener to the generate link button
    var viewLink = document.getElementById("viewLink");
    var generateLink = document.getElementById("GenerateLink");
    generateLink.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default button behavior
        viewLink.style.display = "block";
        var blobs = resumeOutput.innerHTML;
        var blobResume = new Blob([blobs], { type: "text/html" });
        var resumeLink = URL.createObjectURL(blobResume);
        viewLink.innerHTML = "<a href=\"#\" id=\"clickToView\">Click Here to View</a>";
        // Add event listener to the view link for copying URL to clipboard
        viewLink.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            navigator.clipboard.writeText(resumeLink)
                .then(function () {
                alert("Link Copied To ClipBoard");
            })
                .catch(function () {
                alert("Link is not Copied To ClipBoard");
            });
        });
    });
});
