"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Brain, Code, Database, Network } from "lucide-react";

const topics = [
  { id: "arrays", name: "Arrays & Strings", icon: Code },
  { id: "graphs", name: "Graphs & Trees", icon: Network },
  { id: "dp", name: "Dynamic Programming", icon: Brain },
  { id: "db", name: "Database Design", icon: Database },
];

export default function ChallengesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Choose Your Challenge</h1>
      
      <div className="grid gap-6 mb-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Challenge Settings</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Topic</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                  {topics.map((topic) => (
                    <SelectItem key={topic.id} value={topic.id}>
                      <div className="flex items-center gap-2">
                        <topic.icon className="w-4 h-4" />
                        {topic.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Difficulty</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="mt-6">Start Challenge</Button>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {topics.map((topic) => (
          <Card key={topic.id} className="p-6">
            <topic.icon className="w-8 h-8 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">{topic.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Master {topic.name.toLowerCase()} through practical challenges
            </p>
            <Button variant="outline" className="w-full">
              View Challenges
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}