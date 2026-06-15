export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between">
          <h1 className="text-2xl font-bold">ReUseX</h1>
          <div className="space-x-4">
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="text-6xl font-bold">
          Buy, Sell & Rent Smarter
        </h1>

        <p className="mt-6 text-lg text-gray-500">
          India's trusted marketplace for second-hand products and peer-to-peer rentals.
        </p>
      </section>
    </main>
  );
}