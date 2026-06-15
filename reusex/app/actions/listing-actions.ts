"use server";

import { prisma } from "@/lib/prisma";

export async function createListing(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = Number(formData.get("price"));

  await prisma.listing.create({
    data: {
      title,
      description,
      price,
    },
  });
}