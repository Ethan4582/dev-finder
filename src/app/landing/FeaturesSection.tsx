import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { CodeIcon, Rocket, Sparkles, UsersIcon, VideoIcon } from 'lucide-react';

const FEATURES = [
	{
		step: 'Step 1',
		title: 'Create a Room',
		content: 'Set up your coding environment with your preferred language and GitHub repo link.',
		icon: <CodeIcon className="h-6 w-6 text-primary" />,
		image: '/feat1.png',
	},
	{
		step: 'Step 2',
		title: 'Invite Developers',
		content: 'Share your room link or let others discover it through our browsing system.',
		icon: <UsersIcon className="h-6 w-6 text-primary" />,
		image: '/feat2.png',
	},
	{
		step: 'Step 3',
		title: 'Collaborate in Real-time',
		content: 'Code together with screen sharing, video chat, and shared editing.',
		icon: <VideoIcon className="h-6 w-6 text-primary" />,
		image: '/feat3.png',
	},
	{
		step: 'Step 4',
		title: 'Deploy Together',
		content: 'Ship your collaborative work directly from the platform to your repo.',
		icon: <Rocket className="h-6 w-6 text-primary" />,
		image: '/feat4.png',
	},
];

export default function FeaturesSection() {
	const [currentFeature, setCurrentFeature] = useState(0);
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	// Auto-scroll logic
	useEffect(() => {
		timerRef.current = setInterval(() => {
			setCurrentFeature((prev) => (prev + 1) % FEATURES.length);
		}, 800);

		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, []);

	// Reset timer on manual click
	const handleFeatureClick = (index: number) => {
		setCurrentFeature(index);
		if (timerRef.current) clearInterval(timerRef.current);
		timerRef.current = setInterval(() => {
			setCurrentFeature((prev) => (prev + 1) % FEATURES.length);
		}, 3500);
	};

	return (
		<section className="py-16 bg-white dark:bg-gray-900">
			<div className="container mx-auto max-w-7xl px-4 md:px-6">
				<div className="mx-auto mb-16 max-w-3xl text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="mb-4"
					>
						<Badge variant="secondary" className="px-4 py-1 text-sm">
							<Sparkles className="mr-2 h-4 w-4" />
							How It Works
						</Badge>
					</motion.div>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
						className="text-3xl font-bold tracking-tight md:text-4xl"
					>
						Developer Collaboration Made Simple
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
						className="mt-4 text-lg text-muted-foreground"
					>
						Join or create coding rooms in seconds and start collaborating immediately
					</motion.p>
				</div>
				<div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-16">
					<div className="space-y-8">
						{FEATURES.map((feature, index) => (
							<motion.div
								key={index}
								className={`flex items-start gap-6 transition-all duration-300 ${
									index === currentFeature
										? 'border-l-4 border-[#818cf8] bg-slate-100 dark:bg-slate-800 shadow-md'
										: 'border-l-4 border-transparent'
								} pl-4 py-3 rounded-lg cursor-pointer`}
								initial={{ opacity: 0.3, x: -20 }}
								animate={{
									opacity: index === currentFeature ? 1 : 0.7,
									x: 0,
								}}
								transition={{ duration: 0.5 }}
								onClick={() => handleFeatureClick(index)}
							>
								<div
									className={`flex h-12 w-12 items-center justify-center rounded-lg border-2 ${
										index === currentFeature
											? 'border-[#818cf8] bg-[#818cf8]/10'
											: 'border-muted bg-muted'
									}`}
								>
									{feature.icon}
								</div>
								<div className="flex-1">
									<h3 className="text-xl font-semibold">{feature.title}</h3>
									<p className="mt-2 text-muted-foreground">
										{feature.content}
									</p>
								</div>
							</motion.div>
						))}
					</div>
					<div className="relative h-[400px] overflow-hidden rounded-xl border border-border shadow-lg flex flex-col items-center justify-center bg-white dark:bg-gray-900">
						<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 pointer-events-none" />
						<img
							src={FEATURES[currentFeature].image}
							alt={FEATURES[currentFeature].title}
							className="absolute inset-0 w-full h-full object-contain rounded-xl z-10"
							draggable={false}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}