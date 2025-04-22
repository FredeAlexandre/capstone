import { Sun, Cloud, Droplets, Wind } from 'lucide-react';

export function WeatherWidget() {
  // In a real application, this would fetch real weather data
  const weatherData = {
    temp: 24,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    forecast: [
      { day: 'Thu', temp: 25, condition: 'sunny' },
      { day: 'Fri', temp: 23, condition: 'cloudy' },
      { day: 'Sat', temp: 21, condition: 'rainy' },
      { day: 'Sun', temp: 24, condition: 'cloudy' },
    ]
  };

  const getConditionIcon = (condition: string) => {
    switch(condition) {
      case 'sunny':
        return <Sun className="h-4 w-4 text-amber-500" />;
      case 'rainy':
        return <Droplets className="h-4 w-4 text-blue-500" />;
      case 'cloudy':
      default:
        return <Cloud className="h-4 w-4 text-slate-500" />;
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center">
            <Sun className="h-10 w-10 mr-2 text-amber-500" />
            <div>
              <h3 className="text-2xl font-bold">{weatherData.temp}°C</h3>
              <p className="text-muted-foreground text-sm">
                {weatherData.condition}
              </p>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-foreground font-medium">Orchard Apiary</p>
          <p className="text-xs text-muted-foreground">
            Updated 10 minutes ago
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-muted/40 p-3 rounded-lg">
          <div className="flex items-center gap-2">
            <Droplets className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium">Humidity</span>
          </div>
          <p className="mt-1 text-lg font-semibold">{weatherData.humidity}%</p>
        </div>
        <div className="bg-muted/40 p-3 rounded-lg">
          <div className="flex items-center gap-2">
            <Wind className="h-4 w-4 text-slate-500" />
            <span className="text-sm font-medium">Wind</span>
          </div>
          <p className="mt-1 text-lg font-semibold">{weatherData.windSpeed} km/h</p>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">4-Day Forecast</h4>
        <div className="grid grid-cols-4 gap-2">
          {weatherData.forecast.map((day, idx) => (
            <div key={idx} className="bg-muted/40 p-2 rounded-lg text-center">
              <p className="text-xs font-medium">{day.day}</p>
              <div className="flex justify-center my-1">
                {getConditionIcon(day.condition)}
              </div>
              <p className="text-sm">{day.temp}°</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}