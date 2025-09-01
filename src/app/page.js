"use client"
import { 
  Plane, 
  MapPin, 
  Globe, 
  MessageCircle, 
  Download, 
  Share2, 
  QrCode,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Star
} from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import QRCode from 'qrcode'; // Import QRCode library
import Image from 'next/image';

// Custom SVG icons for Threads and TikTok
const ThreadsIcon = ({ color = "currentColor" }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Threads--Streamline-Simple-Icons" height="24" width="24">
    <path d="M12.186 24h-0.007c-3.581 -0.024 -6.334 -1.205 -8.184 -3.509C2.35 18.44 1.5 15.586 1.472 12.01v-0.017c0.03 -3.579 0.879 -6.43 2.525 -8.482C5.845 1.205 8.6 0.024 12.18 0h0.014c2.746 0.02 5.043 0.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04 0.569c-1.104 -3.96 -3.898 -5.984 -8.304 -6.015 -2.91 0.022 -5.11 0.936 -6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c0.027 3.086 0.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623 -0.02 4.358 -0.631 5.8 -2.045 1.647 -1.613 1.618 -3.593 1.09 -4.798 -0.31 -0.71 -0.873 -1.3 -1.634 -1.75 -0.192 1.352 -0.622 2.446 -1.284 3.272 -0.886 1.102 -2.14 1.704 -3.73 1.79 -1.202 0.065 -2.361 -0.218 -3.259 -0.801 -1.063 -0.689 -1.685 -1.74 -1.752 -2.964 -0.065 -1.19 0.408 -2.285 1.33 -3.082 0.88 -0.76 2.119 -1.207 3.583 -1.291a13.853 13.853 0 0 1 3.02 0.142c-0.126 -0.742 -0.375 -1.332 -0.75 -1.757 -0.513 -0.586 -1.308 -0.883 -2.359 -0.89h-0.029c-0.844 0 -1.992 0.232 -2.721 1.32l-1.757 -1.18c0.98 -1.454 2.568 -2.256 4.478 -2.256h0.044c3.194 0.02 5.097 1.975 5.287 5.388 0.108 0.046 0.216 0.094 0.321 0.142 1.49 0.7 2.58 1.761 3.154 3.07 0.797 1.82 0.871 4.79 -1.548 7.158 -1.85 1.81 -4.094 2.628 -7.277 2.65Zm1.003 -11.69c-0.242 0 -0.487 0.007 -0.739 0.021 -1.836 0.103 -2.98 0.946 -2.916 2.143 0.067 1.256 1.452 1.839 2.784 1.767 1.224 -0.065 2.818 -0.543 3.086 -3.71a10.5 10.5 0 0 0 -2.215 -0.221z" fill={color} strokeWidth="1"></path>
  </svg>
);

const TikTokIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="Tiktok-Logo--Streamline-Logos-Block">
    <path fill={color} fillRule="evenodd" d="M5 1a4 4 0 0 0 -4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4 -4V5a4 4 0 0 0 -4 -4H5Zm7.34 3.5h2.387c0 1.6 1.352 3.41 3.41 3.41v2.386c-1.417 -0.098 -2.628 -0.33 -3.41 -1.023v6.136c0 1.705 -1.348 4.091 -4.431 4.091 -3.766 0 -4.432 -3.41 -4.432 -4.432 0 -1.022 0.6 -4.432 4.772 -4.432v2.387c-1.091 -0.231 -2.386 0.681 -2.386 2.045 0 1.705 1.023 2.046 2.046 2.046 1.022 0 2.045 -1.023 2.045 -2.046V4.5Z" clipRule="evenodd" strokeWidth="1"></path>
  </svg>
);

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Google-Logo--Streamline-Ultimate" height="24" width="24">
    <path fill="#ff808c" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="m20.0157 4.47237 -2.7835 2.62086c-0.7631 -0.81506 -1.7062 -1.44047 -2.754 -1.82632 -1.0477 -0.38585 -2.1712 -0.52146 -3.2807 -0.39602 -1.1095 0.12544 -2.17428 0.50848 -3.10944 1.11853 -0.93517 0.61005 -1.7148 1.43024 -2.27669 2.39511l-3.01303 -2.3913c0.90798 -1.39584 2.12153 -2.56691 3.54884 -3.42459 1.4273 -0.85768 3.03097 -1.37953 4.68972 -1.52605 1.6587 -0.146517 3.329 0.08612 4.8846 0.68032 1.5555 0.5942 2.9556 1.5344 4.0942 2.74946Z" strokeWidth="1"></path>
    <path fill="#ffef5e" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="m5.8496 15.6732 -2.87912 2.5922c-1.2527 -1.7938 -1.93871 -3.922 -1.9694 -6.1097 -0.030695 -2.18766 0.59534 -4.33427 1.79723 -6.16247l3.01303 2.39129c-0.65148 1.10544 -0.99188 2.36648 -0.98514 3.64958 0.00674 1.2831 0.36035 2.5406 1.0234 3.6391Z" strokeWidth="1"></path>
    <path fill="#78eb7b" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M18.8298 20.6376c-1.1798 0.9299 -2.5374 1.6084 -3.9893 1.9939 -1.4519 0.3854 -2.9673 0.4696 -4.4529 0.2474 -1.48566 -0.2222 -2.9101 -0.7462 -4.18565 -1.5396 -1.27554 -0.7934 -2.37519 -1.8395 -3.23125 -3.0739l2.87912 -2.5921c0.51308 0.8604 1.20068 1.6039 2.01853 2.1825 0.81785 0.5785 1.74782 0.9794 2.73005 1.1767 0.9821 0.1974 1.9948 0.1868 2.9726 -0.031 0.9779 -0.2178 1.8993 -0.6379 2.7049 -1.2334l2.5539 2.8695Z" strokeWidth="1"></path>
    <path fill="#66e1ff" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M22.9998 10.5654v2.0087c-0.0814 1.5634 -0.4954 3.0915 -1.2146 4.482 -0.7192 1.3906 -1.727 2.6116 -2.9559 3.5815l-2.5539 -2.8696c1.1579 -0.8459 2.0317 -2.0233 2.5061 -3.3765h-5.3469v-3.8261h9.5652Z" strokeWidth="1"></path>
    <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="m2.79857 5.9937 -0.01 -0.01" strokeWidth="1"></path>
    <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="m2.97045 18.2654 -0.01 0.01" strokeWidth="1"></path>
    <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="m5.85961 15.6637 -0.01 0.01" strokeWidth="1"></path>
  </svg>
);

