# AQA-ChatTest
This project is a web application built with React for the frontend and integrated with Firebase for backend services, including authentication, database, and storage. The application leverages automated testing to ensure reliability and quality. Cucumber is used for behavior-driven development (BDD) tests, allowing for clear and understandable test scenarios. WebdriverIO is utilized to manage selectors and perform actions on the web elements during test execution.

## Project Structure

```
project/
├── automatedTest/
│   ├── features/
│   │   ├── PageObjects.js
│   │   └── utils.js
│   ├── steps-definitions/
│   │   └── styles.css
│   └── chat.features
│   └── login.features
│   ├── wdio.conf.js
│   └── package.json
├── lib/
│   │   ├── chatStore.js
│   │   └── firebase.js
│   │   └── userStore.js
├── public/
├── src/
│   ├── Components/
│   │   ├── chats/
│   │   └── list/
│   │   └── login/
│   │   └── notifications/
│   └── App.jsx
│   └── Main.jsx
│   └── index.css
├── README.md
└── package.json
```


## Getting Started


### Dependecies 

    Node version 20. 

### Running the Application

1. Clone the repository or download the source code.

   ```sh
   git clone https://github.com/Fenmora/AQA-ChatTest.git

2. To run project Web
    - Go to folder automatedTest
    - install the project 
     ```sh
    npm i
    ```
    - Run the project 
     ```sh
     npm run dev


3. To run the automation 
    - Go to folder automatedTest
    - install the project 
     ```sh
    npm i
     ```
    - Run the project 
     ```sh
     npm run wdio
      ```

## Getting Started
If you have any questions or feedback, you can contact me at [fenmora@gmail.com]
