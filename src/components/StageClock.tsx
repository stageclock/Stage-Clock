import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ClockCustomizer from './ClockCustomizer';
import { 
  Clock, 
  Timer, 
  Hourglass, 
  Square, 
  Play, 
  Pause, 
  RotateCcw, 
  Maximize, 
  Settings,
  Plus,
  Minus,
  Palette
} from 'lucide-react';

interface ClockSettings {
  textColor: string;
  backgroundColor: string;
  fontSize: number;
  is24Hour: boolean;
  fontFamily: string;
  backgroundImage: string;
  template: string;
}

interface StageClockProps {
  initialMode?: 'clock' | 'timer' | 'countdown' | 'stopwatch';
}

const StageClock: React.FC<StageClockProps> = ({ initialMode = 'clock' }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeMode, setActiveMode] = useState<'clock' | 'timer' | 'countdown' | 'stopwatch'>(initialMode || 'clock');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [clockSettings, setClockSettings] = useState<ClockSettings>({
    textColor: '#ffffff',
    backgroundColor: '#1a1a1a',
    fontSize: 120,
    is24Hour: true,
    fontFamily: 'font-mono',
    backgroundImage: '',
    template: 'Classic Digital',
  });

  // Timer states
  const [timerSeconds, setTimerSeconds] = useState(300); // 5 minutes default
  const [timerRunning, setTimerRunning] = useState(false);

  // Countdown states
  const [countdownTarget, setCountdownTarget] = useState<Date | null>(null);

  // Stopwatch states
  const [stopwatchSeconds, setStopwatchSeconds] = useState(0);
  const [stopwatchRunning, setStopwatchRunning] = useState(false);

  // Update current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => {
          if (prev <= 1) {
            setTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerSeconds]);

  // Stopwatch logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (stopwatchRunning) {
      interval = setInterval(() => {
        setStopwatchSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [stopwatchRunning]);

  // Fullscreen and keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'f' || event.key === 'F') {
        event.preventDefault();
        toggleFullscreen();
      }
      if (event.key === 'Escape') {
        exitFullscreen();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  const toggleFullscreen = async (): Promise<void> => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error('Fullscreen error:', error);
    }
  };

  const exitFullscreen = async (): Promise<void> => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error('Exit fullscreen error:', error);
    }
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('en-US', {
      hour12: !clockSettings.is24Hour,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatDuration = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getCountdownDisplay = (): string => {
    if (!countdownTarget) return '00:00:00';
    
    const now = new Date();
    const diff = countdownTarget.getTime() - now.getTime();
    
    if (diff <= 0) return '00:00:00';
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSetCountdownTarget = (): void => {
    const targetTime = prompt('Enter countdown target time (HH:MM format):');
    if (targetTime) {
      const [hours, minutes] = targetTime.split(':').map(Number);
      const target = new Date();
      target.setHours(hours, minutes, 0, 0);
      
      if (target.getTime() <= Date.now()) {
        target.setDate(target.getDate() + 1);
      }
      
      setCountdownTarget(target);
    }
  };

  const renderMainDisplay = () => {
    const containerStyle: React.CSSProperties = {
      backgroundColor: clockSettings.backgroundImage ? 'transparent' : clockSettings.backgroundColor,
      backgroundImage: clockSettings.backgroundImage ? `url(${clockSettings.backgroundImage})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: clockSettings.textColor,
      fontSize: `${clockSettings.fontSize}px`,
      minHeight: isFullscreen ? '100vh' : '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      fontFamily: clockSettings.fontFamily === 'font-mono' ? 'monospace' : 
                  clockSettings.fontFamily === 'font-serif' ? 'serif' : 'sans-serif',
      fontWeight: 'bold',
      letterSpacing: '0.1em',
    };

    return (
      <div style={containerStyle} className={`rounded-lg border ${clockSettings.fontFamily}`}>
        <div className="text-center">
          {activeMode === 'clock' && (
            <div>
              <div className="mb-2">{formatTime(currentTime)}</div>
              <div style={{ fontSize: `${clockSettings.fontSize * 0.3}px` }}>
                {formatDate(currentTime)}
              </div>
            </div>
          )}
          
          {activeMode === 'timer' && (
            <div>
              <div className="mb-4">{formatDuration(timerSeconds)}</div>
              <div className="flex justify-center gap-4" style={{ fontSize: '24px' }}>
                <Button 
                  onClick={() => setTimerRunning(!timerRunning)}
                  size="lg"
                  variant={timerRunning ? "destructive" : "default"}
                >
                  {timerRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </Button>
                <Button onClick={() => setTimerSeconds(0)} size="lg" variant="outline">
                  <RotateCcw className="w-6 h-6" />
                </Button>
                <Button 
                  onClick={() => setTimerSeconds(prev => Math.max(0, prev - 60))} 
                  size="lg" 
                  variant="outline"
                >
                  <Minus className="w-6 h-6" />
                </Button>
                <Button 
                  onClick={() => setTimerSeconds(prev => prev + 60)} 
                  size="lg" 
                  variant="outline"
                >
                  <Plus className="w-6 h-6" />
                </Button>
              </div>
            </div>
          )}
          
          {activeMode === 'countdown' && (
            <div>
              <div className="mb-4">{getCountdownDisplay()}</div>
              <div className="flex justify-center gap-4" style={{ fontSize: '24px' }}>
                <Button onClick={handleSetCountdownTarget} size="lg">
                  Set Target
                </Button>
              </div>
            </div>
          )}
          
          {activeMode === 'stopwatch' && (
            <div>
              <div className="mb-4">{formatDuration(stopwatchSeconds)}</div>
              <div className="flex justify-center gap-4" style={{ fontSize: '24px' }}>
                <Button 
                  onClick={() => setStopwatchRunning(!stopwatchRunning)}
                  size="lg"
                  variant={stopwatchRunning ? "destructive" : "default"}
                >
                  {stopwatchRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </Button>
                <Button onClick={() => setStopwatchSeconds(0)} size="lg" variant="outline">
                  <RotateCcw className="w-6 h-6" />
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {isFullscreen && (
          <div className="absolute top-4 right-4">
            <Button 
              onClick={exitFullscreen}
              variant="ghost"
              size="sm"
              className="bg-black/50 text-white hover:bg-black/70"
            >
              Press ESC to exit
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen p-4 bg-background">
      {/* Mode Selection */}
      {!isFullscreen && (
        <Card className="mb-6 p-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={activeMode === 'clock' ? 'default' : 'outline'}
              onClick={() => setActiveMode('clock')}
              className="flex items-center gap-2"
            >
              <Clock className="w-4 h-4" />
              Clock
            </Button>
            <Button
              variant={activeMode === 'timer' ? 'default' : 'outline'}
              onClick={() => setActiveMode('timer')}
              className="flex items-center gap-2"
            >
              <Timer className="w-4 h-4" />
              Timer
            </Button>
            <Button
              variant={activeMode === 'countdown' ? 'default' : 'outline'}
              onClick={() => setActiveMode('countdown')}
              className="flex items-center gap-2"
            >
              <Hourglass className="w-4 h-4" />
              Countdown
            </Button>
            <Button
              variant={activeMode === 'stopwatch' ? 'default' : 'outline'}
              onClick={() => setActiveMode('stopwatch')}
              className="flex items-center gap-2"
            >
              <Square className="w-4 h-4" />
              Stopwatch
            </Button>
          </div>
        </Card>
      )}

      {/* Main Display */}
      <Card className="mb-6">
        {renderMainDisplay()}
      </Card>

      {/* Controls */}
      {!isFullscreen && (
        <div className="flex justify-center">
          <Button 
            onClick={toggleFullscreen}
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
          >
            <Maximize className="w-5 h-5" />
            Fullscreen (F)
          </Button>
        </div>
      )}

      {/* Customization Button - Bottom Left Corner */}
      {!isFullscreen && (
        <Button
          onClick={() => setIsCustomizerOpen(true)}
          className="fixed bottom-4 left-4 rounded-full w-12 h-12 p-0"
          variant="default"
        >
          <Palette className="w-5 h-5" />
        </Button>
      )}

      {/* Clock Customizer Modal */}
      <ClockCustomizer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        settings={clockSettings}
        onSettingsChange={setClockSettings}
      />
    </div>
  );
};

export default StageClock;