const ComeTravelKenyaCard = () => {
  const [showQRModal, setShowQRModal] = useState(false);
  const [qrCodeDataURL, setQrCodeDataURL] = useState('');
  const qrCanvasRef = useRef(null);

  // Generate QR Code using canvas
  const generateQRCode = async (text) => {
    const canvas = qrCanvasRef.current;
    if (!canvas) return;
    
    try {
      // Clear canvas first
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw QR code using qrcode library
      await QRCode.toCanvas(canvas, text, {
        width: 200,
        margin: 1,
        color: {
          dark: '#2b4921', // Dark dots
          light: '#FFFFFF' // Light background
        }
      });
      
      return canvas.toDataURL();
    } catch (err) {
      console.error(err);
      return '';
    }
  };

  const handleShowQRModal = async () => {
    setShowQRModal(true);
    // Generate QR code after modal is shown
    setTimeout(async () => {
      const dataURL = await generateQRCode(window.location.href);
      setQrCodeDataURL(dataURL);
    }, 100);
  };

  const handleDownloadQR = () => {
    if (!qrCodeDataURL) return;
    
    const link = document.createElement('a');
    link.download = 'come-travel-kenya-qr.png';
    link.href = qrCodeDataURL;
    link.click();
  };

  const handleSaveContact = () => {
    const contact = `BEGIN:VCARD
VERSION:3.0
FN:Come Travel Kenya Limited
ORG:Come Travel Kenya Limited
TITLE:Destination Management Company
TEL:+254711082254
ADR:;;Rosslyn Riviera Mall, 2nd floor Unit 205, Limuru Road;;;;Kenya
URL:http://www.cometravelkenya.co.ke/
EMAIL:
NOTE:Destination Management Company
END:VCARD`;
    
    const blob = new Blob([contact], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'come-travel-kenya.vcf';
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const handleShareCard = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Come Travel Kenya Limited',
          text: 'Check out this business card for Come Travel Kenya Limited - Your Destination Management Company',
          url: window.location.href
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback - copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Card URL copied to clipboard!');
      } catch (err) {
        console.log('Could not copy text: ', err);
      }
    }
  };

  const socialLinks = [
    { platform: 'Facebook', url: 'http://www.facebook.com/cometravelkenya/', icon: Facebook, color: '#1877F2' },
    { platform: 'Instagram', url: 'http://www.instagram.com/cometravelkenya_', icon: Instagram, color: '#E4405F' },
    { platform: 'Twitter', url: 'http://www.twitter.com/ComeTravelKe', icon: Twitter, color: '#1DA1F2' },
    { platform: 'LinkedIn', url: 'http://www.linkedin.com/company/come-travel-kenya', icon: Linkedin, color: '#0077B5' },
    { platform: 'TikTok', url: 'http://www.tiktok.com/@cometravelkenya', icon: TikTokIcon, color: '#000000' },
    { platform: 'YouTube', url: 'http://www.youtube.com/@Come_Travel_Kenya', icon: Youtube, color: '#FF0000' },
    { platform: 'Google', url: 'https://g.page/r/CfQ4wnfpa6zqEAE/review', icon: GoogleIcon, color: '#4285F4' },
    { platform: 'Threads', url: 'https://www.threads.net/@cometravelkenya_', icon: ThreadsIcon, color: '#000000' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-orange-500 to-red-600 p-4" style={{
      background: 'linear-gradient(135deg, #2b4921 0%, #f99f1b 50%, #d93d27 100%)'
    }}>
      <div className="container mx-auto max-w-4xl">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:-translate-y-2">
          {/* Header Section */}
          <div className="relative p-8 text-white" style={{
            background: 'linear-gradient(135deg, #2b4921 0%, #f99f1b 50%, #d93d27 100%)'
          }}>
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-6">
                {/* Logo/Icon */}
                <div className="animate-bounce">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Image src="/ctk-logo.png" height={80} width={80} alt="ctk logo"/>
                  </div>
                </div>
                
                {/* Company Info */}
                <div className="text-center lg:text-left flex-1">
                  <h1 className="text-4xl lg:text-5xl font-bold mb-2">Come Travel Kenya Limited</h1>
                  <p className="text-lg opacity-80">We are a Destination Management Company</p>
                </div>
                
                {/* QR Code Button */}
                <div className="flex flex-col items-center gap-2">
                  <button 
                    onClick={handleShowQRModal}
                    className="bg-white px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 animate-pulse"
                    style={{ color: '#2b4921' }}
                  >
                    <QrCode className="w-5 h-5" />
                    Get QR Code
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="p-8">
            {/* Location */}
            <div className="mb-8">
              <div className="rounded-xl p-4 border-l-4 bg-orange-50 transition-all duration-300 hover:bg-orange-100 hover:translate-x-1" 
                   style={{ borderLeftColor: '#f99f1b' }}>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6" style={{ color: '#2b4921' }} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Our Location</h3>
                    <p className="text-gray-600">Rosslyn Riviera Mall, 2nd floor Unit 205, Limuru Road</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Website */}
              <a 
                href="http://www.cometravelkenya.co.ke/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-xl p-4 border border-gray-200 hover:border-orange-300 flex items-center gap-3 transition-all duration-300 hover:translate-x-1 hover:bg-orange-50"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: 'rgba(249, 159, 27, 0.1)' }}>
                  <Globe className="w-6 h-6" style={{ color: '#2b4921' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Website</h4>
                  <p className="text-gray-600 text-sm">www.cometravelkenya.co.ke</p>
                </div>
              </a>
              
              {/* WhatsApp */}
              <a 
                href="https://wa.me/+254711082254" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-xl p-4 border border-gray-200 hover:border-green-300 flex items-center gap-3 transition-all duration-300 hover:translate-x-1 hover:bg-green-50"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: 'rgba(43, 73, 33, 0.1)' }}>
                  <MessageCircle className="w-6 h-6" style={{ color: '#25D366' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                  <p className="text-gray-600 text-sm">+254 711 082 254</p>
                </div>
              </a>
            </div>
            
            {/* Social Media Links */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Connect With Us</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg"
                      style={{ backgroundColor: social.color }}
                      title={social.platform}
                    >
                      <IconComponent size={20} color="white" />
                    </a>
                  );
                })}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleSaveContact}
                className="text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                style={{ backgroundColor: '#2b4921' }}
              >
                <Download className="w-5 h-5" />
                Save Contact
              </button>
              <button 
                onClick={handleShareCard}
                className="text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                style={{ backgroundColor: '#d93d27' }}
              >
                <Share2 className="w-5 h-5" />
                Share Card
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center text-white opacity-75">
          <p>&copy; 2024 Come Travel Kenya Limited. All rights reserved.</p>
        </div>
      </div>
      
      {/* QR Code Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-gray-900 bg-opacity-75 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full text-center text-white border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4">QR Code</h3>
            <p className="mb-4 opacity-75">Scan to view this business card</p>
            <div className="bg-white p-4 rounded-2xl mb-4 flex justify-center">
              <canvas ref={qrCanvasRef} width="200" height="200"></canvas>
            </div>
            <div className="flex gap-3 justify-center">
              <button 
                onClick={handleDownloadQR}
                className="text-white px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300 flex items-center gap-2"
                style={{ backgroundColor: '#f99f1b' }}
                disabled={!qrCodeDataURL}
              >
                 <Download className="w-5 h-5" />
                Download
              </button>
              <button 
                onClick={() => setShowQRModal(false)}
                className="bg-gray-600 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComeTravelKenyaCard;