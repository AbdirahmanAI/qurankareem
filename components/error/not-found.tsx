'use client';

import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

interface NotFoundProps {
  title?: string;
  message?: string;
}

export default function NotFound({ 
  title = 'Page Not Found',
  message = 'The page you are looking for does not exist or has been moved.'
}: NotFoundProps) {
  return (
    <div className="min-h-[400px] flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-6">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-muted-foreground mb-6">{message}</p>
          <Link href="/" passHref>
            <Button>Return Home</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}