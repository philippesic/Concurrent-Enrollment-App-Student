//Imports Accordion
import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Dropdown, DropdownButton, Accordion } from 'react-bootstrap'

//Default Export to App.jsx
export default function CCESteps() {
  return (
    //No Active Key - Auto Collapsed
    <Accordion defaultActiveKey="">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Step 1 - Choosing a Course</Accordion.Header>
        <Accordion.Body>
          If you wish to take a concurrent enrollment course at community college, first look at the SMCCD Course List to find a course you wish to take. Note the school this course takes place at, either CSM, Canada, or Skyline, as you will need it for later.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Step 2 - Creating an OpenCCC account</Accordion.Header>
        <Accordion.Body>
          <p>
            To be able to register for concurrent enrollment, you will need to create an OpenCCC account.
          </p>
          <p>
            Select create an account, and enter your d.tech email address
            Enter the verification code sent to your d.tech email address
            To create a profile, enter your information, including your address and Legal Name
            After your profile is completed, select Start an Application
          </p>
          <p>
            This page will prompt you for your major and term. For concurrent enrollment purposes, you can select the semester you wish to first start concurrent enrollment. When asked for your goals and major, you can select “Undecided Goals” and “All Majors”. After this, simply select the major closest to the first class you wish to take.
            (For example, if you wish to take an art class, you can select art as your major. This is not important, but a selection is required.)
          </p>
          <p>
            Continue to complete the fields to finish your application
            IMPORTANT - Do NOT provide your social security number. It is not necessary. Simply select “Decline to Provide SSN”
            Continue to complete the fields to finish your application
            When asked for your High School graduation, provide the month of May, followed by your graduation year (The year in your d.tech email)
            Finally, ensure that all fields are filled in correctly and submit your application
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Step 3 - Apply to a SMCCD College</Accordion.Header>
        <Accordion.Body>
          <p>
            In order to take a course at community college, you must first enroll. For the school your class is offered by, enroll for either CSM, Canada, or Skyline (For example, if you wish to take a math course that is offered by Skyline, apply for Skyline College).
          </p>
          <p>
            After signing in with your OpenCCC account, follow the instructions from step 2 to apply.
          </p>
          <p>
            After submitting your application, you will receive an acceptance email within 7 days. This email will contain your username for logging into all websmart applications, including Websmart, Canvas, etc, and your SMCCD G#. Both of these are important, and it is advised that you note them down somewhere and keep track of them.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Step 4 - Requesting a Class</Accordion.Header>
        <Accordion.Body>
          <p>
            For each concurrent enrollment class you wish to take while you’re at d.tech, you will need to submit a Concurrent Enrollment Course Request Form. To fill out this form, you will need your course’s CRN, Title, and other information. All of this can be found in the description of your course on Webschedule.
          </p>
          <p>
            Required Info -
          </p>
          <p>
            Semester
            School
            CRN (5-digit number found next to the course title on Webschedule)
            Course Title (Ex: CIS 118: Intro to Computer Science)
            Course Type (Hybrid, In-Person, Etc. Found in course description)
            Meeting Time (For Hybrid/In-Person, this is in the course description. For asynchronous courses, identified by no meeting time in course description, enter N/A)
            Meeting Days (N/A for asynchronous courses)
          </p>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Step 5 - Completing the Connection Request Form</Accordion.Header>
        <Accordion.Body>
          <p>
            This form is required for each concurrent enrollment course being taken. Complete the required fields, and submit to concurrentenrollment@dtechhs.org.
          </p>
          <p>
            For any clarifications, refer to the list below -
          </p>
          <p>
            Program - “General Concurrent Enrollment”
            G# - “G[YOUR NUMBER HERE]”
            Subject - Header before course title (Ex: CIS for CIS 118 - Intro to Comp Sci)
            Section - Found in course description
            Units - Found in course description
            Check Boxes on Page 2 - Check all boxes BEFORE submitting form
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Step 6 - Uploading your Connection Request Form</Accordion.Header>
        <Accordion.Body>
          <p>
            After submitting your Connection Request Form to D.tech, you will receive a signed copy of your form. Download this as a PDF, NOT a docx.
          </p>
          <p>
To submit the form, head to the Connection form Page. From here, navigate to My Forms > College Connection Request Form and fill out the required fields. After this, upload your form pdf.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Step 7 - Registering for the Course</Accordion.Header>
        <Accordion.Body>
          <p>
            After your connection request form has been approved, you will receive an email informing you of the approval. After you receive this email, you will have 24 hours to register for your course, so we recommend checking your d.tech email EVERY DAY.
          </p>
          <p>
            After receiving this email, head to Websmart and click on “Registration” on the home page. Scroll down to “Registration - Add/Drop Classes.” Skip through the update information prompts.
          </p>
          <p>
            From here, if your forms have been approved, you will be able to enter your 5-digit CRN and submit your registration. If you receive a message reading,  “You are not permitted to register at this time,” you have not gotten your Connection form approved. Navigate back to steps 5 and 6.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Step 8 - Confirming your registration</Accordion.Header>
        <Accordion.Body>
          <p>
            After successfully registering for your course, take a screenshot of your completed registration on Websmart, and email it to concurrentenrollment@dtechhs.org
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>Step 9 - Submitting transcript</Accordion.Header>
        <Accordion.Body>
          <p>
After your course has ended and you have received your final grades, you must submit an OFFICIAL transcript to records@dtechhs.org for credit. To request an OFFICIAL transcript, navigate to Websmart. From here, head to Student Records > Request Official Transcript
          </p>
          <p>
            Select Electronic Transcript, and provide your personal information.
          </p>
          <p>
            In order options, select “Hold Until Final Grades.” This will ensure that your transcript is not uploaded prematurely.
          </p>
          <p>
            Enter records@dtechhs.org as the recipient, and submit the request
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header>Step 10 - Course Prerequisites (Only if a course has prereqs)</Accordion.Header>
        <Accordion.Body>
          <p>
            If your course has prerequisites, noted in the course description, you will need to upload your D.tech transcript in order to confirm your prerequisites, if you have completed the prereq at D.tech (Ex: Uploading Geometry transcript in order to take Algebra 2 through CCE).
          </p>
          <p>
            CSM - Enter your personal information and upload an unofficial transcript (these are provided by Nicole Cerra through your D.tech email each semester. Look for emails from ncerra@dtechhs.org)
          </p>
          <p>
            Skyline - Enter your personal information and upload an unofficial transcript (these are provided by Nicole Cerra through your D.tech email each semester. Look for emails from ncerra@dtechhs.org)
          </p>
          <p>
            Canada - Email your D.tech transcript to canadaplacement@smccd.edu. In the email, include your transcript, G#, and the course you wish to take
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
