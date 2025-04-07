


export const metadata = {
  title: "account",
  description: "account details",
};

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto px-4 py-6">
     
      {children}
    </section>
  );
}
