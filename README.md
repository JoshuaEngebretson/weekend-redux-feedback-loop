# Redux Feedback Loop (W11)
## Description
Duration 05/04/23-05/07/23 weekend project.

Created a multi-page feedback form. This would allow a given individual or business to check in with their students on content that they are learning.

-----
<!-- ## Screen Shot

----- -->
## Prerequisites

- [Node.js](https://nodejs.org/en/)
    - This is for hosting the server and communicating with the database.
- [PostgreSQL](https://www.postgresql.org/)
    - This is used for hosting the database.
- [Postico](https://eggerapps.at/postico/v1.php)
    - This is used to set up your initial test database.

-----
## Installation

1. Node Module
    1. Once Node is installed with the link located in the Prerequisites, you will need to perform the following command within your terminal `npm install`
        -  This will install the node_modules folder which includes the dependencies for the app.

2. Set up your database
    1. Using Postico, create a database titled `prime_feedback`.
    2. Use the database.sql file to enter your initial starting data into your database.

3. You will need two terminals to operate the app properly.
    1. The first you will run the command `npm run server`
        - This will host the server on [localhost:5000](http://localhost:5000/)
    2. The second you will run the command `npm run client`
        - This should open up your browser on [localhost:3000](http://localhost:3000/)

-----
## Usage
Once the page is open, you should be greeted with the first question "How are you feeling today?"

1. To proceed to the next page, you need to enter a number between 1 and 5 within the input field 

2. You can then either click on the `Next` button OR hit enter on your keyboard to proceed to the next page.

3. Repeats steps 1 and 2 until you reach the Comments page.
    - The input field on this page is optional.
        - There is no minimum or maximum length to your comment should you choose to leave one.
    - You can click on the `Next` button on this page without entering any information into the input field.

4. The next page is your chance to review your Feedback before submitting.
    - Once you are satisfied with your answers, you would click on the `Submit` button to proceed.

5. On a successful submission you are brought to a thank you page, with the option of clicking on a new button to `Leave New Feedback`
    - If you choose to click on this button, you would repeat steps 1-4.
    - Otherwise your have now completed the feedback process.

-----
## Built With

- Node.js
- React.js
- Redux.js
- PostgreSQL
- Postico

-----
## Acknowledgement

  - Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

  - Thanks to S2SDC for allowing me the time to program this application while I was also taking part in a tech/dress rehearsal and 2 dance performances.

-----
## Support
If you have suggestions or issues, please email me [here](mailto:joshua.engebretson@gmail.com).
