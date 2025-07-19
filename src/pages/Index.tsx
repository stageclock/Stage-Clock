import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StageClock from '@/components/StageClock';
import BlogSection from '@/components/BlogSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Timer, Calendar, Square, Maximize, Zap, Shield, Globe } from 'lucide-react';

const Index = () => {
  // SEO and page setup
  useEffect(() => {
    // Update page title and meta description
    document.title = 'Online Stage Clock - Professional Event Timing Solutions';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Professional online stage clock with timer, countdown, and stopwatch features. Perfect for events, performances, and presentations. Free fullscreen timing solution.'
      );
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Online Stage Clock",
      "description": "Professional event timing solutions with clock, timer, countdown and stopwatch features",
      "url": "https://online-stage-clock.com",
      "applicationCategory": "Utility",
      "operatingSystem": "Web Browser",
      "features": [
        "Live Digital Clock",
        "Countdown Timer", 
        "Stopwatch",
        "Fullscreen Mode",
        "Customizable Display"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Professional Stage Clock
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                The ultimate timing solution for events, performances, and presentations. 
                Features live clock, timer, countdown, and stopwatch with fullscreen capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Start Using Now
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  View Features
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Everything You Need for Event Timing</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional-grade timing tools designed for stage managers, event organizers, and performers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Live Digital Clock</h3>
                <p className="text-muted-foreground">
                  High-precision digital clock with customizable display options and 12/24 hour formats.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Timer className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Countdown Timer</h3>
                <p className="text-muted-foreground">
                  Set precise countdown timers for presentations, breaks, and timed segments.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Event Countdown</h3>
                <p className="text-muted-foreground">
                  Count down to specific dates and times for special events and deadlines.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Square className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Precision Stopwatch</h3>
                <p className="text-muted-foreground">
                  Accurate stopwatch for timing performances, speeches, and activities.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Maximize className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Fullscreen Mode</h3>
                <p className="text-muted-foreground">
                  One-click fullscreen mode (press F) for maximum visibility on stage.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Instant Loading</h3>
                <p className="text-muted-foreground">
                  Fast-loading web application that works instantly without installation.
                </p>
              </Card>
            </div>

            {/* Additional Features */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">Reliable & Stable</h3>
                <p className="text-muted-foreground text-sm">
                  Built for mission-critical events with reliable performance and accurate timing.
                </p>
              </Card>

              <Card className="p-6">
                <Globe className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">Cross-Platform</h3>
                <p className="text-muted-foreground text-sm">
                  Works on any device with a web browser - desktop, tablet, or mobile.
                </p>
              </Card>

              <Card className="p-6">
                <Clock className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">Customizable</h3>
                <p className="text-muted-foreground text-sm">
                  Fully customizable colors, fonts, and display options to match your event.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Clock Application */}
        <section className="py-8 bg-secondary/10">
          <div className="container mx-auto px-4">
            <StageClock />
          </div>
        </section>

        {/* Blog Section */}
        <BlogSection />

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Events?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Join thousands of event professionals using Online Stage Clock for their timing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
