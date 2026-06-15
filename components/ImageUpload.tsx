"use client";

import { CldUploadWidget } from "next-cloudinary";

export default function ImageUpload({
  onUpload,
}: {
  onUpload: (url: string) => void;
}) {
  return (
    <CldUploadWidget
      uploadPreset="reusex"
      onSuccess={(result: any) => {
        onUpload(result.info.secure_url);
      }}
    >
      {({ open }) => (
        <button
          type="button"
          onClick={() => open()}
          className="border px-4 py-2 rounded"
        >
          Upload Image
        </button>
      )}
    </CldUploadWidget>
  );
}
