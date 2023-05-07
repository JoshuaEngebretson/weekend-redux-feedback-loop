# Base-Mode

- [X] / (feeling page)
  - dispatch to redux
  - input validation
  - path to /understanding page

- [X] /understanding page
  - dispatch to redux
  - input validation
  - path to /support page

- [X] /support page
  - dispatch to redux
  - input validation
  -path to /comments page

- [X] /comments page
  - optional
  - dispatch to redux
  - path to /review/feedback page

- [X] /review/feedback page
  - POST to database
  - path to /success page

- [X] /success page
  - path to / (feeling page)
    - resets redux currentFeedback

- [X] Write README.md

# Stretch Goals

- [X] Refactor Redux out of Index.js
  - [X] Refactor Reducers out of Index.js
  - [X] Refactor Store out of Index.js

- [ ] Allow users to Update scores
  - Edit on review screen (AND / OR back button)
  - still need input validation (no empty input)

- [X] Material-Ui
  - [X] in form of TextField
  - [ ] buttons?
  - [ ] NavBar?
  - [ ] Icons?
  - [ ] snackbar? Not sure what this is
  - [ ] cards?

- [ ] Admin Section
  - located at '/admin'
  - [ ] displays all the existing feedback (pulled from the database)
    - Ordered by most recent at top
  - [ ] allow admin to delete feedback from the database
    - prompt for confirmation before deletion

- [ ] Deploy to Heroku