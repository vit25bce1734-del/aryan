// Mock data for racing team website
export const mockData = {
  team: {
    name: "VELOCITY RACING",
    tagline: "SPEED. PRECISION. VICTORY.",
    heroText: "DOMINATING THE TRACK SINCE 2018"
  },
  
  cars: [
    {
      id: 1,
      name: "THUNDER V8",
      model: "GT-R Pro",
      category: "Formula Racing",
      topSpeed: "320 KM/H",
      engine: "5.0L V8 Twin Turbo",
      power: "850 HP",
      weight: "1200 KG",
      image: "https://images.unsplash.com/photo-1558649780-d3e2b8af0eb8?w=800&h=600&fit=crop",
      status: "Active"
    },
    {
      id: 2,
      name: "LIGHTNING BOLT",
      model: "RS-X Elite",
      category: "Circuit Racing",
      topSpeed: "295 KM/H",
      engine: "4.2L V6 Turbo",
      power: "720 HP",
      weight: "1150 KG",
      image: "https://images.unsplash.com/photo-1494976378500-72503e509d3b?w=800&h=600&fit=crop",
      status: "Active"
    },
    {
      id: 3,
      name: "STORM CHASER",
      model: "ZX-9 Hybrid",
      category: "Endurance Racing",
      topSpeed: "285 KM/H",
      engine: "3.8L V6 Hybrid",
      power: "680 HP",
      weight: "1100 KG",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
      status: "Development"
    }
  ],
  
  results: [
    {
      id: 1,
      race: "Monaco Grand Prix",
      date: "2024-05-26",
      position: 1,
      driver: "Alex Rodriguez",
      car: "THUNDER V8",
      lapTime: "1:14.832",
      points: 25
    },
    {
      id: 2,
      race: "Silverstone Circuit",
      date: "2024-06-15",
      position: 2,
      driver: "Maria Santos",
      car: "LIGHTNING BOLT",
      lapTime: "1:26.147",
      points: 18
    },
    {
      id: 3,
      race: "Circuit de Spa",
      date: "2024-07-03",
      position: 1,
      driver: "Alex Rodriguez",
      car: "THUNDER V8",
      lapTime: "2:03.924",
      points: 25
    },
    {
      id: 4,
      race: "Nürburgring",
      date: "2024-07-20",
      position: 3,
      driver: "James Chen",
      car: "STORM CHASER",
      lapTime: "6:47.891",
      points: 15
    }
  ],
  
  drivers: [
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "Lead Driver",
      experience: "8 Years",
      wins: 47,
      podiums: 89,
      championships: 3,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Maria Santos",
      role: "Senior Driver",
      experience: "6 Years",
      wins: 23,
      podiums: 56,
      championships: 1,
      image: "https://images.unsplash.com/photo-1494790108755-2616b2b4b4b4?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "James Chen",
      role: "Development Driver",
      experience: "4 Years",
      wins: 12,
      podiums: 28,
      championships: 0,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    }
  ],
  
  stats: {
    totalRaces: 156,
    victories: 89,
    podiums: 234,
    championships: 12,
    founded: 2018
  }
};