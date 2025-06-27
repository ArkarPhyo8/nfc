"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center mt-[50px]">
      <div className="space-y-5">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
