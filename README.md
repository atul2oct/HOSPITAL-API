##Information about API:
# HOSPITAL API
 To design an API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients

There can be 2 types of Users

     Doctors

     Patients

Doctors can log in

Each time a patient visits, the doctor will follow 2 steps

      Register the patient in the app (using phone number, if the patient already exists, just return the patient info in the API)

      After the checkup, create a Report

#Patient Report will have the following fields

          Created by doctor

          Status (You can use enums if you want to):

          Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit]

          Date
#Instructions about SetUp:

First start with downloading the code and and write npm install on code editor, it will install all dependencies on your editor. You will need a code editor and mongoDB setup on your computer. We will use postman to check the api is working or not,So download postman on your computer.

1.Now use this http://localhost:3000/doctors/register route to register doctor in API and add the info as shown in image
2.Use this http://localhost:3000/doctors/login to login as a doctor and add info as shown in image
3.Use this http://localhost:3000/patients/register and add the token in authorization area which is recieved in second point
