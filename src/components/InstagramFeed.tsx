import { useEffect, useState } from 'react';

const SHEET_CSV_URL =
  'https://api.allorigins.win/raw?url=https://docs.google.com/spreadsheets/d/e/2PACX-1vQsPK62ul_YmdbANGVC6Q4CIyM9t8teRry8ubLgeqsfBJpn2fmGb0VStbvt5N7XR-PvZDKRFxQai3YF/pub?output=csv&cache=' + Date.now();

declare global {
  interface Window {
    instgrm?: any;
  }
}

const InstagramFeed = () => {
  const [posts, setPosts] = useState<string[]>([]);

  useEffect(() => {
    fetch(SHEET_CSV_URL)
      .then(res => res.text())
      .then(text => {
        const urls = text
          .split('\n')
          .slice(1)
          .map(r => r.trim())
          .filter(Boolean)
          .map(url => {
            try {
              const u = new URL(url);
              return `${u.origin}${u.pathname}`;
            } catch {
              return url;
            }
          });

        setPosts(urls.slice(0, 6));
      });
  }, []);

  useEffect(() => {
    const process = () => window.instgrm?.Embeds?.process();

    if (!document.getElementById('instagram-embed')) {
      const script = document.createElement('script');
      script.id = 'instagram-embed';
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = process;
      document.body.appendChild(script);
    } else {
      setTimeout(process, 500);
    }
  }, [posts]);

  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="site-container">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="block text-xs tracking-[0.4em] uppercase text-[#C6A75E] mb-3">
            Instagram
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1F1F1F]"
            style={{ fontFamily: 'Cormorant, serif' }}
          >
            Moments We’ve Created
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((url, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                shadow-lg
                overflow-hidden
              "
              style={{
                height: 420, // MOBILE HEIGHT
              }}
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  margin: 0,
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/eventustaad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C6A75E] font-medium hover:underline"
          >
            View more on Instagram →
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
