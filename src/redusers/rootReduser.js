import { signInReduser } from "./signInReduser";
import { signUpReduser } from "./signUpReduser";
import { jobReduser } from "./jobReduser";
import { msgReducer } from "./msgReduser";

export  const rootReduser = {
    signIn: signInReduser,
    signUp: signUpReduser,
    job: jobReduser,
    msg:msgReducer,
}