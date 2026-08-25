'use client'

import React, { useState } from 'react'
import { 
  LifeBuoy, Search, BookOpen, MessageSquare, Phone,
  Mail, ExternalLink, ChevronRight, FileText,
  Video, Download, ArrowRight
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

const supportCategories = [
  {
    icon: <BookOpen className="h-6 w-6 text-blue-500" />,
    title: 'Documentation',
    description: 'Comprehensive guides and API references',
    links: ['Getting Started', 'API Reference', 'Integration Guides', 'Best Practices']
  },
  {
    icon: <Video className="h-6 w-6 text-violet-500" />,
    title: 'Video Tutorials',
    description: 'Step-by-step video walkthroughs',
    links: ['Platform Overview', 'Dashboard Tour', 'Setting Up Alerts', 'SHAP Explained']
  },
  {
    icon: <FileText className="h-6 w-6 text-emerald-500" />,
    title: 'Resources',
    description: 'Templates, whitepapers, and case studies',
    links: ['Implementation Guide', 'ROI Calculator', 'Security Whitepaper', 'Compliance Checklist']
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    title: 'Community',
    description: 'Connect with other supply chain professionals',
    links: ['Forums', 'User Groups', 'Webinars', 'Events']
  }
]

const faqs = [
  {
    question: "How do I get started with the platform?",
    answer: "You can start with a free 14-day trial that includes full access to all features. Our onboarding team will help you set up your supplier data and configure initial risk models."
  },
  {
    question: "What integrations are available?",
    answer: "We offer pre-built connectors for SAP, Oracle, Salesforce, ServiceNow, Workday, and 50+ other enterprise platforms. Our REST API also enables custom integrations."
  },
  {
    question: "How does the AI explain its predictions?",
    answer: "Every prediction includes SHAP (SHapley Additive exPlanations) values showing exactly which factors contributed to the risk score and by how much."
  },
  {
    question: "What compliance frameworks do you support?",
    answer: "We provide dedicated tracking for UFLPA, EUDR, CSDDD, GDPR, SOX, REACH, and can customize for additional frameworks upon request."
  },
  {
    question: "How is my data protected?",
    answer: "We're SOC 2 Type II certified, GDPR compliant, and use AES-256 encryption at rest and in transit. Data is hosted in your choice of AWS, Azure, or GCP regions."
  }
]

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 grid-bg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <Badge variant="outline" className="mb-6 gap-2">
            <LifeBuoy className="h-4 w-4" />
            Help & Support
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            How Can We <span className="gradient-text">Help?</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Find answers, connect with experts, and get the most out of your AI Supply Chain platform.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search documentation, FAQs, resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="glass hover:border-primary/50 transition-all cursor-pointer group">
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-3">Available 24/7 for Enterprise plans</p>
                <Button variant="outline" size="sm" className="gap-2">
                  Start Chat
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="glass hover:border-primary/50 transition-all cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Phone className="h-10 w-10 text-emerald-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Phone Support</h3>
                <p className="text-sm text-muted-foreground mb-3">Mon-Fri, 8am-8pm EST</p>
                <Button variant="outline" size="sm" className="gap-2">
                  +1 (888) 555-SUPPLY
                </Button>
              </CardContent>
            </Card>

            <Card className="glass hover:border-primary/50 transition-all cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Mail className="h-10 w-10 text-violet-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground mb-3">Response within 4 hours</p>
                <Button variant="outline" size="sm" className="gap-2">
                  support@aisupplychain.ai
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Resources & Documentation</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, idx) => (
              <Card key={idx} className="glass hover:scale-[1.02] transition-all cursor-pointer group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  
                  <ul className="space-y-2">
                    {category.links.map((link, i) => (
                      <li key={i}>
                        <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link">
                          <ChevronRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card 
                key={idx} 
                className={`glass cursor-pointer transition-all ${openFaq === idx ? 'border-primary' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold pr-4">{faq.question}</h3>
                    <ChevronRight className={`h-5 w-5 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-90' : ''}`} />
                  </div>
                  {openFaq === idx && (
                    <p className="mt-4 text-muted-foreground pt-4 border-t">{faq.answer}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <Badge variant="secondary" className="mb-4">Developers</Badge>
                <h2 className="text-3xl font-bold mb-4">API & Developer Resources</h2>
                <p className="text-muted-foreground max-w-xl">
                  Access our comprehensive API documentation, SDK downloads, and developer guides.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download SDK
                </Button>
                <Button className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View API Docs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
