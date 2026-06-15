import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function ListingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const listing = await prisma.listing.findUnique({
    where: { id },
  });

  if (!listing) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold">
        {listing.title}
      </h1>

      <p className="mt-6 text-lg">
        {listing.description}
      </p>

      <p className="mt-6 text-3xl font-bold">
        ₹{listing.price}
      </p>
    </main>
  );
}