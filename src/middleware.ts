import { auth } from "./util/auth";

export const middleware = auth;

export const config = {
    matcher : ["/recipes","/account/profile"],
};
