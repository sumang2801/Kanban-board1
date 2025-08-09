import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Kanban Board</h1>
      <Button variant="default">Click Me (Shadcn Button)</Button>
    </main>
  );
}