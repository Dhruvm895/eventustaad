import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const InstagramSection = () => {
  const instagramHandle = '@eventustaad';
  const instagramUrl = 'https://instagram.com/eventustaad';

  // Mock Instagram posts - In production, this would come from Instagram API
  const mockPosts = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/11985359/pexels-photo-11985359.jpeg',
      likes: 1234,
      caption: 'Royal wedding magic ✨'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/12194048/pexels-photo-12194048.jpeg',
      likes: 2156,
      caption: 'Palace perfection 💜'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/35420251/pexels-photo-35420251.jpeg',
      likes: 1876,
      caption: 'Grand celebrations 🎊'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/15966640/pexels-photo-15966640.jpeg',
      likes: 1543,
      caption: 'Destination dreams 🌴'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-lavender-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-3 animate-bounce">
              <Instagram className="text-white" size={32} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Follow Our Journey
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Get inspired by our latest events and behind-the-scenes moments
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 hover:from-purple-700 hover:via-pink-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <Instagram className="mr-2 group-hover:animate-spin" size={24} />
              Follow {instagramHandle}
              <ExternalLink className="ml-2" size={18} />
            </Button>
          </a>
        </div>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {mockPosts.map((post, index) => (
            <a
              key={post.id}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Instagram size={20} />
                    <span className="font-medium">{post.likes.toLocaleString()}</span>
                  </div>
                  <p className="text-sm">{post.caption}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto border-2 border-purple-200 bg-white/80 backdrop-blur-sm hover:border-purple-400 transition-colors duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light text-gray-900 mb-3">
                See More of Our Work
              </h3>
              <p className="text-gray-600 mb-6">
                Join our community of {instagramHandle} to stay updated with our latest events, tips, and inspiration!
              </p>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-2 border-purple-400 text-purple-600 hover:bg-purple-50 px-6 py-3">
                  View Instagram Profile
                  <ExternalLink className="ml-2" size={16} />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default InstagramSection;