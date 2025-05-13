import { createFileRoute } from '@tanstack/react-router';
import { useState, ChangeEvent } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@captsone/ui/card";
import { Button } from "@captsone/ui/button";
import { Input } from "@captsone/ui/input";
import { Label } from "@captsone/ui/label";
import { Loader2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@captsone/ui/select";
import { useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/add-new-hive')({
  component: RouteComponent,
})

interface HiveFormData {
  name: string;
  rushId: string;
  temperature: string;
  humidity: string;
  population: string;
}

function RouteComponent() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<HiveFormData>({
    name: '',
    rushId: '',
    temperature: '35',
    humidity: '65',
    population: 'medium'
  });

  const handleInputChange = (field: keyof HiveFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const simulateSync = () => {
    setIsLoading(true);
    const randomDelay = Math.floor(Math.random() * 4000) + 1000; // Random delay between 1-5 seconds
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
    }, randomDelay);
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log('Submitted hive data:', formData);
    // Navigate to the all hives page
    navigate({ to: '/all-hives' });
  };

  if (step === 2 && !isLoading) {
    simulateSync();
  }

  return (
    <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-muted/40">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Add New Hive</h1>

        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((stepNumber) => (
            <div
              key={stepNumber}
              className={`flex items-center ${stepNumber < 3 ? 'flex-1' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= stepNumber
                    ? 'bg-amber-500 text-white'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {stepNumber}
              </div>
              {stepNumber < 3 && (
                <div
                  className={`h-1 flex-1 mx-2 ${
                    step > stepNumber ? 'bg-amber-500' : 'bg-muted'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <Card>
          {step === 1 && (
            <>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Enter the hive's name and rush ID</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Hive Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter hive name"
                    value={formData.name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('name', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rushId">Rush ID</Label>
                  <Input
                    id="rushId"
                    placeholder="Enter rush ID"
                    value={formData.rushId}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('rushId', e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => setStep(2)}
                  disabled={!formData.name || !formData.rushId}
                >
                  Next Step
                </Button>
              </CardFooter>
            </>
          )}

          {step === 2 && (
            <>
              <CardHeader>
                <CardTitle>Syncing</CardTitle>
                <CardDescription>Connecting to the hive system...</CardDescription>
              </CardHeader>
              <CardContent className="py-8">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
                  <p className="text-sm text-muted-foreground">
                    Please wait while we sync with your hive...
                  </p>
                </div>
              </CardContent>
            </>
          )}

          {step === 3 && (
            <>
              <CardHeader>
                <CardTitle>Configure Hive</CardTitle>
                <CardDescription>Set up the initial configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="temperature">Target Temperature (°C)</Label>
                  <Input
                    id="temperature"
                    type="number"
                    value={formData.temperature}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('temperature', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="humidity">Target Humidity (%)</Label>
                  <Input
                    id="humidity"
                    type="number"
                    value={formData.humidity}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('humidity', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="population">Initial Population</Label>
                  <Select
                    value={formData.population}
                    onValueChange={(value: string) => handleInputChange('population', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select population size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="space-x-2">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Start Over
                </Button>
                <Button onClick={handleSubmit}>
                  Finalize Setup
                </Button>
              </CardFooter>
            </>
          )}
        </Card>
      </div>
    </main>
  );
}
