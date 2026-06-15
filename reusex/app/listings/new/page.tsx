"use client";

import { useState } from "react";
import { createListing } from "@/app/actions/listing-actions";
import ImageUpload from "@/components/ImageUpload";

export default function NewListingPage() {
  const [imageUrl, setImageUrl] = useState("");

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
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          className="w-full border p-3 rounded"
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          className="w-full border p-3 rounded"
          required
        />

        <ImageUpload onUpload={setImageUrl} />

        {imageUrl && (
          <img
            src={imageUrl}
            alt="Preview"
            className="w-full h-64 object-cover rounded"
          />
        )}

        <input
          type="hidden"
          name="imageUrl"
          value={imageUrl}
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