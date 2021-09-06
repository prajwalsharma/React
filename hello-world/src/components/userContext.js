import React from "react";
import { createContext } from "react";

const UserContext = createContext("World"); // Setting default value to the username

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;

// Context API
// Step 1: Create a context
// Step 2: Define Provider & Consumer
// Step 3: Set Provider on the Parent Component
// Step 4: User Consumer in the child Component
