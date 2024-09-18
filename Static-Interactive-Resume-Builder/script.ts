const toggleButton:HTMLElement|null = document.getElementById("toggle-skills");
const skillsSection:HTMLElement|null = document.getElementById("skills")!;

toggleButton?.addEventListener("click", () => {
    
  if (skillsSection?.style.display === "none") {
    skillsSection.style.display = "block";
  } else {
    skillsSection.style.display = "none";
  }
});
