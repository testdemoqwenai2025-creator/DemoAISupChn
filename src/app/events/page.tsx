'use client'

import React from 'react'
import { 
  Calendar, MapPin, Clock, Users, Star,
  ArrowRight, ExternalLink, Video
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const events = [
  {
    type: 'Webinar',
    title: 'AI-Powered Supply Chain Risk Management',
    date: 'September 15, 2026',
    time: '11:00 AM EST',
    location: 'Virtual',
    description: 'Learn how AI is transforming supply chain risk prediction and mitigation strategies.',
    speakers: ['Dr. Sarah Chen', 'Michael Rodriguez'],
    capacity: '500+ registered',
    featured: true
  },
  {
    type: 'Conference',
    title: 'Supply Chain Digital Summit 2026',
    date: 'October 8-10, 2026',
    time: '9:00 AM - 6:00 PM',
    location: 'San Francisco, CA',
    description: '3-day conference featuring keynotes, workshops, and networking with industry leaders.',
    speakers: ['Industry Leaders', 'Tech Innovators'],
    capacity: '2,000 attendees',
    featured: true
  },
  {
    type: 'Workshop',
    title: 'Hands-on: Building SHAP-Explainable AI Models',
    date: 'September 28, 2026',
    time: '2:00 PM EST',
    location: 'Virtual + NYC',
    description: 'Technical deep-dive into implementing explainable AI for supply chain applications.',
    speakers: ['AI Research Team'],
    capacity: '50 spots left',
    featured: false
  },
  {
    type: 'Roundtable',
    title: 'CISO Perspectives: Securing Supply Chains',
    date: 'October 5, 2026',
    time: '12:00 PM EST',
    location: 'Chicago, IL',
    description: 'Executive roundtable on cybersecurity challenges in modern supply chains.',
    speakers: ['CISO Panel'],
    capacity: '30 executives',
    featured: false
  },
  {
    type: 'Webinar',
    title: 'EUDR Compliance: What You Need to Know',
    date: 'September 22, 2026',
    time: '10:00 AM GMT',
    location: 'Virtual (EU)',
    description: 'Expert guidance on European Deforestation Regulation compliance requirements.',
    speakers: ['Compliance Experts', 'Legal Advisors'],
    capacity: '300+ registered',
    featured: false
  }
]

const pastEvents = [
  { name: 'Gartner Supply Chain Symposium', date: 'June 2026', location: 'Orlando, FL' },
  { name: 'MIT SCM Conference', date: 'May 2026', location: 'Cambridge, MA' },
  { name: 'World Economic Forum', date: 'January 2026', location: 'Davos, Switzerland' }
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 grid-bg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <Badge variant="outline" className="mb-6 gap-2">
            <Calendar className="h-4 w-4" />
            Events & Webinars
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            Learn. Connect. <span className="gradient-text">Transform.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join industry leaders, learn from experts, and discover how AI is reshaping supply chain management.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          
          <div className="space-y-6">
            {events.map((event, idx) => (
              <Card key={idx} className={`glass hover:border-primary/50 transition-all ${event.featured ? 'border-primary/30 ring-1 ring-primary/10' : ''}`}>
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-48 flex-shrink-0">
                      <Badge 
                        variant={event.featured ? "default" : "secondary"} 
                        className={`mb-2 ${!event.featured && 'bg-muted'}`}
                      >
                        {event.type}
                      </Badge>
                      <div className="mt-4 p-4 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-lg text-center">
                        <div className="text-2xl font-bold">{event.date.split(',')[0].split(' ')[1]}</div>
                        <div className="text-sm text-muted-foreground">{event.date.split(' ')[0]}</div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground mb-4">{event.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{event.time}</span>
                        <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{event.location}</span>
                        <span className="flex items-center gap-1"><Users className="h-4 w-4" />{event.capacity}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {event.speakers.map((speaker, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{speaker}</Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <Button className="gap-2">
                          {event.location === 'Virtual' || event.location.includes('Virtual') ? (
                            <>
                              <Video className="h-4 w-4" />Register Now
                            </>
                          ) : (
                            <>
                              <ExternalLink className="h-4 w-4" />Get Tickets
                            </>
                          )}
                        </Button>
                        <Button variant="outline" size="sm">Add to Calendar</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Where We've Been</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, idx) => (
              <Card key={idx} className="glass p-6 text-center">
                <Star className="h-8 w-8 text-amber-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-1">{event.name}</h3>
                <p className="text-sm text-muted-foreground">{event.date}</p>
                <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
                  <MapPin className="h-3 w-3" />{event.location}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="glass glow-emerald p-12">
            <Calendar className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Host an Event With Us</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Interested in partnering for a private workshop or custom training session?
            </p>
            <Button size="lg" className="gap-2 px-8">
              Contact Events Team
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Card>
        </div>
      </section>
    </div>
  )
}
