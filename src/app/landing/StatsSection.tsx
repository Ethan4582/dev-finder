import { Clock, CodeIcon, TerminalIcon, UsersIcon } from "lucide-react";
import { motion } from "framer-motion";
import { NumberTicker } from "@/components/magicui/number-ticker";


export default function StatsSection() {
  const stats = [
    {
      value: 10,
      label: 'Active Developers',
      icon: <UsersIcon className="h-5 w-5" />,
      delay: 0,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      value: 120,
      label: 'Collaboration Hours',
      icon: <Clock className="h-5 w-5" />,
      delay: 0.1,
      color: 'from-purple-500 to-violet-500',
    },
    {
      value: 8,
      label: 'Projects Shared',
      icon: <CodeIcon className="h-5 w-5" />,
      delay: 0.2,
      color: 'from-indigo-500 to-blue-500',
    },
    {
      value: 12,
      label: 'Languages Supported',
      icon: <TerminalIcon className="h-5 w-5" />,
      delay: 0.3,
      color: 'from-cyan-500 to-emerald-500',
    },
  ];
  
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-slate-900">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: stat.delay }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${stat.color}`}>
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    <NumberTicker value={stat.value} />
                    {index === 0 && '+'}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}