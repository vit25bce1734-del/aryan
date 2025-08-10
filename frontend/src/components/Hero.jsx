import React from 'react';
import { Button } from './ui/button';
import { mockData } from '../data/mockData';
import { Racing3DCar, Speed3DIndicator, RacingTrack3D } from './Racing3DElements';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src="https://images.pexels.com/photos/30149547/pexels-photo-30149547.jpeg" 
          alt="Racing cars on track"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      {/* 3D Racing Track Element */}
      <div className="absolute top-20 right-10 w-32 h-16 opacity-40">
        <RacingTrack3D />
      </div>
      
      {/* 3D Floating Cars */}
      <div className="absolute top-32 right-32 opacity-60">
        <Racing3DCar className="floating-3d" />
      </div>
      <div className="absolute bottom-32 right-20 opacity-40">
        <Racing3DCar className="floating-3d" style={{animationDelay: '2s'}} />
      </div>
      
      <div className="container">
        <div className="hero-content relative">
          <h1 className="brand-display mb-6 depth-layer-4">
            {mockData.team.name}
          </h1>
          <p className="body-large mb-8 max-w-2xl depth-layer-3">
            {mockData.team.tagline}
          </p>
          <p className="body-medium mb-12 text-gray-300 max-w-xl depth-layer-2">
            {mockData.team.heroText}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button className="btn-primary btn-hover-scale interactive-3d">
              View Our Fleet
            </Button>
            <Button className="btn-secondary btn-hover-scale interactive-3d" variant="outline">
              Racing Results
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center stats-3d">
              <div className="heading-2 mb-2 depth-layer-3">{mockData.stats.victories}</div>
              <div className="caption depth-layer-1">Victories</div>
            </div>
            <div className="text-center stats-3d">
              <div className="heading-2 mb-2 depth-layer-3">{mockData.stats.podiums}</div>
              <div className="caption depth-layer-1">Podiums</div>
            </div>
            <div className="text-center stats-3d">
              <div className="heading-2 mb-2 depth-layer-3">{mockData.stats.championships}</div>
              <div className="caption depth-layer-1">Championships</div>
            </div>
            <div className="text-center stats-3d">
              <div className="heading-2 mb-2 depth-layer-3">{new Date().getFullYear() - mockData.stats.founded}</div>
              <div className="caption depth-layer-1">Years Racing</div>
            </div>
          </div>
          
          {/* 3D Speed Indicator */}
          <div className="absolute -bottom-10 -right-20 opacity-70">
            <Speed3DIndicator speed={Math.floor(Math.random() * 300 + 100)} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;