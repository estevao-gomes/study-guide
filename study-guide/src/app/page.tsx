import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mt-8">
      <h1 className="text-3xl my-4">Study Guide</h1>
      <div className="border border-red-400 rounded-md w-full">Menu</div>
      <div className="w-full p-4 border border-green-400 rounded-md">
        Container
      </div>
    </main>
  );
}
