'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart, FileText, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Build Trust Through Transparency
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
            Clarity helps you generate comprehensive, AI-powered transparency reports for your products. Answer a few questions and get a detailed report that you can share with your customers.
          </p>
          <Link href="/create" passHref>
            <Button size="lg">
              Get Started for Free
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">How Clarity Works</h2>
            <p className="text-muted-foreground mt-2">A simple, guided process to build detailed reports.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Answer Questions</h3>
              <p className="text-muted-foreground">
                Our intuitive form guides you through providing key details about your product, from materials to manufacturing.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <BarChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. AI-Powered Summary</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your answers to generate a concise, easy-to-understand summary of your product's transparency.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Share Your Report</h3>
              <p className="text-muted-foreground">
                Receive a professional report that you can share directly with your customers to build trust and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
