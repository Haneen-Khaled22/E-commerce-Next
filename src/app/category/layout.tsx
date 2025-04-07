import { Suspense } from "react";
import Filter from "../_components/Filter";
import Loading from "../loading";

export const metadata = {
  title: "Category",
  description: "Browse recipes by category",
};

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto px-4 py-6">
       <Suspense fallback={<Loading/>}>
       <Filter/>
       </Suspense>
      {children}
    </section>
  );
}
