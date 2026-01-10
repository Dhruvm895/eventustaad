import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../components/ui/select';
import { Card, CardContent } from '../components/ui/card';

const Contact = () => {
  const [eventType, setEventType] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  return (

    
   <div className="min-h-[100svh] pt-20 pb-[max(8rem,env(safe-area-inset-bottom))] bg-[#FAF7F2] overflow-x-hidden">



      {/* HERO */}
      <section className="relative h-[26vh] md:h-[45vh] flex items-center justify-center overflow-hidden">


    <div className="min-h-screen pt-16 sm:pt-20 bg-[#FAF7F2]">

      {/* HERO */}
      <section className="relative h-[26vh] sm:h-[32vh] md:h-[45vh] flex items-center justify-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/2788494/pexels-photo-2788494.jpeg)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-light text-white mb-2">
            Let’s Begin Your Celebration
          </h1>
          <p className="text-xs sm:text-sm md:text-xl text-white/90">
            Tell us your story, and we’ll take it from there.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-8 lg:grid-cols-2">

          {/* INFO */}
          <div className="space-y-6 sm:space-y-10">
            <div>
              <h2 className="text-2xl sm:text-4xl font-light text-[#1F1F1F] mb-2 sm:mb-4">
                Get In Touch
              </h2>
              <p className="text-sm text-[#6A6A6A]">
                Whether you're planning a dream wedding or a corporate event,
                our team is here to bring your vision to life.
              </p>
            </div>

            {[
              {
                icon: Mail,
                title: 'Email Us',
                lines: ['eventustaad@gmail.com', 'contact@eventustaad.com']
              },
              {
                icon: Phone,
                title: 'Call Us',
                lines: ['+91 98333 10150', '+91 99205 81507']
              },
              {
                icon: MapPin,
                title: 'Connect Socially',
                lines: ['@eventustaad on all platforms']
              }
            ].map((item, i) => (
              <Card key={i} className="border border-[#E5DED3]">
                <CardContent className="p-4 sm:p-6 flex gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FAF7F2] border border-[#E5DED3] rounded-full flex items-center justify-center shrink-0">
                    <item.icon className="text-[#C6A75E]" size={18} />
                  </div>

                  <div>
                    <h3 className="font-medium text-sm sm:text-base text-[#1F1F1F] mb-1">
                      {item.title}
                    </h3>

                    {item.lines.map((line, idx) => {
                      if (item.title === 'Email Us') {
                        return (
                          <a
                            key={idx}
                            href={`mailto:${line}`}
                            className="block text-xs sm:text-sm text-[#6A6A6A]"
                          >
                            {line}
                          </a>
                        );
                      }

                      if (item.title === 'Call Us') {
                        return (
                          <a
                            key={idx}
                            href={`tel:${line.replace(/\s+/g, '')}`}
                            className="block text-xs sm:text-sm text-[#6A6A6A]"
                          >
                            {line}
                          </a>
                        );
                      }

                      return (
                        <p key={idx} className="text-xs sm:text-sm text-[#6A6A6A]">
                          {line}
                        </p>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FORM */}
          <Card className="border border-[#E5DED3] shadow-sm">
            <CardContent className="p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-light text-[#1F1F1F] mb-4 sm:mb-6">
                Send Us a Message
              </h3>

              <form
                action="https://formsubmit.co/mistrydhruv04@gmail.com"
                method="POST"
                className="space-y-4 sm:space-y-5"
                onSubmit={() => {
                  setShowThankYou(true);
                  setTimeout(() => setShowThankYou(false), 2500);
                }}
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Event Enquiry - Event Ustaad" />
                <input type="hidden" name="eventType" value={eventType} />

                <div>
                  <Label className="text-xs sm:text-sm">Name</Label>
                  <Input className="h-9 sm:h-11" name="name" required />
                </div>

                <div>
                  <Label className="text-xs sm:text-sm">Email</Label>
                  <Input className="h-9 sm:h-11" type="email" name="email" required />
                </div>

                <div>
                  <Label className="text-xs sm:text-sm">Phone</Label>
                  <Input className="h-9 sm:h-11" name="phone" required />
                </div>

                <div>
                  <Label className="text-xs sm:text-sm">Event Location</Label>
                  <Input className="h-9 sm:h-11" name="eventLocation" />
                </div>

                <div>
                  <Label className="text-xs sm:text-sm">Event Type</Label>
                  <Select onValueChange={setEventType}>
                    <SelectTrigger className="h-9 sm:h-11">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Wedding">Wedding</SelectItem>
                      <SelectItem value="Corporate">Corporate Event</SelectItem>
                      <SelectItem value="Destination">Destination Event</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-xs sm:text-sm">Message</Label>
                  <Textarea className="min-h-[90px] sm:min-h-[120px]" name="message" />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#C6A75E] hover:bg-[#A88849] text-white py-3 sm:py-5 text-sm sm:text-base"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  );
};

export default Contact;
