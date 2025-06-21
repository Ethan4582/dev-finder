
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { UsersIcon, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';



const TESTIMONIALS = [
  {
    text: 'DevRoom has completely changed how I collaborate on code. Real-time pairing with screen sharing is a game-changer!',
    imageSrc: '/avatar-1.webp',
    name: 'Alex Rivera',
    username: '@alexdev',
    role: 'Full Stack Developer',
  },
  {
    text: 'Finding other developers working in my stack has never been easier. The language-based room filtering is brilliant.',
    imageSrc: '/avatar-2.webp',
    name: 'Priya Sharma',
    username: '@priyacodes',
    role: 'Frontend Engineer',
  },
  {
    text: 'Our team launched a feature in 2 days using DevRoom. Saved so much time on coordination and pairing.',
    imageSrc: '/avatar-3.webp',
    name: 'Marcus Johnson',
    username: '@marcusbuilds',
    role: 'Tech Lead',
  },
  {
    text: 'The GitHub integration makes it seamless to jump into collaborative coding sessions. Massive productivity boost!',
    imageSrc: '/avatar-4.webp',
    name: 'Sophie Chen',
    username: '@sophie_dev',
    role: 'Open Source Maintainer',
  },
];

export default  function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  
  useEffect(() => {
    if (!emblaApi) return;
    
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    
    return () => {
      clearInterval(autoplay);
    };
  }, [emblaApi]);
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-slate-900">
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
              <UsersIcon className="mr-2 h-4 w-4" />
              Community Voices
            </Badge>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            What Developers Say
          </motion.h2>
        </div>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="min-w-0 flex-[0_0_100%] px-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full rounded-xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="mb-4 text-primary">
                    <Quote className="h-8 w-8 -rotate-180" />
                  </div>
                  
                  <p className="mb-6 text-foreground">
                    {testimonial.text}
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.imageSrc} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
