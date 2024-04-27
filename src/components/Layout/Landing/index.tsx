import Header from "./Header";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-fare-play bg-cover bg-black bg-no-repeat bg-top-center lg:min-h-screen">
      <div className="px-3 pt-3.5 md:px-9 md:pt-9">
        <Header />
      </div>
      <div className="lg:p-24 flex flex-col bg-gradient-to-b">{children}</div>
    </main>
  );
}
