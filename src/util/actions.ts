 "use server"
import { signIn } from "./auth";
import {signOut} from "./auth";

export async function login(){

    await signIn("google", {redirectTo:"/"});
}

export async function loginFacebook(){

    await signIn("facebook", {redirectTo:"/"});
}


export async function signout(){
    await signOut( {redirectTo:"/login"});
}

