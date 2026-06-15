import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Welcome to ReUseX Dashboard
      </h1>

      <p className="mt-4">
        You are successfully authenticated.
      </p>
    </main>
  );
}