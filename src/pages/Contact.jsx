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

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/2788494/pexels-photo-2788494.jpeg)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-light text-white mb-2 sm:mb-4">
          Let’s Begin Your Celebration
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-white/90">
            Tell us your story, and we’ll take it from there.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-8 lg:grid-cols-2">

          {/* INFO */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-light text-[#1F1F1F] mb-4">
                Get In Touch
              </h2>
              <p className="text-[#6A6A6A]">
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
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 bg-[#FAF7F2] border border-[#E5DED3] rounded-full flex items-center justify-center">
                    <item.icon className="text-[#C6A75E]" size={20} />
                  </div>

                  <div>
                    <h3 className="font-medium text-[#1F1F1F] mb-1">
                      {item.title}
                    </h3>

                    {item.lines.map((line, idx) => {
                      // EMAIL → Gmail
                      if (item.title === 'Email Us') {
                        return (
                          <a
                            key={idx}
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${line}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-[#6A6A6A] text-sm hover:text-[#C6A75E] transition"
                          >
                            {line}
                          </a>
                        );
                      }

                      // PHONE → Dialer
                      if (item.title === 'Call Us') {
                        const phone = line.replace(/\s+/g, '');
                        return (
                          <a
                            key={idx}
                            href={`tel:${phone}`}
                            className="block text-[#6A6A6A] text-sm hover:text-[#C6A75E] transition"
                          >
                            {line}
                          </a>
                        );
                      }

                      // DEFAULT TEXT
                      return (
                        <p key={idx} className="text-[#6A6A6A] text-sm">
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
            <CardContent className="p-8">
              <h3 className="text-2xl font-light text-[#1F1F1F] mb-6">
                Send Us a Message
              </h3>

              <form
                action="https://formsubmit.co/mistrydhruv04@gmail.com"
                method="POST"
                target="hidden_iframe"
                onSubmit={() => {
                  setShowThankYou(true);
                  setTimeout(() => setShowThankYou(false), 2500);
                }}
                className="space-y-5"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New Event Enquiry - Event Ustaad" />
                <input type="hidden" name="_autoresponse" value="Thank you for contacting Event Ustaad. Our team will get back to you shortly." />
                <input type="hidden" name="eventType" value={eventType} />

                <div>
                  <Label>Name</Label>
                  <Input name="name" required />
                </div>

                <div>
                  <Label>Email</Label>
                  <Input type="email" name="email" required />
                </div>

                <div>
                  <Label>Phone</Label>
                  <Input name="phone" required />
                </div>

                <div>
                  <Label>Event Location</Label>
                  <Input name="eventLocation" />
                </div>

                <div>
                  <Label>Event Type</Label>
                  <Select onValueChange={setEventType}>
                    <SelectTrigger>
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
                  <Label>Message</Label>
                  <Textarea name="message" rows={5} />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#C6A75E] hover:bg-[#A88849] text-white py-5"
                >
                  Send Message
                  <Send className="ml-2" size={18} />
                </Button>
              </form>

              <iframe name="hidden_iframe" style={{ display: 'none' }} title="hidden_iframe" />
            </CardContent>
          </Card>

        </div>
      </section>

      {/* THANK YOU OVERLAY */}
      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#C6A75E]/30 backdrop-blur-sm animate-fade-in" />
          <div className="relative bg-white rounded-lg shadow-xl px-10 py-8 text-center animate-scale-in">
            <h2 className="text-3xl font-light text-[#1F1F1F] mb-3">
              Thank You ✨
            </h2>
            <p className="text-[#6A6A6A]">
              Your message has been sent successfully.<br />
              Our team will contact you shortly.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};

export default Contact;
