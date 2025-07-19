import React from 'react';
import { Card } from '@/components/ui/card';
import { Clock, Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Evolution of Digital Clocks: From LED to Smart Displays",
    excerpt: "Explore how digital clock technology has transformed from simple LED displays to sophisticated smart timing systems used in professional events.",
    author: "Alex Thompson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Technology"
  },
  {
    id: 2,
    title: "Mastering Event Timing: Best Practices for Stage Managers",
    excerpt: "Learn professional techniques for managing event timing, including backup systems, visual cues, and coordination with performers.",
    author: "Sarah Chen",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Event Management"
  },
  {
    id: 3,
    title: "The Psychology of Time Perception in Live Performances",
    excerpt: "Understanding how audiences perceive time during live events and how proper timing enhances the overall experience.",
    author: "Dr. Michael Roberts",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Psychology"
  },
  {
    id: 4,
    title: "Countdown Timers: Building Anticipation in Marketing Events",
    excerpt: "How countdown timers create urgency and excitement in product launches, sales events, and marketing campaigns.",
    author: "Emma Wilson",
    date: "2024-01-08",
    readTime: "4 min read",
    category: "Marketing"
  },
  {
    id: 5,
    title: "Technical Requirements for Large-Scale Event Timing Systems",
    excerpt: "A comprehensive guide to the hardware and software requirements for timing systems in large venues and outdoor events.",
    author: "David Kim",
    date: "2024-01-05",
    readTime: "8 min read",
    category: "Technical"
  },
  {
    id: 6,
    title: "Accessibility in Digital Clock Design: Inclusive Timing Solutions",
    excerpt: "Designing timing displays that work for everyone, including considerations for visually impaired users and different lighting conditions.",
    author: "Lisa Rodriguez",
    date: "2024-01-03",
    readTime: "5 min read",
    category: "Accessibility"
  },
  {
    id: 7,
    title: "The History of Timekeeping in Theater and Performance",
    excerpt: "From ancient sundials to modern digital displays, discover how timekeeping has shaped theatrical performances throughout history.",
    author: "Professor James Brown",
    date: "2024-01-01",
    readTime: "9 min read",
    category: "History"
  },
  {
    id: 8,
    title: "Stopwatch Precision: When Every Millisecond Counts",
    excerpt: "Understanding the importance of precise timing in sports, competitions, and time-critical events.",
    author: "Maria Gonzalez",
    date: "2023-12-28",
    readTime: "6 min read",
    category: "Sports"
  },
  {
    id: 9,
    title: "Color Psychology in Clock Design: Beyond Black and White",
    excerpt: "How color choices in digital displays affect readability, attention, and psychological response in different environments.",
    author: "Dr. Rachel Green",
    date: "2023-12-25",
    readTime: "5 min read",
    category: "Design"
  },
  {
    id: 10,
    title: "Synchronizing Multiple Displays: Network Clock Systems",
    excerpt: "Technical approaches to keeping multiple timing displays synchronized across large venues and multiple locations.",
    author: "Thomas Anderson",
    date: "2023-12-22",
    readTime: "7 min read",
    category: "Technical"
  },
  {
    id: 11,
    title: "Mobile vs Desktop: Optimizing Clock Interfaces for Different Devices",
    excerpt: "Design considerations and user experience principles for timing applications across various screen sizes and devices.",
    author: "Jennifer Lee",
    date: "2023-12-20",
    readTime: "4 min read",
    category: "UX Design"
  },
  {
    id: 12,
    title: "Emergency Timing Protocols: Backup Systems for Critical Events",
    excerpt: "Essential backup procedures and redundant timing systems for mission-critical events and emergency situations.",
    author: "Captain Robert Hayes",
    date: "2023-12-18",
    readTime: "8 min read",
    category: "Safety"
  },
  {
    id: 13,
    title: "The Science of Atomic Clocks and Precision Timing",
    excerpt: "Understanding how atomic clocks work and their role in providing the ultimate timing reference for digital systems.",
    author: "Dr. Patricia Moore",
    date: "2023-12-15",
    readTime: "10 min read",
    category: "Science"
  },
  {
    id: 14,
    title: "Cultural Differences in Time Perception and Display Preferences",
    excerpt: "How different cultures perceive and display time, and considerations for international events and global audiences.",
    author: "Dr. Ahmed Hassan",
    date: "2023-12-12",
    readTime: "6 min read",
    category: "Culture"
  },
  {
    id: 15,
    title: "Integration with Event Management Software: API and Automation",
    excerpt: "How modern timing systems integrate with event management platforms through APIs and automated workflows.",
    author: "Kevin O'Connor",
    date: "2023-12-10",
    readTime: "7 min read",
    category: "Integration"
  },
  {
    id: 16,
    title: "Typography in Digital Clock Design: Readability at a Distance",
    excerpt: "Choosing the right fonts and typography for digital clocks that need to be readable from various distances and angles.",
    author: "Sofia Patel",
    date: "2023-12-08",
    readTime: "5 min read",
    category: "Typography"
  },
  {
    id: 17,
    title: "Energy Efficiency in Digital Display Systems",
    excerpt: "Optimizing power consumption in digital timing displays for sustainable events and reduced operational costs.",
    author: "Dr. Mark Stevens",
    date: "2023-12-05",
    readTime: "6 min read",
    category: "Sustainability"
  },
  {
    id: 18,
    title: "Real-Time Analytics: Tracking Timing Performance in Events",
    excerpt: "Using data analytics to optimize event timing, track performance metrics, and improve future events.",
    author: "Anna Chen",
    date: "2023-12-03",
    readTime: "7 min read",
    category: "Analytics"
  },
  {
    id: 19,
    title: "Weather-Resistant Displays for Outdoor Events",
    excerpt: "Technical considerations and solutions for timing displays that must function reliably in various weather conditions.",
    author: "Jake Morrison",
    date: "2023-12-01",
    readTime: "5 min read",
    category: "Hardware"
  },
  {
    id: 20,
    title: "The Future of Timing Technology: AI and Predictive Systems",
    excerpt: "Exploring how artificial intelligence and machine learning are revolutionizing timing systems and event management.",
    author: "Dr. Samantha Blake",
    date: "2023-11-28",
    readTime: "8 min read",
    category: "AI/Future Tech"
  },
  {
    id: 21,
    title: "Building Custom Clock Applications: A Developer's Guide",
    excerpt: "Step-by-step guide for developers looking to create custom timing applications with modern web technologies.",
    author: "Chris Parker",
    date: "2023-11-25",
    readTime: "12 min read",
    category: "Development"
  },
  {
    id: 22,
    title: "Sound and Visual Cues: Multi-Sensory Timing Systems",
    excerpt: "Combining audio and visual elements in timing systems to create more effective communication with performers and audiences.",
    author: "Maya Rodriguez",
    date: "2023-11-22",
    readTime: "6 min read",
    category: "Audio-Visual"
  },
  {
    id: 23,
    title: "Time Zone Management in Global Virtual Events",
    excerpt: "Strategies for managing timing across multiple time zones in virtual and hybrid events with global audiences.",
    author: "Oliver Smith",
    date: "2023-11-20",
    readTime: "7 min read",
    category: "Global Events"
  },
  {
    id: 24,
    title: "Minimalist Clock Design: The Power of Simplicity",
    excerpt: "Why less is more in clock design and how minimalist approaches improve usability and reduce cognitive load.",
    author: "Isabella Garcia",
    date: "2023-11-18",
    readTime: "4 min read",
    category: "Design Philosophy"
  },
  {
    id: 25,
    title: "The Economics of Professional Timing Systems",
    excerpt: "Cost-benefit analysis of investing in professional timing systems for event organizers and venue managers.",
    author: "Robert Johnson",
    date: "2023-11-15",
    readTime: "9 min read",
    category: "Business"
  }
];

const BlogSection: React.FC = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Clock & Timing Blog</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert insights, technical guides, and industry trends in digital timing and event management.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="p-6">
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                  {post.category}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <span className="text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
                    Read Article
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">More articles coming soon...</p>
          <div className="text-sm text-muted-foreground">
            Stay updated with the latest in timing technology and event management.
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;