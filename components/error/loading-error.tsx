'use client';

import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface LoadingErrorProps {
  message: string;
  onRetry?: () => void;
}

export default function LoadingError({ message, onRetry }: LoadingErrorProps) {
  return (
    <Card className="p-6">
      <div className="text-center">
        <AlertCircle className="h-8 w-8 text-destructive mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">Loading Error</h3>
        <p className="text-muted-foreground mb-4">{message}</p>
        {onRetry && (
          <Button variant="outline" onClick={onRetry}>
            Try Again
          </Button>
        )}
      </div>
    </Card>
  );
}