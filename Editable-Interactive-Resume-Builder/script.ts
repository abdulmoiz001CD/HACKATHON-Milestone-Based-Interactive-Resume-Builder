// Form and DOM element declarations with TypeScript type assertions
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeOutput = document.getElementById("resume-output") as HTMLElement;
const iconEditEl = document.getElementById("iconEdit") as HTMLAnchorElement;

// User data variables (to store the previous values)
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

// Function to populate form fields with stored values
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

// Add submit event listener to the form
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get form data and update user variables
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

  // Display the resume with user inputs
  resumeOutput.style.display = "block";
  resumeOutput.innerHTML = `
    <a id="iconEdit" href="#Resume"><i class="far fa-edit"></i></a>
    <div class="resume-header">
      <h2 class="name"><span id="rename">${userName}'s</span> Resume</h2>
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
  `;

  // Clear all input fields after form submission
  form.reset();

 // Function to smoothly scroll the page down and bring content into view
 function scrollPageDown(offset:any) {
  // Scroll to the element with smooth behavior
  window.scrollTo({
    top: window.scrollY + offset,
    behavior: 'smooth'
  });
}

// Call the function with the desired offset (e.g., 100 pixels down)
scrollPageDown(1000);
 




  // Add event listener to the edit icon
  const newIconEditEl = document.getElementById("iconEdit") as HTMLAnchorElement;
  newIconEditEl.addEventListener("click", (e) => {
    e.preventDefault();
    populateForm();
    form.scrollIntoView({ behavior: 'smooth' });
   
  });



});





