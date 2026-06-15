import { createListing } from "@/app/actions/listing-actions";

export default function NewListingPage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Create Listing
      </h1>

      <form action={createListing} className="space-y-4">
        <input
          name="title"
          type="text"
          placeholder="Title"
          className="w-full border p-3 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          className="w-full border p-3 rounded"
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded"
        >
          Create Listing
        </button>
      </form>
    </main>
  );
}