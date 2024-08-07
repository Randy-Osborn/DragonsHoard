import Treasure from "./treasure";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900">
      <h1 className="text-7xl/loose font-bold bg-gradient-to-r from-[#b87333] to-[#e5e4e2] bg-clip-text text-transparent">Dragons Hoard</h1>
      <Treasure></Treasure>
    </main>
  );
}
