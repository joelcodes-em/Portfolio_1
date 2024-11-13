import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <Image
          src="/profile.jpg?height=200&width=200"
          alt="Joel Benson"
          width={200}
          height={200}
          className="rounded-full border-4 border-white shadow-lg mx-auto mb-8"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Joel Benson</h1>
        <Link href="/resume" passHref>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            View Resume
          </Button>
        </Link>
      </div>
    </div>
  );
}