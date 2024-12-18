[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=15961596)
# About this project

This is the codebase of the backend of the dictionary application. It's inherited from the Todos app project (only the backend).

You will need to modify the code to work with the dictionary application. By the end of this project, you will have a fully functional backend that can handle all the CRUD operations for the dictionary application, including:

* Adding a new word: POST /words
* Getting all words: GET /words
* Deleting a word: DELETE /words/:id

You will need to modify the code to work with the dictionary application. To run the backend, you need to follow the following steps:

1. install all the dependencies by running `npm install`
2. configure your MongoDB database, and copy/paste the connection string into the `.env` file. In other words, you need to replace the `ATLAS_URI` value with your own connection string. When doing so, please make sure that you have replaced the `<username>`, `<password>`, and `<database>` parts with your own.
3. start the backend by runnning `npm start`.
