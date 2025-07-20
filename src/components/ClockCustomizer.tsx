import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Settings, X, Palette, Type, Image, Download } from 'lucide-react';

interface ClockCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  settings: {
    textColor: string;
    backgroundColor: string;
    fontSize: number;
    fontFamily: string;
    backgroundImage: string;
    template: string;
  };
  onSettingsChange: (settings: any) => void;
}

const ClockCustomizer: React.FC<ClockCustomizerProps> = ({
  isOpen,
  onClose,
  settings,
  onSettingsChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const templates = [
    { name: 'Classic Digital', bg: 'bg-black', text: 'text-green-400', font: 'font-mono' },
    { name: 'Neon Blue', bg: 'bg-slate-900', text: 'text-cyan-400', font: 'font-mono' },
    { name: 'Retro Orange', bg: 'bg-orange-900', text: 'text-orange-200', font: 'font-mono' },
    { name: 'Purple Dream', bg: 'bg-purple-900', text: 'text-purple-200', font: 'font-serif' },
    { name: 'Ocean Breeze', bg: 'bg-blue-900', text: 'text-blue-200', font: 'font-sans' },
    { name: 'Forest Green', bg: 'bg-green-900', text: 'text-green-200', font: 'font-mono' },
    { name: 'Sunset', bg: 'bg-red-900', text: 'text-yellow-200', font: 'font-serif' },
    { name: 'Midnight', bg: 'bg-gray-900', text: 'text-white', font: 'font-mono' },
    { name: 'Gold Rush', bg: 'bg-yellow-900', text: 'text-yellow-100', font: 'font-serif' },
    { name: 'Ice Cold', bg: 'bg-blue-100', text: 'text-blue-900', font: 'font-mono' },
    { name: 'Fire Red', bg: 'bg-red-800', text: 'text-red-100', font: 'font-bold' },
    { name: 'Mint Fresh', bg: 'bg-emerald-800', text: 'text-emerald-100', font: 'font-sans' },
    { name: 'Royal Purple', bg: 'bg-indigo-900', text: 'text-indigo-200', font: 'font-serif' },
    { name: 'Copper', bg: 'bg-orange-800', text: 'text-orange-100', font: 'font-mono' },
    { name: 'Silver', bg: 'bg-slate-700', text: 'text-slate-100', font: 'font-sans' },
    { name: 'Rose Gold', bg: 'bg-pink-900', text: 'text-pink-200', font: 'font-serif' },
    { name: 'Electric', bg: 'bg-violet-900', text: 'text-violet-200', font: 'font-mono' },
    { name: 'Matrix', bg: 'bg-black', text: 'text-green-300', font: 'font-mono' },
    { name: 'Pastel', bg: 'bg-pink-100', text: 'text-pink-800', font: 'font-sans' },
    { name: 'Terminal', bg: 'bg-gray-800', text: 'text-green-400', font: 'font-mono' },
    { name: 'Gradient Sunset', bg: 'bg-gradient-to-br from-orange-500 to-pink-500', text: 'text-white', font: 'font-bold' },
    { name: 'Gradient Ocean', bg: 'bg-gradient-to-br from-blue-500 to-teal-500', text: 'text-white', font: 'font-sans' },
    { name: 'Gradient Forest', bg: 'bg-gradient-to-br from-green-500 to-emerald-500', text: 'text-white', font: 'font-serif' },
    { name: 'Gradient Space', bg: 'bg-gradient-to-br from-purple-500 to-indigo-500', text: 'text-white', font: 'font-mono' },
  ];

  const backgroundImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&h=1080&fit=crop',
  ];

  const fontFamilies = [
    'font-mono',
    'font-sans',
    'font-serif',
    'font-bold',
  ];

  const handleTemplateSelect = (template: any) => {
    onSettingsChange({
      ...settings,
      template: template.name,
      backgroundColor: template.bg,
      textColor: template.text,
      fontFamily: template.font,
    });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        onSettingsChange({
          ...settings,
          backgroundImage: result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Settings className="w-6 h-6" />
              Clock Customizer
            </h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          <Tabs defaultValue="templates" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="colors">Colors</TabsTrigger>
              <TabsTrigger value="fonts">Fonts</TabsTrigger>
              <TabsTrigger value="backgrounds">Backgrounds</TabsTrigger>
            </TabsList>

            <TabsContent value="templates" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {templates.map((template, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg cursor-pointer border-2 transition-all ${
                      settings.template === template.name
                        ? 'border-primary'
                        : 'border-border hover:border-primary/50'
                    } ${template.bg}`}
                    onClick={() => handleTemplateSelect(template)}
                  >
                    <div className={`text-center ${template.text} ${template.font}`}>
                      <div className="text-lg font-bold">12:34</div>
                      <div className="text-xs mt-1">{template.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="colors" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label className="flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    Text Color
                  </Label>
                  <Input
                    type="color"
                    value={settings.textColor}
                    onChange={(e) =>
                      onSettingsChange({ ...settings, textColor: e.target.value })
                    }
                    className="w-full h-12"
                  />
                </div>
                <div className="space-y-4">
                  <Label className="flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    Background Color
                  </Label>
                  <Input
                    type="color"
                    value={settings.backgroundColor}
                    onChange={(e) =>
                      onSettingsChange({ ...settings, backgroundColor: e.target.value })
                    }
                    className="w-full h-12"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fonts" className="space-y-4">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Label className="flex items-center gap-2">
                    <Type className="w-4 h-4" />
                    Font Size: {settings.fontSize}px
                  </Label>
                  <Slider
                    value={[settings.fontSize]}
                    onValueChange={(value) =>
                      onSettingsChange({ ...settings, fontSize: value[0] })
                    }
                    max={200}
                    min={12}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="space-y-4">
                  <Label>Font Family</Label>
                  <div className="grid grid-cols-2 gap-4">
                    {fontFamilies.map((font) => (
                      <Button
                        key={font}
                        variant={settings.fontFamily === font ? 'default' : 'outline'}
                        onClick={() =>
                          onSettingsChange({ ...settings, fontFamily: font })
                        }
                        className={font}
                      >
                        {font.replace('font-', '')}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="backgrounds" className="space-y-4">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Label className="flex items-center gap-2">
                    <Image className="w-4 h-4" />
                    Upload Custom Background
                  </Label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Upload Image
                  </Button>
                </div>
                <div className="space-y-4">
                  <Label>Background Templates</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {backgroundImages.map((img, index) => (
                      <div
                        key={index}
                        className={`relative h-20 rounded-lg cursor-pointer border-2 transition-all overflow-hidden ${
                          settings.backgroundImage === img
                            ? 'border-primary'
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() =>
                          onSettingsChange({ ...settings, backgroundImage: img })
                        }
                      >
                        <img
                          src={img}
                          alt={`Background ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </div>
  );
};

export default ClockCustomizer;