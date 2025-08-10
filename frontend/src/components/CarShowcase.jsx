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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.cars.map((car) => (
            <Card key={car.id} className="card-hover-effect bg-gray-900 border-gray-700 overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <Badge 
                  className={`absolute top-4 right-4 ${
                    car.status === 'Active' ? 'bg-green-600' : 'bg-yellow-600'
                  }`}
                >
                  {car.status}
                </Badge>
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