"use client"
import React from 'react'
import ServiceCard from '../ServiceCard/ServiceCard';

const services = [
  {
    title: 'Personal Training Sessions',
    description: 'Our trainers will help you meet your fitness goals with one-on-one customized workouts.',
    imageUrl: '/background_img/trainer.jpg',
  },
  {
    title: 'Group Fitness Classes',
    description: 'Join our fun and energetic group classes to stay fit and motivated with others.',
    imageUrl: '/background_img/dude_workx_hard.jpg',
  },
  {
    title: 'Nutrition Coaching',
    description: 'Our experts provide personalized nutrition plans to complement your fitness routine.',
    imageUrl: '/background_img/dude_chilling.jpg',
  },
];

const Offers = () => (
  <section className="w-full py-8 bg-gray-900">
    <h2 className="text-4xl font-bold text-center mb-8 text-white">Introducing Our Services</h2>
    <div className="flex flex-wrap justify-center gap-8 px-4">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  </section>
);

export default Offers;
