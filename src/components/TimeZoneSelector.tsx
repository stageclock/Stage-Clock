import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Globe, X } from 'lucide-react';

interface TimeZoneSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTimezone: string;
  onTimezoneChange: (timezone: string) => void;
}

const timezones = [
  { label: 'New York (EST)', value: 'America/New_York' },
  { label: 'Los Angeles (PST)', value: 'America/Los_Angeles' },
  { label: 'London (GMT)', value: 'Europe/London' },
  { label: 'Paris (CET)', value: 'Europe/Paris' },
  { label: 'Tokyo (JST)', value: 'Asia/Tokyo' },
  { label: 'Sydney (AEST)', value: 'Australia/Sydney' },
  { label: 'Dubai (GST)', value: 'Asia/Dubai' },
  { label: 'Singapore (SGT)', value: 'Asia/Singapore' },
  { label: 'Hong Kong (HKT)', value: 'Asia/Hong_Kong' },
  { label: 'Mumbai (IST)', value: 'Asia/Kolkata' },
  { label: 'Moscow (MSK)', value: 'Europe/Moscow' },
  { label: 'Beijing (CST)', value: 'Asia/Shanghai' },
  { label: 'São Paulo (BRT)', value: 'America/Sao_Paulo' },
  { label: 'Mexico City (CST)', value: 'America/Mexico_City' },
  { label: 'Toronto (EST)', value: 'America/Toronto' },
  { label: 'Chicago (CST)', value: 'America/Chicago' },
  { label: 'Denver (MST)', value: 'America/Denver' },
  { label: 'Vancouver (PST)', value: 'America/Vancouver' },
  { label: 'Berlin (CET)', value: 'Europe/Berlin' },
  { label: 'Rome (CET)', value: 'Europe/Rome' },
];

const TimeZoneSelector: React.FC<TimeZoneSelectorProps> = ({
  isOpen,
  onClose,
  selectedTimezone,
  onTimezoneChange,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Select Time Zone
            </h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <Select value={selectedTimezone} onValueChange={onTimezoneChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a timezone" />
              </SelectTrigger>
              <SelectContent>
                {timezones.map((tz) => (
                  <SelectItem key={tz.value} value={tz.value}>
                    {tz.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={onClose}>
                Apply
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TimeZoneSelector;