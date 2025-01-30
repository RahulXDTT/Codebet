"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Code2 } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Code2 className="w-6 h-6" />
          <span className="font-bold text-lg">CodeBet</span>
        </Link>

        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/challenges">Challenges</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/leaderboard">Leaderboard</Link>
          </Button>
          <ModeToggle />
          <Button>Sign In</Button>
        </div>
      </div>
    </nav>
  );
}