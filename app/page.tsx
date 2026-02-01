import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4 transition-colors duration-300 dark:bg-slate-950">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <Card className="w-[350px] shadow-lg">
        <CardHeader>
          <CardTitle>Template</CardTitle>
          <CardDescription>My portfolio is under construction.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Current Status: <strong>Building & Deploying</strong>
          </p>
          <Button className="w-full">Notify Me</Button>
        </CardContent>
      </Card>
    </main>
  );
}
