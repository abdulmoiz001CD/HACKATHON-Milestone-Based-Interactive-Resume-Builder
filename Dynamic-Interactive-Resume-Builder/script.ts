const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeOutput = document.getElementById("resume-output") as HTMLElement;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get form data
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const institution = (document.getElementById("institution") as HTMLInputElement).value;
    const graduationYear = (document.getElementById("graduation-year") as HTMLInputElement).value;
    const jobTitle = (document.getElementById("job-title") as HTMLInputElement).value;
    const company = (document.getElementById("company") as HTMLInputElement).value;
    const jobYears = (document.getElementById("job-years") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
    resumeOutput.style.display="block"
    // Display the resume
    resumeOutput.innerHTML = `
        <div class="resume-header">
            <h2 class="name">${name}'s</h2>
           <div id ="EmailPhonePar"><p class="email"><strong>Email:</strong> ${email}</p>
            <p class="phone"><strong>Phone:</strong> ${phone}</p></div>

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

});






// Editable functionality function
function makeEditable() {
  // Make name field editable
  const nameEl = document.querySelector(".name");
  if(nameEl){
    nameEl.setAttribute("contenteditable", "true");
  }



}
