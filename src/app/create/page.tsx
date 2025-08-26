import { ClarityApp } from "@/components/clarity-app";
import { Header } from "@/components/header";

export default function CreatePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <ClarityApp />
            </main>
        </div>
    )
}
