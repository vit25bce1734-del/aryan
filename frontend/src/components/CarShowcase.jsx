import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { mockData } from '../data/mockData';

const CarShowcase = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-6">Our Racing Fleet</h2>
          <p className="body-medium text-gray-300 max-w-2xl mx-auto">
            Precision-engineered machines built for victory. Each car represents years of development and racing expertise.
          </p>
        </div>
        
        <div className="car-3d-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.cars.map((car, index) => (
            <Card key={car.id} className="car-3d-card card-hover-effect bg-gray-900 border-gray-700 overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="car-image w-full h-full object-cover transition-all duration-500"
                />
                <Badge 
                  className={`absolute top-4 right-4 interactive-3d ${
                    car.status === 'Active' ? 'bg-green-600' : 'bg-yellow-600'
                  }`}
                >
                  {car.status}
                </Badge>
                {/* 3D Racing Stripes */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className={`absolute top-0 left-0 w-2 h-full bg-lime-400 transform origin-top floating-3d`} 
                       style={{animationDelay: `${index * 0.5}s`}}></div>
                  <div className={`absolute top-0 right-0 w-2 h-full bg-lime-400 transform origin-top floating-3d`} 
                       style={{animationDelay: `${index * 0.5 + 0.2}s`}}></div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="heading-3 text-lime-400">
                  {car.name}
                </CardTitle>
                <p className="body-small text-gray-400">{car.model}</p>
                <Badge variant="outline" className="w-fit text-lime-400 border-lime-400">
                  {car.category}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="caption text-gray-400">Top Speed</span>
                    <div className="body-small text-white font-bold">{car.topSpeed}</div>
                  </div>
                  <div>
                    <span className="caption text-gray-400">Power</span>
                    <div className="body-small text-white font-bold">{car.power}</div>
                  </div>
                  <div>
                    <span className="caption text-gray-400">Engine</span>
                    <div className="body-small text-white font-bold">{car.engine}</div>
                  </div>
                  <div>
                    <span className="caption text-gray-400">Weight</span>
                    <div className="body-small text-white font-bold">{car.weight}</div>
                  </div>
                </div>
                
                <Button className="btn-secondary w-full mt-6">
                  View Specifications
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarShowcase;