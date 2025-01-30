"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Award, Trophy } from "lucide-react";

const leaderboardData = [
  { rank: 1, name: "Alex Johnson", solved: 156, donated: "$1,240" },
  { rank: 2, name: "Sarah Chen", solved: 142, donated: "$980" },
  { rank: 3, name: "Mike Peters", solved: 137, donated: "$850" },
  { rank: 4, name: "Emma Wilson", solved: 125, donated: "$720" },
  { rank: 5, name: "David Kim", solved: 118, donated: "$690" },
];

export default function LeaderboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        <Trophy className="w-8 h-8 text-primary" />
        <h1 className="text-3xl font-bold">Leaderboard</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card className="p-6 flex items-center gap-4">
          <Award className="w-8 h-8 text-primary" />
          <div>
            <h3 className="font-semibold">Total Problems Solved</h3>
            <p className="text-2xl font-bold">678</p>
          </div>
        </Card>
        <Card className="p-6 flex items-center gap-4">
          <Award className="w-8 h-8 text-primary" />
          <div>
            <h3 className="font-semibold">Active Users</h3>
            <p className="text-2xl font-bold">245</p>
          </div>
        </Card>
        <Card className="p-6 flex items-center gap-4">
          <Award className="w-8 h-8 text-primary" />
          <div>
            <h3 className="font-semibold">Total Donated</h3>
            <p className="text-2xl font-bold">$4,480</p>
          </div>
        </Card>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-20">Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Problems Solved</TableHead>
              <TableHead className="text-right">Amount Donated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.map((user) => (
              <TableRow key={user.rank}>
                <TableCell className="font-medium">{user.rank}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell className="text-right">{user.solved}</TableCell>
                <TableCell className="text-right">{user.donated}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}