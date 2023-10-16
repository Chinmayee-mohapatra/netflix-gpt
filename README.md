-- Authentication - Google Firebase
-- Form Handling
-- ChatGPT API -

## Netflix GPT

- Create React App
- Configure Tailwind CSS

### Features

- Login/Signup
  - Sign In/ SignUp form
  - redirect to brose page
- Browse (After authentication)
  - Header
  - Main Movie
    - Trailer
    - Movie title and Description
    - Movie suggestions
      - Movie List \* N
- NetflixGPT
  - Search Bar
  - Movie Suggestions

### Validation to forms

- Formik library : building and managing large forms in React

### useRef

- React Hook that reference a value that's not needed for rendering.

### Firebase authentication

- accesstoken
- uid
- email (data field that we send from the form)

#### Hw:

- run checkValidateData() on UserName input.

### Building a Redux store:

1. Create a Store.
2. Create a Slice.
3. Add slice reducer to the store.
4. Provide the store to the App.

- utils/appStore.js
  - configureStore -> reducer: differenet reducer from different slices.
- utils/userSlice.js

  - createSlice -> name, initialState of User, reducers: different types of reducer function.

- onAuthStateChange API - utility given to us by firebase. This api is called whenever the user signIn/signUp/signOut (auth change) then we can use this api.
  This is kind of an eventListener. This will be called automatically. We can do state changes within this. Implementation on Root level.

  ###

  - If the user is logged in -> redirect to browse page.
  - If the user is not logged in -> redirect to login page.

### <React.StrictMode>

- Make things happen twice as the create-rect-app enclose our App inside <React.StrictMode> </React.StrictMode> in case on local environment
- React does extra rendering for the cmponents to check for inconsistency, in development phase. And if anything goes wrong in the development cycle it throws an error.
