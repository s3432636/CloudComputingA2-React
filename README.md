# Playerly React App 

## Overview

[Explain overview here]

### Prerequisites

Before we begin, make sure that you have the following installed first before continuing.

 - Node >= 8.10 and npm >= 5.6
 

## Setup
In termainal navigate to the playerly/react-client folder and run `npm start`

On macOS you'll need to change 
` "start": "start PORT=3006 && react-scripts start", ` 
to    
` "start": "export PORT=3006 && react-scripts start",`
in `package.json`

----

## Redux
The app is now using Redux for managing state. To check the state of the app, you should use the React DevTools extension for [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) or  [Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/) .

Once you've installed the extension, you can hit F12 and select the Redux tab, and you can then see the state of the app. 

After logging in, the Redux store holds the users name, email, and jwt token. 
```
user
     email: 'email' => 'longcyclist@email.com'
     username: 'username' => 'Michaela'
     auth_token: 'token' => 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2Vy…noYkafRAU'
```
We can use these to render the user's name on all the components. I've already set up the `profileheader.jsx` file to make use of state to display the user's name and email, so you can check that for an example.

All components that need to make use of state will need to connect to the store in the imports. 

```javascript
import { connect } from "react-redux";
```
 

You will also need to map the Redux state to the props you will use in the component. For the user functionality we have now this means you will have to add the following after your class definition:

```javascript
function mapStateToProps(state) {
    return {
      user: state.user.username,
      email: state.user.email
    };
  }

export default connect(
  mapStateToProps
)(ProfileHeader);
```
To use these values in the component's render, you will then simply have to use the props like so:

```javascript
 <h4>{this.props.user}</h4>
 <h5>{this.props.email}</h5>
```



