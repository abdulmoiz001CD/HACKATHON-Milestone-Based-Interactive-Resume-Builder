# Editable Interactive Resume Builder

Overview
The Editable Resume project is a web application that allows users to create and edit their resumes interactively. This project features a form where users can input and update their personal information, education, work experience, and skills. The resume is dynamically updated and displayed on the page as changes are made.

Features
Interactive Form: Users can input and edit their personal details, education, work experience, and skills.
Real-Time Updates: The resume preview updates in real-time as users make changes to the form.
Smooth Scrolling: After submitting the form, the page scrolls smoothly to the updated resume.
Edit Functionality: Users can click an edit icon to re-open and update the form with existing data.

Usage
Fill Out the Form: Enter your details into the form fields.
Submit the Form: Click the submit button to update and display your resume on the page.
Edit Resume: Click the edit icon to modify the displayed resume information and make further updates.


Code Explanation
Form and DOM Element Declarations: Access DOM elements and use TypeScript type assertions for type safety.
Populate Form Function: Fills the form fields with existing data when the user clicks the edit icon.
Form Submission Handling: Collects user input, updates the resume preview, and resets the form.
Smooth Scrolling: Scrolls the page smoothly to the updated resume section after submission.