import "./globals.css";
import Logo from "./_components/logo";
import Navigation from "./_components/Navigation";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import NavWrapper from "./_components/NavWrapper";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/util/auth";

export const metadata = {
  title: "Recipe 4 U",
  discription: "Recipes website",
};

export default async  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  const session = await auth().catch((err) => {
    console.error("Auth Error:", err);
    return null;
 });
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}

        {/* {children} */}
        <SessionProvider session={session}>
          <NavWrapper session={session}>
            {/* <ToastContainer/> */}
            {children}
          </NavWrapper>
        </SessionProvider>
        <Footer/>
        
      </body>
    </html>
  );
}
