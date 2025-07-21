'use client';

import Image from 'next/image';
import Link from 'next/link';
import './globals.css';
import { Kelly_Slab } from 'next/font/google';
import { useState } from 'react';

const kellySlab = Kelly_Slab({ subsets: ['latin'], weight: '400' });
type Work = {
  title: string;
  description: string;
  cover: string;
  images: string[];
};
const works: Work[] = [
  {
    title: 'Roadster Diner',
    description: 'A redesign for Roadster website',
    cover: '/roadsterbg.png',
    images: ['/roadster.png', '/roadster2.png'],
  },
  {
    title: 'Bershka',
    description: 'A redesign for bershka website',
    cover: '/bershkabg.png',
    images: ['/bershka1.png', '/bershka2.png'],
  },
  {
    title: 'Luminous',
    description: 'A skincare website',
    cover: '/luminousbg.png',
    images: ['/luminous1.png', '/luminous2.png','/luminous3.png','/luminous4.png'],
  },
];

const posters = [
  {
    title: 'Poster One',
    description: 'A vibrant poster design for an event.',
    cover: '/poster1.png',
  },
  {
    title: 'Poster Two',
    description: 'An artistic poster created for a campaign.',
    cover: '/poster3.png',
  },
  {
    title: 'Poster One',
    description: 'A vibrant poster design for an event.',
    cover: '/poster4.png',
  },
  {
    title: 'Poster One',
    description: 'A vibrant poster design for an event.',
    cover: '/poster2.png',
  },
  {
    title: 'Poster Two',
    description: 'An artistic poster created for a campaign.',
    cover: '/poster5.png',
  },
  {
    title: 'Poster One',
    description: 'A vibrant poster design for an event.',
    cover: '/poster6.png',
  },
   {
    title: 'Poster One',
    description: 'A vibrant poster design for an event.',
    cover: '/poster7.png',
  },
  {
    title: 'Poster Two',
    description: 'An artistic poster created for a campaign.',
    cover: '/poster8.png',
  },
  {
    title: 'Poster One',
    description: 'A vibrant poster design for an event.',
    cover: '/poster9.png',
  },
];

const logo = [
  {
    title: 'Roadster Diner',
    description: 'A redesign for Roadster website',
    cover: '/logo1.jpg',
  },
  {
    title: 'Bershka',
    description: 'A redesign for bershka website',
    cover: '/logo2.jpg',
  },
  {
    title: 'Luminous',
    description: 'A skincare website',
    cover: '/logo3.png',
  },
  {
    title: 'Roadster Diner',
    description: 'A redesign for Roadster website',
    cover: '/logo4.png',
  },
  {
    title: 'Bershka',
    description: 'A redesign for bershka website',
    cover: '/logo5.png',
  },
  {
    title: 'Luminous',
    description: 'A skincare website',
    cover: '/logo6.png',
  },
];

export default function Home() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  return (
    <div className={`relative min-h-screen bg-white text-black ${kellySlab.className}`}>
      

      {/* Hero Section - Full Page */}
      <section className="min-h-screen flex flex-col justify-between relative z-10 px-8 sm:px-16 pt-10">
        {/* Top Logo */}
        <div className="w-full flex justify-start">
          <Image src="/logo.png" alt="K Logo" width={60} height={40} />
        </div>

        {/* Center Text (Left Aligned) */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-5xl">
          <h1 className="text-7xl sm:text-9xl font-black leading-none">KARIM</h1>
          <h1 className="text-7xl sm:text-9xl font-black text-cyan-600 leading-none">MELHEM</h1>
          <p className="mt-4 text-lg sm:text-xl font-semibold">A Graphic, UI/UX Designer</p>
        </div>

        {/* Bottom Navigation */}
        <nav className="w-full flex justify-center mt-12 pb-8">
          <ul className="flex gap-6 bg-black text-white py-2 px-6 rounded-full text-sm sm:text-base">
            {['Web', 'Posters', 'Logos', 'Contact'].map((item, i) => (
              <li key={i}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-cyan-500 px-3 py-1 transition-colors rounded-full data-[active=true]:bg-cyan-500 data-[active=true]:text-white"
                  data-active={item === 'Web'}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* Web Section */}
      <section id="web" className="py-24 px-8 sm:px-16">
        <h2 className="text-4xl font-bold mb-10">Web Projects - Click For Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {works.map((work, idx) => (
            <div
              key={idx}
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedWork(work)}
            >
              <Image
                src={work.cover}
                alt={work.title}
                width={500}
                height={300}
                className="rounded-xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </section>
            <section id="posters" className="py-24 px-8 sm:px-16">
        <h2 className="text-4xl font-bold mb-10">Poster Designs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {posters.map((poster, idx) => (
            <div
              key={idx}
              className="hover:scale-105 transition-transform"
            >
              <Image
                src={poster.cover}
                alt={poster.title}
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            
            </div>
          ))}
        </div>
      </section>


      <section id="logos" className="py-24 px-8 sm:px-16">
        <h2 className="text-4xl font-bold mb-10">Logo Designs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {logo.map((logo, idx) => (
            <div
              key={idx}
              className="hover:scale-105 transition-transform"
            >
              <Image
                src={logo.cover}
                alt={logo.title}
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            
            </div>
          ))}
        </div>
      </section>

       {/* Contact Section */}
      <section id="contact" className="py-24 px-8 sm:px-16 flex justify-center items-center">
        <div className="max-w-2xl w-full bg-white border border-gray-200 shadow-xl p-10 rounded-3xl">
          <h2 className="text-4xl font-bold mb-10 text-center">Contact</h2>
          <form
            action="https://formsubmit.co/karim.melhemm@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                name="message"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        <p className="mb-2">© {new Date().getFullYear()} Karim Melhem</p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/melhemkarim" target="_blank" rel="noopener noreferrer" className="hover:text-black">GitHub</a>
          <a href="https://www.linkedin.com/in/karim-melhem/" target="_blank" rel="noopener noreferrer" className="hover:text-black">LinkedIn</a>
        </div>
      </footer>

      {/* Popup Modal */}
      {selectedWork !== null && (
        <>
          <div className="fixed inset-0 backdrop-blur-md bg-transparent z-40" />
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-xl w-full max-w-7xl p-6 sm:p-10 relative overflow-y-auto max-h-[90vh]">
              <button
                className="absolute top-4 right-4 text-xl font-bold"
                onClick={() => setSelectedWork(null)}
              >
                ×
              </button>
              <h3 className="text-2xl font-bold mb-4">{selectedWork.title}</h3>
              <p className="mb-6">{selectedWork.description}</p>
              <div className={`grid gap-4 ${selectedWork.images.length > 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'}`}>
                {selectedWork.images.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt={`Work detail ${i + 1}`}
                    width={800}
                    height={800}
                    className="rounded-lg w-full h-auto"
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}