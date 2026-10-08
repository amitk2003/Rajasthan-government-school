import React from 'react';
import Carousel from '../components/Carousel.jsx';
import StatsBanner from '../components/StatsBanner.jsx';
import NoticesAndPrincipal from '../components/NoticesAndPrincipal.jsx';
import LabsShowcase from '../components/LabsShowcase.jsx';
import TopperSpotlight from '../components/TopperSpotlight.jsx';
import ArchitecturePillars from '../components/ArchitecturePillars.jsx';
import Mission from '../components/Mission.jsx';

const Home = () => {
  return (
    <div className="w-full">
      {/* 1. Institutional Hero Slider */}
      <Carousel />

      {/* 2. Quick Key Performance Metrics Bar */}
      <StatsBanner />

      {/* 3. Official Notice Board & Principal's Message */}
      <NoticesAndPrincipal />

      {/* 4. State-of-the-Art Labs & Infrastructure Spotlight */}
      <LabsShowcase />

      {/* 5. Board Toppers & Hall of Fame Preview */}
      <TopperSpotlight />

      {/* 6. Production Architecture & Cloud System Showcase (User 4 Points) */}
      {/* <ArchitecturePillars /> */}

      {/* 7. Institutional Mission, Values & Student Attributes */}
      <Mission />
    </div>
  );
};

export default Home;
