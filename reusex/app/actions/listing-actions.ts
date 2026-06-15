"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

export async function createListing(formData: FormData) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = Number(formData.get("price"));

  await prisma.listing.create({
    data: {
      title,
      description,
      price,
      sellerId: userId,
      const imageUrl = formData.get("imageUrl") as string;
      imageUrl,
    },
  });
}