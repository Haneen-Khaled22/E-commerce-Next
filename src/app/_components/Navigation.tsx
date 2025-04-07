// "use client";
// import { auth } from "@/util/auth";
// import Image from "next/image";
// import React from "react";
// import Nav_Link from "./Nav_Link";
// import Link from "next/link";
// import { FaHeart } from "react-icons/fa";
// import { RootState } from "@/lib/store";
// import { useSelector } from "react-redux";


// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "Recipes", href: "/recipes" },
//   { name: "Category", href: "/category" },
//   { name: "Account", href: "/account" },
// ];

// async function Navigation() {
//   const favCount = useSelector((state: RootState) => state.fav.items.length);
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
//         <li>
//         <Link href="/wishlist" className="text-gray-800 hover:text-gray-600 relative">
//   <FaHeart size={24} className="text-red-700" />
//   {favCount > 0 && (
//     <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//       {favCount}
//     </span>)}
// </Link>
//         </li>

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

import { auth } from "@/util/auth";
import Image from "next/image";
import React from "react";
import Nav_Link from "./Nav_Link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Recipes", href: "/recipes" },
  { name: "Category", href: "/category" },
  { name: "Account", href: "/account" },
];

async function Navigation() {
  const session = await auth();
  const user = session?.user;

  const nav = [...navItems];

  if (user) {
    nav.push({ name: "Logout", href: "/api/auth/signout" });
  } else {
    nav.push({ name: "Login", href: "/api/auth/signin" });
  }

  const initial = user?.name?.charAt(0).toUpperCase();

  return (
    <nav>
      <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
        {nav.map(({ name, href }) => (
          <li key={name}>
            <Nav_Link name={name} href={href} />
          </li>
          
        ))}

        {user && (
          <li>
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
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
