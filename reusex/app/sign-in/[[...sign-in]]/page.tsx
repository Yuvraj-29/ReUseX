import { SignIn } from "@clerk/nextjs";

export default function Page() {
  console.log("SIGN IN PAGE LOADED");

  return (
    <div>
      <h1>Before Clerk</h1>
      <SignIn />
      <h1>After Clerk</h1>
    </div>
  );
}