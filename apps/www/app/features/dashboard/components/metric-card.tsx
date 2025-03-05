import { Card, CardContent, CardHeader, CardTitle } from '@captsone/ui/card';
import { cn } from '@captsone/ui';
import { Skeleton } from '@captsone/ui/skeleton';
import { MetricCardProps } from '../types';

export function MetricCard({
  title,
  value,
  unit,
  trend,
  icon: Icon,
  isLoading,
  error,
}: MetricCardProps) {
  if (error) {
    return (
      <Card className="transition-transform hover:scale-[1.02]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <Icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-red-500">Error loading data</div>
        </CardContent>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card className="transition-transform hover:scale-[1.02]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <Icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-9 w-[100px]" />
          <Skeleton className="mt-4 h-4 w-[60px]" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="transition-transform hover:scale-[1.02]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {value.toFixed(1)} {unit}
        </div>
        <p
          className={cn(
            'mt-2 text-xs',
            trend > 0 ? 'text-green-500' : 'text-red-500'
          )}
        >
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend).toFixed(1)}%
        </p>
      </CardContent>
    </Card>
  );
}