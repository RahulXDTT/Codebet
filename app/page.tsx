"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Trophy, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
          Master DSA Through Challenges
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Challenge yourself with coding problems, place bets on your success, and contribute to charity while improving your skills.
        </p>
        <div className="flex gap-4 justify-center mb-16">
          <Button size="lg" asChild>
            <Link href="/challenges">Start Coding</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/leaderboard">View Leaderboard</Link>
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 flex flex-col items-center text-center">
            <Code2 className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Practice DSA</h3>
            <p className="text-muted-foreground">
              Access a curated collection of coding challenges across various difficulty levels.
            </p>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center">
            <Trophy className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Compete & Win</h3>
            <p className="text-muted-foreground">
              Place bets on your success and win rewards for completing challenges.
            </p>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center">
            <Users className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Give Back</h3>
            <p className="text-muted-foreground">
              Lost bets contribute to charitable causes, making every attempt meaningful.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}