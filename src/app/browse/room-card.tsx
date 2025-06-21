"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Room } from "@/db/schema";
import { GithubIcon } from "lucide-react";
import TagList from "@/components/tag-list";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <Card>
  <CardHeader>
    <CardTitle>{String(room.name)}</CardTitle>
    <CardDescription>{String(room.description)}</CardDescription>
  </CardHeader>
  <CardAction>
    <div className="flex   items-center justify-between px-4 py-2">
      <TagList
        languages={String(room.language)
          .split(",")
          .map((lang: string) => lang.trim())}
      />
    </div>
  </CardAction>

  
  <CardContent>
    {room.githubRepo && (
      <Link
        href={String(room.githubRepo)}
        className="flex items-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
        Github Link
      </Link>
    )}
  </CardContent>


  <CardFooter>
    <Button asChild>
      <Link href={`/rooms/${room.id}`}>Join Room</Link>
    </Button>
  </CardFooter>
</Card>
  );
}