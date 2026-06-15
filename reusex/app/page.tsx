import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const listings = await prisma.listing.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">ReUseX</h1>

          <div className="flex items-center gap-4">
            <Link
              href="/listings/new"
              className="px-4 py-2 bg-black text-white rounded"
            >
              Sell Item
            </Link>

            <Link
              href="/dashboard"
              className="px-4 py-2 border rounded"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="text-6xl font-bold">
          Buy, Sell & Rent Smarter
        </h1>

        <p className="mt-6 text-lg text-gray-500">
          India's trusted marketplace for second-hand products and
          peer-to-peer rentals.
        </p>
      </section>

      {/* Listings */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">
          Latest Listings
        </h2>

        {listings.length === 0 ? (
          <p className="text-gray-500">
            No listings available yet.
          </p>
        ) : (
          <div className="grid gap-4">
            {listings.map((listing) => (
              <Link
                key={listing.id}
                href={`/listings/${listing.id}`}
                className="block border rounded-lg p-4 hover:shadow-lg transition"
              >
                {listing.imageUrl && (
                  <Image
                    src={listing.imageUrl}
                    alt={listing.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold">
                  {listing.title}
                </h3>

                <p className="mt-2">
                  {listing.description}
                </p>

                <p className="font-bold mt-3">
                  ₹{listing.price}
                </p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}