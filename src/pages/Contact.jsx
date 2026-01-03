import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent } from '../components/ui/card';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventLocation: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, eventType: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventLocation: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-20 bg-[#FAF7F2]">

      {/* Hero */}
   <section className="relative h-[38vh] md:h-[45vh] flex items-center justify-center overflow-hidden">


        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2788494/pexels-photo-2788494.jpeg)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-4">
            Plan Your Event
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Start planning your extraordinary experience today
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-light text-[#1F1F1F] mb-4">
                Get In Touch
              </h2>
              <p className="text-[#6A6A6A] leading-relaxed">
                Whether you're planning a dream wedding or a corporate event, our team is here to bring your vision to life.
              </p>
            </div>

            {[{
              icon: Mail,
              title: "Email Us",
              lines: ["eventustaad@gmail.com", "contact@eventustaad.com"]
            }, {
              icon: Phone,
              title: "Call Us",
              lines: ["+91 98333 10150", "+91 99205 81507"]
            }, {
              icon: MapPin,
              title: "Connect Socially",
              lines: ["@eventustaad on all platforms"]
            }].map((item, i) => (
              <Card key={i} className="border border-[#E5DED3]">
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 bg-[#FAF7F2] border border-[#E5DED3] rounded-full flex items-center justify-center">
                    <item.icon className="text-[#C6A75E]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1F1F1F] mb-1">{item.title}</h3>
                    {item.lines.map((line, idx) => (
                      <p key={idx} className="text-[#6A6A6A] text-sm">{line}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="bg-white border border-[#E5DED3] rounded-lg p-6">
              <h3 className="font-medium text-[#1F1F1F] mb-2">Office Hours</h3>
              <p className="text-[#6A6A6A] text-sm">Mon – Sat: 10:00 AM – 7:00 PM</p>
              <p className="text-[#6A6A6A] text-sm">Sunday: By Appointment</p>
            </div>
          </div>

          {/* Form */}
          <Card className="border border-[#E5DED3] shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light text-[#1F1F1F] mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {["name", "email", "phone", "eventLocation"].map((field) => (
                  <div key={field}>
                    <Label htmlFor={field}>{field.replace(/^\w/, c => c.toUpperCase())}</Label>
                    <Input
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="mt-2 border-[#E5DED3] focus:border-[#C6A75E] focus:ring-[#C6A75E]/30"
                    />
                  </div>
                ))}

                <div>
                  <Label>Event Type</Label>
                  <Select onValueChange={handleSelectChange}>
                    <SelectTrigger className="mt-2 border-[#E5DED3]">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="destination">Destination Event</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Message</Label>
                  <Textarea
                    rows={5}
                    value={formData.message}
                    name="message"
                    onChange={handleChange}
                    className="mt-2 border-[#E5DED3] focus:border-[#C6A75E] focus:ring-[#C6A75E]/30"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C6A75E] hover:bg-[#A88849] text-white py-5 text-base"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2" size={18} />
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
