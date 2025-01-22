import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/")({
  component: RouteComponent,
});

import { cn } from "@captsone/ui";
import { Badge } from "@captsone/ui/badge";
import { Button } from "@captsone/ui/button";
import { Card } from "@captsone/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@captsone/ui/carousel";
import { Input } from "@captsone/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@captsone/ui/tabs";
import {
  ActivitySquare,
  AlertCircle,
  BarChart3,
  BellRing,
  Gauge,
  Leaf,
  ShieldCheck,
  Thermometer,
  Timer,
  Wifi,
} from "lucide-react";
import { forwardRef, useEffect, useRef } from "react";

const FeaturesSection = forwardRef<HTMLElement>((_, ref) => {
  const features = [
    {
      title: "Real-time Monitoring",
      description:
        "Track hive conditions 24/7 with instant alerts and notifications",
      icon: ActivitySquare,
      className: "md:col-span-2 md:row-span-2",
    },
    {
      title: "Temperature Control",
      description: "Maintain optimal hive temperature for colony health",
      icon: Thermometer,
    },
    {
      title: "Swarm Detection",
      description: "Early warning system for potential swarming behavior",
      icon: AlertCircle,
    },
    {
      title: "Weight Tracking",
      description: "Monitor honey production and colony strength",
      icon: Gauge,
      className: "md:col-span-2",
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive data visualization and insights",
      icon: BarChart3,
    },
    {
      title: "Sustainable Design",
      description:
        "Built with eco-friendly materials and energy-efficient components",
      icon: Leaf,
      className: "md:col-span-2",
    },
    {
      title: "Smart Alerts",
      description: "Customizable notifications for critical events",
      icon: BellRing,
    },
  ];

  return (
    <section ref={ref} className="py-12 md:py-20">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Intelligent Hive Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={cn("p-6 fade-in", feature.className)}
            >
              <feature.icon className="h-10 w-10 mb-4 text-yellow-500" />
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

const PricingSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="py-12 md:py-20 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Simple, Transparent Pricing
        </h2>
        <Tabs defaultValue="monthly" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto mb-8 border">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="annual">Annual</TabsTrigger>
          </TabsList>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Basic", "Professional", "Enterprise"].map((tier, i) => (
              <Card
                key={tier}
                className={cn("p-6", i === 1 && "border-yellow-500 border-2")}
              >
                <h3 className="font-semibold text-xl mb-2">{tier}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold">
                    ${i === 0 ? "29" : i === 1 ? "79" : "199"}
                  </span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {[
                    <Wifi key="1" className="inline-block w-4 h-4 mr-2" />,
                    <ShieldCheck
                      key="2"
                      className="inline-block w-4 h-4 mr-2"
                    />,
                    <Timer key="3" className="inline-block w-4 h-4 mr-2" />,
                  ].map((icon, index) => (
                    <li key={icon.key} className="flex items-center">
                      {icon}
                      Feature {index + 1}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={i === 1 ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
});

const TestimonialSection = forwardRef<HTMLElement>((_, ref) => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Professional Beekeeper",
      company: "Sweet Valley Apiaries",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      content:
        "This system has revolutionized how I manage my hives. The real-time monitoring has saved countless colonies.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Agricultural Technologist",
      company: "Future Farms Inc.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      content:
        "The analytics capabilities are outstanding. We've improved our honey yield by 40% since implementation.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "Commercial Beekeeper",
      company: "Pollination Plus",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      content:
        "The swarm detection feature alone has paid for the entire system multiple times over.",
      rating: 5,
    },
  ];

  return (
    <section ref={ref} className="py-12 md:py-20">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Trusted by Beekeepers
        </h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name}>
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {testimonial.content}
                  </p>
                  <div className="flex gap-1">
                    {Array(testimonial.rating)
                      .fill(null)
                      .map((_, i) => (
                        <svg
                          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                          key={i}
                          className="w-5 h-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <title>Don't know</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
});

function RouteComponent() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        }
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".fade-in");

    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const featuresRef = useRef<HTMLElement | null>(null);
  const pricingRef = useRef<HTMLElement | null>(null);
  const testimonialsRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
        <div className="container flex h-16 items-center">
          <Button
            onClick={() => {
              heroRef.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            variant="ghost"
            size="lg"
          >
            <span className="font-bold text-xl">BeeGuard</span>
          </Button>
          <div className="flex-1" />
          <div className="flex gap-1">
            <Button
              variant="ghost"
              onClick={() => {
                featuresRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Features
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                pricingRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Pricing
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                testimonialsRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Testimonials
            </Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container flex flex-col items-center text-center gap-4 md:gap-8">
          <Badge variant="secondary" className="animate-fade-in">
            Introducing BeeGuard
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Smart Beekeeping for the
            <span className="text-yellow-500"> Digital Age</span>
          </h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Monitor, protect, and optimize your hives with advanced IoT
            technology. Get real-time insights and alerts to ensure your
            colonies thrive.
          </p>
          <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
            <Button size="lg">Start Free Trial</Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
          <div className="w-full max-w-5xl aspect-video rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf"
              alt="Modern beehive monitoring system"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <FeaturesSection ref={featuresRef} />
      <PricingSection ref={pricingRef} />
      <TestimonialSection ref={testimonialsRef} />

      {/* Footer with Newsletter */}
      <footer className="border-t py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-500 mb-6">
                Get the latest news and updates about smart beekeeping.
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-sm"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/" className="text-gray-500 hover:text-foreground">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-500 hover:text-foreground">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-500 hover:text-foreground">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/" className="text-gray-500 hover:text-foreground">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-500 hover:text-foreground">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-500 hover:text-foreground">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
