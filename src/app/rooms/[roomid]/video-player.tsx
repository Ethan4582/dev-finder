"use client";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import {
  Call,
  CallControls,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
} from "@stream-io/video-react-sdk";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Room } from "@/db/schema";
import { generateTokenAction } from "./action"; // ✅ Replace hardcoded token

const apiKey = process.env.NEXT_PUBLIC_GET_STREAM_API_KEY!;

export function DevfinderVideo({ room }: { room: Room }) {
  const { data: session } = useSession();
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);

  useEffect(() => {
    if (!session || !room || typeof room.id !== "string") return;

    let active = true;

    const setup = async () => {
      const token = await generateTokenAction(); // ✅ Secure token
      const userId = session.user.id;

      const client = new StreamVideoClient({
        apiKey,
        user: {
          id: userId,
          name: session.user.name ?? undefined,
          image: session.user.image ?? undefined,
        },
        tokenProvider: () => generateTokenAction(),
      //   token,
      });

      const call = client.call("default", room.id);
      await call.join({ create: true });

      if (!active) return;

      setClient(client);
      setCall(call);
    };

    setup();

    return () => {
      active = false;
      call?.leave();
      client?.disconnectUser();
    };
  }, [session, room]);

  if (!client || !call) return null;

  return (
    <StreamVideo client={client}>
      <StreamTheme>
        <StreamCall call={call}>
          <SpeakerLayout />
          <CallControls />
        </StreamCall>
      </StreamTheme>
    </StreamVideo>
  );
}
