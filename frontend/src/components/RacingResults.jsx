import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Trophy, Medal, Award } from 'lucide-react';
import { mockData } from '../data/mockData';

const RacingResults = () => {
  const getPositionIcon = (position) => {
    switch (position) {
      case 1:
        return <Trophy className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Award className="w-5 h-5 text-orange-600" />;
      default:
        return <div className="w-5 h-5 rounded-full bg-gray-600 flex items-center justify-center text-xs text-white">{position}</div>;
    }
  };

  const getPositionColor = (position) => {
    switch (position) {
      case 1:
        return 'bg-yellow-500/20 text-yellow-500 border-yellow-500';
      case 2:
        return 'bg-gray-400/20 text-gray-400 border-gray-400';
      case 3:
        return 'bg-orange-600/20 text-orange-600 border-orange-600';
      default:
        return 'bg-gray-600/20 text-gray-400 border-gray-600';
    }
  };

  return (
    <section className="py-24 bg-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-6">Latest Racing Results</h2>
          <p className="body-medium text-gray-300 max-w-2xl mx-auto">
            Our recent performances on the world's most challenging circuits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mockData.results.map((result, index) => (
            <Card key={result.id} className="result-3d-card card-hover-effect bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <div className="relative">
                  <CardTitle className="heading-3 text-lime-400 mb-2 depth-layer-2">
                    {result.race}
                  </CardTitle>
                  <p className="caption text-gray-400 depth-layer-1">
                    {new Date(result.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  {/* 3D Racing Track Element */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 opacity-20">
                    <div className="racing-track-3d w-full h-full border-2 border-lime-400 rounded-full"></div>
                  </div>
                </div>
                <Badge className={`${getPositionColor(result.position)} flex items-center gap-2 interactive-3d depth-layer-3`}>
                  {getPositionIcon(result.position)}
                  P{result.position}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="caption text-gray-400">Driver</span>
                    <div className="body-small text-white font-bold">{result.driver}</div>
                  </div>
                  <div>
                    <span className="caption text-gray-400">Car</span>
                    <div className="body-small text-white font-bold">{result.car}</div>
                  </div>
                  <div>
                    <span className="caption text-gray-400">Best Lap</span>
                    <div className="body-small text-white font-bold">{result.lapTime}</div>
                  </div>
                  <div>
                    <span className="caption text-gray-400">Points</span>
                    <div className="body-small text-lime-400 font-bold">{result.points} PTS</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Results
          </button>
        </div>
      </div>
    </section>
  );
};

export default RacingResults;