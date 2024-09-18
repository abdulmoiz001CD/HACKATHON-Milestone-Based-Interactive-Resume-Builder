# Dynamic Interactive Resume Builder

This project is a simple web application that dynamically generates a resume preview based on user input from a form. Here's a breakdown of its components and functionality:

Components
HTML Form:

Collects various pieces of information from the user, including their name, email, phone number, educational background, work experience, and skills.
The form includes fields for:
Name
Email
Phone
Degree
Institution
Graduation Year
Job Title
Company
Years of Experience
Skills
Resume Output Section:

Displays the formatted resume based on the information entered in the form.
Initially hidden and becomes visible after form submission.
Functionality
Form Submission Handling:

Uses TypeScript to add an event listener to the form's submit event.
Prevents the default form submission action to handle it via JavaScript.
Data Extraction:

Retrieves values from each form input field.
Extracts data for name, contact details, education, work experience, and skills.
Resume Generation:

Formats the collected data into HTML.
Updates the inner HTML of the resumeOutput element to display the resume preview.
Converts skills into a comma-separated list and formats them for display.
Form Reset:

Resets the form fields after the resume is displayed to allow for new entries.
Output Example
When a user submits the form, the following resume preview is generated:

Header: Displays the user’s name, email, and phone number.
Education Section: Shows details about the user's degree, institution, and graduation year.
Work Experience Section: Lists the user's job title, company, and years of experience.
Skills Section: Shows the user’s skills formatted as a list.
Usage


This project is useful for creating a dynamic and interactive resume builder that allows users to see a preview of their resume in real-time based on the information they provide. It's particularly useful for job seekers or students looking to generate a simple resume for various applications.
 
