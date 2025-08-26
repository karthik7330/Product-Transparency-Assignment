'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileText, RefreshCw, Download } from 'lucide-react';
import type { FormData } from './clarity-app';
import jsPDF from 'jspdf';

interface ReportDisplayProps {
  formData: FormData;
  summary: string;
  onReset: () => void;
}

export function ReportDisplay({ formData, summary, onReset }: ReportDisplayProps) {
  const generatePdf = () => {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.getHeight();
    let y = 20; // Current y position on the page

    const checkY = (requiredHeight: number) => {
      if (y + requiredHeight > pageHeight - 20) {
        doc.addPage();
        y = 20;
      }
    };

    doc.setFontSize(22);
    doc.text("Product Transparency Report", 105, y, { align: 'center' });
    y += 15;

    doc.setFontSize(16);
    doc.text("AI Summary", 14, y);
    y += 8;

    doc.setFontSize(12);
    const summaryLines = doc.splitTextToSize(summary, 180);
    checkY(summaryLines.length * 7);
    doc.text(summaryLines, 14, y);
    y += summaryLines.length * 7 + 10;

    doc.setFontSize(16);
    doc.text("Full Details", 14, y);
    y += 10;

    doc.setFontSize(12);
    for (const [question, answer] of Object.entries(formData)) {
      doc.setFont(undefined, 'bold');
      const questionLines = doc.splitTextToSize(`Q: ${question}`, 180);
      checkY(questionLines.length * 7);
      doc.text(questionLines, 14, y);
      y += questionLines.length * 7;

      doc.setFont(undefined, 'normal');
      const answerLines = doc.splitTextToSize(`A: ${answer}`, 175);
      checkY(answerLines.length * 7);
      doc.text(answerLines, 18, y);
      y += answerLines.length * 7 + 8;
    }

    doc.save("transparency-report.pdf");
  };

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 space-y-8">
      <Card className="shadow-2xl shadow-primary/10">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl font-headline">Product Transparency Report</CardTitle>
              <CardDescription>AI-generated summary and full product details.</CardDescription>
            </div>
            <FileText className="h-6 w-6 text-primary" />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold mb-2 text-primary">AI Summary</h3>
            <div className="text-muted-foreground bg-secondary/50 p-4 rounded-md border prose prose-sm max-w-none dark:prose-invert">
              <p>{summary}</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">Full Details</h3>
            <Accordion type="single" collapsible className="w-full">
              {Object.entries(formData).map(([question, answer], index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={onReset}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Start New Report
          </Button>
          <Button onClick={generatePdf} variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
