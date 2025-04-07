import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";


const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.AUTH_FACEBOOK_ID,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET
    })
  ],
  callbacks:{
    authorized({auth,request}:{auth:any;request:any}){
      return!!auth?.user;
    },
  },
  pages:{
    signIn:"/login",
    // signOut:"/api/auth/signout"
  }
};

export const {
  auth ,
  signIn,
  signOut,
   handlers:{GET,POST}} = NextAuth(authConfig);
