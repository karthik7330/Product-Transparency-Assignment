import { Header } from "@/components/header";
import { LandingPage } from "@/components/landing-page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <LandingPage />
      </main>
    </div>
  );
}
