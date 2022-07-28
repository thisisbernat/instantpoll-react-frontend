# InstantPoll 🗳️
#### _Because the only stupid question is the one that is never asked_
InstantPoll is an application to quickly **create**, **configure**, and **share** polls and surveys. It includes different kind of customizable questions (single and multiple choice, ranking, rating, open questions, etc.). After the creations, the polls can be shared and users can submit their answers.

**The application is deployed in Heroku**
https://instantpoll.herokuapp.com/

**Backend repository**
https://github.com/thisisbernat/instantpoll-express-backend

## Frontend
### React routes
| Path            | Route type           | Main component | Behavior                                                       |
| --------------- | -------------------- | ---------------| -------------------------------------------------------------- |
| `/`		      | Public route         | Hero           | Homepage                                                       |
| `/new` 	      | Private route        | NewPoll        | Configure and save/publish a new poll                          |
| `/dashboard`    | Private route        | Dashboard      | Check analytics and manage your polls                          |
| `/poll/:pollId` | Public/Private route | Vote           | Go through all the questions of a poll and submit your answers |
| `/signup`       | Public route         | Signup         | New user register form                                         |
| `/login`        | Public route 	     | Login          | Login form for registered users                                |

### Services
- *Auth services*: login, signup and verification service.
- *Poll services*: CRUD services for polls.
- *Question services*: CRUD services for polls.
- *Answer services*: CRUD services for answers.

### Tech
- [React](https://reactjs.org/) - Frontend JS library to create Single-Page Applications
- [React Router](https://reactrouter.com/) - Client side routing for React
- [Axios](https://axios-http.com/) - Promise based HTTP browser for node.js
##### Other frontend modules
- [Moment.js](https://momentjs.com/) - JS library to format, manipulate and validate dates
- [SweetAlert2](https://www.npmjs.com/package/sweetalert2) - Promise based JS popup boxes
- [Cirrus-UI](https://www.cirrus-ui.com/) - Lightweight UI framework written in SCSS
- [FontAwesome](https://fontawesome.com/) - CSS Icon library

## Backend
### Models
##### User model

```javascript
const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true },
})
```
##### Poll model

```javascript
const pollSchema = new Schema({
    title: String,
    isPublished: Boolean,
    isPublic: Boolean,
    questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
    participantEmails: [{ type: String, lowercase: true, trim: true }],
    duplicationCheck: { type: String, enum: ["none", "session", "ip"] },
    submissions: Number,
    views: Number,
    owner: { type: Schema.Types.ObjectId, ref: "User" }
},
    { timestamps: true }
)
```
##### Question model

```javascript
const questionSchema = new Schema({
    title: String,
    position: Number,
    type: { type: String, enum: ["intro", "single", "multiple", "rating", "open", "ranking", "list", "thanks", "line", "paragraph", "number", "date", "email", "phone"] },
    options: [String],
    message: String,
    buttonText: String,
    ranking: [String],
    parentPoll: { type: Schema.Types.ObjectId, ref: "Poll" },
    isCompulsory: Boolean,
    answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }]
},
    { timestamps: true }
)
```
##### Answer model

```javascript
const answerSchema = new Schema({
    choices: [ String ],
    rating: { type: Number, min: 0, max: 5 },
    ranking: [ String ],
    list: [ String ],
    text: String,
    number: Number,
    date: Date,
    email: String,
    phone: String,
    replierEmail: String,
    parentQuestion: { type: Schema.Types.ObjectId, ref: "Question" }    
},
    { timestamps: true }
)
```
### API Endpoins
### Polls endpoints
| HTTP Verb | URL              | Request body        | Action                                                       |
| --------- | ---------------- | ------------------- | ------------------------------------------------------------ |
| GET       | `/polls/:userId` |                     | Returns all the polls from the specified user                |
| POST      | `/polls`         | { poll }            | Adds a new poll                                              |
| PUT       | `/polls/:pollId` | { poll }            | Edits the specified poll (whole object)                      |
| PATCH     | `/polls/:pollId` | { poll properties } | Edits the specified poll (partial object)                    |
| DELETE    | `/polls/:pollId` |                     | Deletes the specified poll, associated questions and answers |

### Questions endpoints
| HTTP Verb | URL                      | Request body | Action                                            |
| --------- | ------------------------ | ------------ | ------------------------------------------------- |
| GET       | `/questions/:pollId`     |              | Returns all the questions from the specified poll |
| POST      | `/questions`             | { question } | Adds a new question                               |
| PUT       | `/questions/:questionId` | { question } | Edits the specified question                      |
| DELETE    | `/questions/:questionId` |              | Deletes the specified question                    |

### Answers endpoints
| HTTP Verb | URL                  | Request body | Action                       |
| --------- | -------------------- | ------------ | ---------------------------- |
| GET       | `/answers/`          |              | Returns all the answers      |
| GET       | `/answers/:answerId` |              | Returns the specified answer |
| POST      | `/answers`           | { answer }   | Adds a new answer            |
| PUT       | `/answers/:answerId` | { answer }   | Edits the specified answer   |
| DELETE    | `/answers/:answerId` |              | Deletes the specified answer |

### Auth endpoints
| HTTP Verb | URL            | Request body                                       | Action                             |
| --------- | -------------- | -------------------------------------------------- | ---------------------------------- |
| POST      | `/auth/signup` | { email, password, firstname, lastname, username } | Creates new user in DB             |
| POST      | `/auth/login`  | { email, password }                                | Verifies email/pwd and returns JWT |
| GET       | `/auth/verify` |                                                    | Verifies Json Web Token            |

### Tech
- [Express](https://expressjs.com/) - Framework for node.js for WebApps and APIs
- [Mongoose](https://mongoosejs.com/) - MongoDB object modelling
- [node.js](https://nodejs.org/) - JavaScript Engine for the server
- [MongoDB](https://www.mongodb.com/) - NoSQL database with JSON-like documents