import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-800 dark:to-slate-900 transition-colors">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="rounded-2xl bg-slate-800 dark:bg-slate-900 p-8 shadow-xl md:p-12 transition-colors">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Ready to Collaborate?
              </h2>
              <p className="mt-4 text-lg text-slate-200">
                Join thousands of developers collaborating in real-time coding sessions.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-[#818cf8] text-[#0f172a] hover:bg-[#6366f1] text-lg font-semibold shadow"
              >
                <Link href="/create-room">
                  Create a Room
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg border-[#818cf8] text-[#818cf8] hover:bg-[#818cf8]/10 font-semibold"
              >
                <Link href="/browse">
                  Browse Rooms
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}