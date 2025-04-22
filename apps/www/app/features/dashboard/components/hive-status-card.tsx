import { ElementType } from 'react';
import { Card, CardContent } from "@captsone/ui/card";
import { cn } from "@captsone/ui";

interface HiveStatusCardProps {
  title: string;
  value: string;
  description: string;
  icon: ElementType;
  trend: string;
  trendUp: boolean;
  trendType?: 'default' | 'success' | 'warning' | 'destructive';
}

export function HiveStatusCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  trendUp,
  trendType = 'default'
}: HiveStatusCardProps) {
  const getTrendColor = () => {
    if (trendType === 'success') return 'text-emerald-600 dark:text-emerald-400';
    if (trendType === 'warning') return 'text-amber-600 dark:text-amber-400';
    if (trendType === 'destructive') return 'text-red-600 dark:text-red-400';
    return trendUp 
      ? 'text-emerald-600 dark:text-emerald-400' 
      : 'text-muted-foreground';
  };

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-x-2">
          <div className="bg-primary-foreground dark:bg-muted p-2 rounded-md">
            <Icon className="h-5 w-5 text-amber-500" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-muted-foreground mb-1">
              {title}
            </div>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {description}
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center text-xs">
          <span className={cn('flex items-center', getTrendColor())}>
            {trendUp ? '↑' : '↓'} {trend}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}