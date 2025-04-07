// import { auth } from "@/util/auth";
// import Image from "next/image";
// import React from "react";
// import Nav_Link from "./Nav_Link";

// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "Recipes", href: "/recipes" },
//   { name: "Category", href: "/category" },
//   { name: "Account", href: "/account" },
// ];

// async function Navigation() {
//   const session = await auth();
//   const user = session?.user;

//   const nav = [...navItems];

//   if (user) {
//     nav.push({ name: "Logout", href: "/api/auth/signout" });
//   } else {
//     nav.push({ name: "Login", href: "/api/auth/signin" });
//   }

//   const initial = user?.name?.charAt(0).toUpperCase();

//   return (
//     <nav>
//       <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
//         {nav.map(({ name, href }) => (
//           <li key={name}>
//             <Nav_Link name={name} href={href} />
//           </li>
          
//         ))}

//         {user && (
//           <li>
//             {user.image ? (
//               <Image
//                 src={user.image}
//                 alt={user.name || "User"}
//                 width={40}
//                 height={40}
//                 className="rounded-full w-10 h-10"
//               />
//             ) : (
//               <div
//                 className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-lg shadow"
//                 title={user?.name as string}
//               >
//                 {initial}
//               </div>
//             )}
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// }

// export default Navigation;

"use client";

import Link from "next/link";
import Image from "next/image";


import { Provider, useSelector } from "react-redux";


import { RootState, store } from "@/lib/store";
import { FaHeart, FaUser, } from "react-icons/fa";
import Logo from "./logo";
import Nav_Link from "./Nav_Link";


const navItems = [
  { name: "Home", href: "/" },
  { name: "Recipes", href: "/recipes" },
  { name: "Category", href: "/category" },
  { name: "Account", href: "/account" },

];

// Inner component to use hooks like useSelector
function InnerLayout({ children, session }: { children: React.ReactNode; session: any }) {
  const user = session?.user;

  const nav = [...navItems];

  if (user) {
    nav.push({ name: "Logout", href: "/api/auth/signout" });
  } else {
    nav.push({ name: "Login", href: "/api/auth/signin" });
  }


  
 

  const favcount = useSelector((state: RootState) =>state.fav.items.length);

  const initial = user?.name?.charAt(0).toUpperCase();
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-gray-100 shadow-sm">
        <div className="flex items-center justify-between p-4 max-w-6xl mx-auto">
         
            <Logo/>
         

          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {nav.map(({ name, href }) => (
              // <Link
              //   key={href}
              //   href={href}
              //   className="text-gray-800 hover:text-gray-600 font-medium"
              // >
              //   {name}
              // </Link>
              <div key={name}>
                <Nav_Link name={name} href={href} />
              </div>
            ))}
          </nav>
          <Link href="/favorite" className="text-gray-800 hover:text-gray-600 relative">
  <FaHeart size={24} className="text-gray-800" />
  {favcount > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
      {favcount}
    </span>
)}
</Link>

          {user && (
                   <div>
                     {user.image ? (
                       <Image
                         src={user.image}
                         alt={user.name || "User"}
                         width={40}
                         height={40}
                         className="rounded-full w-10 h-10"
                       />
                     ) : (
                       <div
                         className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-lg shadow"
                         title={user?.name as string}
                       >
                         {initial}
                       </div>
                     )}
                   </div>
                 )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

    
    </div>
  );
}

// Wrap with both Redux and React Query Providers
export default function NavWrapper({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <Provider store={store}>
     
        <InnerLayout session={session}>{children}</InnerLayout>
      
    </Provider>
  );
}