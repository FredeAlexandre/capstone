import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { cn } from '@captsone/ui';

type Task = {
  id: string;
  title: string;
  date: string;
  status: 'completed' | 'pending' | 'overdue';
  hive?: string;
};

const tasks: Task[] = [
  {
    id: '1',
    title: 'Inspect Hive #3',
    date: 'Today, 2:00 PM',
    status: 'pending',
    hive: 'Hive #3'
  },
  {
    id: '2',
    title: 'Harvest Honey',
    date: 'Tomorrow, 10:00 AM',
    status: 'pending',
    hive: 'Hive #1'
  },
  {
    id: '3',
    title: 'Check for Queen Cells',
    date: 'Yesterday, 3:00 PM',
    status: 'completed',
    hive: 'Hive #5'
  },
  {
    id: '4',
    title: 'Treat for Varroa Mites',
    date: '3 days ago',
    status: 'overdue',
    hive: 'Hive #2'
  },
  {
    id: '5',
    title: 'Add Supers',
    date: 'Friday, 11:00 AM',
    status: 'pending',
    hive: 'Hive #4'
  }
];

export function TasksList() {
  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-4 w-4 text-emerald-500" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-amber-500" />;
      case 'overdue':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
    }
  };

  const getStatusStyle = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300';
      case 'pending':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300';
      case 'overdue':
        return 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300';
    }
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      <div className="space-y-2">
        {tasks.map((task) => (
          <div 
            key={task.id} 
            className={cn(
              "p-3 rounded-md border flex items-start gap-3 transition-colors",
              task.status === 'completed' ? 'bg-muted/30' : 'bg-card'
            )}
          >
            <div className="flex-shrink-0 mt-0.5">
              {getStatusIcon(task.status)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className={cn(
                  "font-medium text-sm truncate",
                  task.status === 'completed' && "line-through text-muted-foreground"
                )}>
                  {task.title}
                </h4>
                <span className={cn(
                  "text-xs px-2 py-0.5 rounded-full ml-2 whitespace-nowrap",
                  getStatusStyle(task.status)
                )}>
                  {task.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground truncate">{task.date}</p>
                {task.hive && (
                  <span className="text-xs bg-muted px-2 py-0.5 rounded-full">
                    {task.hive}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="text-xs text-muted-foreground hover:text-primary transition-colors">
          View all tasks
        </button>
      </div>
    </div>
  );
}