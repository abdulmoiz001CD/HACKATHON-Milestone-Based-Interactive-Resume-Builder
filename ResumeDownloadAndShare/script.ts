// Declaring form and DOM elements with TypeScript type assertions for proper type checking
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeOutput = document.getElementById("resume-output") as HTMLElement;
const iconEditEl = document.getElementById("iconEdit") as HTMLAnchorElement;

// Declaring an interface for the window object to add jsPDF property for PDF generation
interface Window {
  jsPDF: any;
}

// Variables to store user input data for form fields
let userName: string = '';
let email: string = '';
let phone: string = '';
let degree: string = '';
let institution: string = '';
let graduationYear: string = '';
let jobTitle: string = '';
let company: string = '';
let jobYears: string = '';
let skills: string = '';

// Function to populate form fields with stored values for editing purposes
function populateForm() {
  (document.getElementById("name") as HTMLInputElement).value = userName;
  (document.getElementById("email") as HTMLInputElement).value = email;
  (document.getElementById("phone") as HTMLInputElement).value = phone;
  (document.getElementById("degree") as HTMLInputElement).value = degree;
  (document.getElementById("institution") as HTMLInputElement).value = institution;
  (document.getElementById("graduation-year") as HTMLInputElement).value = graduationYear;
  (document.getElementById("job-title") as HTMLInputElement).value = jobTitle;
  (document.getElementById("company") as HTMLInputElement).value = company;
  (document.getElementById("job-years") as HTMLInputElement).value = jobYears;
  (document.getElementById("skills") as HTMLTextAreaElement).value = skills;
}

// Function to generate and download PDF from form data using jsPDF
function downloadPDF() {
  const { jsPDF } = (window as any).jspdf; // Type assertion for accessing jsPDF from the window object
  const doc = new jsPDF();
  
  // Set font and add content to the PDF
  doc.setFont("helvetica", "normal");
  doc.setFontSize(20);
  doc.text(`${userName}'s`, 20, 20);
  
  doc.setFontSize(12);
  doc.text(`Email: ${email}`, 20, 30);
  doc.text(`Phone: ${phone}`, 20, 40);
  
  doc.setFontSize(16);
  doc.text("Education", 20, 55);
  doc.setFontSize(12);
  doc.text(`Degree: ${degree}`, 20, 65);
  doc.text(`Institution: ${institution}`, 20, 75);
  doc.text(`Graduation Year: ${graduationYear}`, 20, 85);
  
  doc.setFontSize(16);
  doc.text("Work Experience", 20, 100);
  doc.setFontSize(12);
  doc.text(`Job Title: ${jobTitle}`, 20, 110);
  doc.text(`Company: ${company}`, 20, 120);
  doc.text(`Years: ${jobYears}`, 20, 130);
  
  doc.setFontSize(16);
  doc.text("Skills", 20, 145);
  doc.setFontSize(12);
  const skillsArray = skills.split(',').map(skill => skill.trim());
  doc.text(skillsArray.join(', '), 20, 155, { maxWidth: 170 });
  
  // Save the PDF with userName as filename
  doc.save(`${userName}_resume.pdf`);
}

// Add submit event listener to form to handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Update user variables with form data
  userName = (document.getElementById("name") as HTMLInputElement).value;
  email = (document.getElementById("email") as HTMLInputElement).value;
  phone = (document.getElementById("phone") as HTMLInputElement).value;
  degree = (document.getElementById("degree") as HTMLInputElement).value;
  institution = (document.getElementById("institution") as HTMLInputElement).value;
  graduationYear = (document.getElementById("graduation-year") as HTMLInputElement).value;
  jobTitle = (document.getElementById("job-title") as HTMLInputElement).value;
  company = (document.getElementById("company") as HTMLInputElement).value;
  jobYears = (document.getElementById("job-years") as HTMLInputElement).value;
  skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

  // Display resume content and add buttons for PDF download and link generation
  resumeOutput.style.display = "block";
  resumeOutput.innerHTML = `
    <a id="iconEdit" href="#Resume"><i class="far fa-edit"></i></a>
    <div class="resume-header">
      <h2 class="name"><span id="rename">${userName}'s</span></h2>
      <div id="EmailPhonePar">
        <p class="email"><strong>Email:</strong> ${email}</p>
        <p class="phone"><strong>Phone:</strong> ${phone}</p>
      </div>
    </div>
    <div class="resume-section">
      <h3>Education</h3>
      <p><strong>Degree:</strong> ${degree}</p>
      <p><strong>Institution:</strong> ${institution}</p>
      <p><strong>Graduation Year:</strong> ${graduationYear}</p>
    </div>
    <div class="resume-section">
      <h3>Work Experience</h3>
      <p><strong>Job Title:</strong> ${jobTitle}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Years:</strong> ${jobYears}</p>
    </div>
    <div class="resume-section">
      <h3>Skills</h3>
      <p>${skills.split(',').map(skill => `<span>${skill.trim()}</span>`).join(', ')}</p>
    </div>
    
    <button id="downloadPDF" class="btn btn-primary mt-3">Download PDF</button>
    <button id="GenerateLink" class="btn btn-primary mt-3">Generate Link</button>
    <div id="viewLink"></div>
  `;

  // Add event listener to the download button
  const downloadButton = document.getElementById("downloadPDF") as HTMLButtonElement;
  downloadButton.addEventListener("click", downloadPDF);

  // Clear form fields after submission
  form.reset();

  // Add event listener to the edit icon for repopulating form fields
  const newIconEditEl = document.getElementById("iconEdit") as HTMLAnchorElement;
  newIconEditEl.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    populateForm();
    form.scrollIntoView({ behavior: 'smooth' }); // Scroll to the form for editing
  });

  // Add event listener to the generate link button
  const viewLink = document.getElementById("viewLink") as HTMLDivElement;
  const generateLink = document.getElementById("GenerateLink") as HTMLButtonElement;

  generateLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default button behavior
    viewLink.style.display ="block";
    const blobs = resumeOutput.innerHTML;
    const blobResume = new Blob([blobs], { type: "text/html" });
    const resumeLink = URL.createObjectURL(blobResume);

    viewLink.innerHTML = `<a href="#" id="clickToView">Click Here to View</a>`;
    
    // Add event listener to the view link for copying URL to clipboard
    viewLink.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      navigator.clipboard.writeText(resumeLink)
        .then(() => {
          alert("Link Copied To ClipBoard");
        })
        .catch(() => {
          alert("Link is not Copied To ClipBoard");
        });
    });
  });
});
