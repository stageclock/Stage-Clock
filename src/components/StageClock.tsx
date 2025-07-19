import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Clock, Timer, Square, Play, Pause, RotateCcw, Settings, Maximize, Calendar } from 'lucide-react';

interface ClockSettings {
  textColor: string;
  backgroundColor: string;
  fontSize: string;
  format24h: boolean;
}

const StageClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeMode, setActiveMode] = useState<'clock' | 'timer' | 'countdown' | 'stopwatch'>('clock');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [settings, setSettings] = useState<ClockSettings>({
    textColor: '#000000',
    backgroundColor: '#ffffff',
    fontSize: '8rem',
    format24h: true
  });

  // Timer states
  const [timerMinutes, setTimerMinutes] = useState(5);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [timerTime, setTimerTime] = useState(300); // 5 minutes in seconds

  // Countdown states
  const [countdownDate, setCountdownDate] = useState('');
  const [countdownTime, setCountdownTime] = useState('');
  const [countdownTarget, setCountdownTarget] = useState<Date | null>(null);

  // Stopwatch states
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [stopwatchActive, setStopwatchActive] = useState(false);
  const [stopwatchStartTime, setStopwatchStartTime] = useState<number | null>(null);

  const clockRef = useRef<HTMLDivElement>(null);

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
    if (timerActive && timerTime > 0) {
      interval = setInterval(() => {
        setTimerTime(prev => {
          if (prev <= 1) {
            setTimerActive(false);
            // Timer finished - could add sound/notification here
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive, timerTime]);

  // Stopwatch logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (stopwatchActive) {
      interval = setInterval(() => {
        const now = Date.now();
        if (stopwatchStartTime) {
          setStopwatchTime(Math.floor((now - stopwatchStartTime) / 1000));
        }
      }, 100);
    }
    return () => clearInterval(interval);
  }, [stopwatchActive, stopwatchStartTime]);

  // Fullscreen functionality
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      }
      if (e.key === 'Escape') {
        exitFullscreen();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await clockRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const exitFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const formatTime = (date: Date): string => {
    if (settings.format24h) {
      return date.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    } else {
      return date.toLocaleTimeString('en-US', { 
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    }
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

  const startTimer = () => {
    if (timerTime > 0) {
      setTimerActive(true);
    }
  };

  const pauseTimer = () => {
    setTimerActive(false);
  };

  const resetTimer = () => {
    setTimerActive(false);
    setTimerTime(timerMinutes * 60 + timerSeconds);
  };

  const startStopwatch = () => {
    if (!stopwatchActive) {
      setStopwatchStartTime(Date.now() - stopwatchTime * 1000);
      setStopwatchActive(true);
    } else {
      setStopwatchActive(false);
    }
  };

  const resetStopwatch = () => {
    setStopwatchActive(false);
    setStopwatchTime(0);
    setStopwatchStartTime(null);
  };

  const getCountdownDisplay = (): string => {
    if (!countdownTarget) return '00:00:00:00';
    
    const now = new Date();
    const diff = countdownTarget.getTime() - now.getTime();
    
    if (diff <= 0) return '00:00:00:00';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    return `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSetCountdownTarget = () => {
    if (countdownDate && countdownTime) {
      const target = new Date(`${countdownDate}T${countdownTime}`);
      setCountdownTarget(target);
    }
  };

  const renderMainDisplay = () => {
    const displayStyle = {
      color: settings.textColor,
      backgroundColor: settings.backgroundColor,
      fontSize: isFullscreen ? '12rem' : settings.fontSize,
    };

    switch (activeMode) {
      case 'clock':
        return (
          <div className="text-center">
            <div 
              className="font-mono font-bold leading-none mb-4"
              style={displayStyle}
            >
              {formatTime(currentTime)}
            </div>
            <div 
              className="text-2xl font-medium opacity-80"
              style={{ color: settings.textColor }}
            >
              {formatDate(currentTime)}
            </div>
          </div>
        );
      
      case 'timer':
        return (
          <div className="text-center">
            <div 
              className="font-mono font-bold leading-none mb-8"
              style={displayStyle}
            >
              {formatDuration(timerTime)}
            </div>
            <div className="flex gap-4 justify-center">
              {!timerActive ? (
                <Button onClick={startTimer} variant="default" size="lg">
                  <Play className="w-5 h-5 mr-2" />
                  Start
                </Button>
              ) : (
                <Button onClick={pauseTimer} variant="secondary" size="lg">
                  <Pause className="w-5 h-5 mr-2" />
                  Pause
                </Button>
              )}
              <Button onClick={resetTimer} variant="outline" size="lg">
                <RotateCcw className="w-5 h-5 mr-2" />
                Reset
              </Button>
            </div>
          </div>
        );
      
      case 'countdown':
        return (
          <div className="text-center">
            <div 
              className="font-mono font-bold leading-none mb-8"
              style={displayStyle}
            >
              {getCountdownDisplay()}
            </div>
            <div className="text-sm opacity-60 mb-4">Days : Hours : Minutes : Seconds</div>
          </div>
        );
      
      case 'stopwatch':
        return (
          <div className="text-center">
            <div 
              className="font-mono font-bold leading-none mb-8"
              style={displayStyle}
            >
              {formatDuration(stopwatchTime)}
            </div>
            <div className="flex gap-4 justify-center">
              <Button onClick={startStopwatch} variant="default" size="lg">
                {stopwatchActive ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
                {stopwatchActive ? 'Pause' : 'Start'}
              </Button>
              <Button onClick={resetStopwatch} variant="outline" size="lg">
                <RotateCcw className="w-5 h-5 mr-2" />
                Reset
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div 
      ref={clockRef}
      className={`min-h-screen flex flex-col ${isFullscreen ? 'p-8' : 'p-4'}`}
      style={{ backgroundColor: settings.backgroundColor }}
    >
      {/* Navigation */}
      {!isFullscreen && (
        <Card className="mb-6 p-4">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-2">
              <Button
                variant={activeMode === 'clock' ? 'default' : 'outline'}
                onClick={() => setActiveMode('clock')}
              >
                <Clock className="w-4 h-4 mr-2" />
                Clock
              </Button>
              <Button
                variant={activeMode === 'timer' ? 'default' : 'outline'}
                onClick={() => setActiveMode('timer')}
              >
                <Timer className="w-4 h-4 mr-2" />
                Timer
              </Button>
              <Button
                variant={activeMode === 'countdown' ? 'default' : 'outline'}
                onClick={() => setActiveMode('countdown')}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Countdown
              </Button>
              <Button
                variant={activeMode === 'stopwatch' ? 'default' : 'outline'}
                onClick={() => setActiveMode('stopwatch')}
              >
                <Square className="w-4 h-4 mr-2" />
                Stopwatch
              </Button>
            </div>
            <Button onClick={toggleFullscreen} variant="outline">
              <Maximize className="w-4 h-4 mr-2" />
              Fullscreen (F)
            </Button>
          </div>
        </Card>
      )}

      {/* Settings Panel */}
      {!isFullscreen && activeMode === 'timer' && (
        <Card className="mb-6 p-4">
          <div className="flex gap-4 items-center">
            <label className="text-sm font-medium">Set Timer:</label>
            <input
              type="number"
              min="0"
              max="59"
              value={timerMinutes}
              onChange={(e) => {
                setTimerMinutes(parseInt(e.target.value) || 0);
                setTimerTime((parseInt(e.target.value) || 0) * 60 + timerSeconds);
              }}
              className="w-16 px-2 py-1 border rounded"
            />
            <span>minutes</span>
            <input
              type="number"
              min="0"
              max="59"
              value={timerSeconds}
              onChange={(e) => {
                setTimerSeconds(parseInt(e.target.value) || 0);
                setTimerTime(timerMinutes * 60 + (parseInt(e.target.value) || 0));
              }}
              className="w-16 px-2 py-1 border rounded"
            />
            <span>seconds</span>
          </div>
        </Card>
      )}

      {!isFullscreen && activeMode === 'countdown' && (
        <Card className="mb-6 p-4">
          <div className="flex gap-4 items-center flex-wrap">
            <label className="text-sm font-medium">Target Date:</label>
            <input
              type="date"
              value={countdownDate}
              onChange={(e) => setCountdownDate(e.target.value)}
              className="px-3 py-2 border rounded"
            />
            <input
              type="time"
              value={countdownTime}
              onChange={(e) => setCountdownTime(e.target.value)}
              className="px-3 py-2 border rounded"
            />
            <Button onClick={handleSetCountdownTarget}>Set Target</Button>
          </div>
        </Card>
      )}

      {/* Main Display */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl">
          {renderMainDisplay()}
        </div>
      </div>

      {/* Fullscreen hint */}
      {isFullscreen && (
        <div className="text-center mt-4 opacity-60">
          <p className="text-sm">Press F to exit fullscreen</p>
        </div>
      )}
    </div>
  );
};

export default StageClock;