'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Dumbbell, Users, CheckCircle, Star } from "lucide-react"

export function GymAppComponent() {
  const [activeTab, setActiveTab] = useState('home')

  const classes = [
    { name: "Yoga", time: "Mon, Wed, Fri 8:00 AM", instructor: "Jane Doe" },
    { name: "HIIT", time: "Tue, Thu 6:00 PM", instructor: "John Smith" },
    { name: "Zumba", time: "Sat 10:00 AM", instructor: "Maria Garcia" },
  ]

  const trainers = [
    { name: "Jane Doe", specialty: "Yoga", experience: "10 years" },
    { name: "John Smith", specialty: "HIIT", experience: "8 years" },
    { name: "Maria Garcia", specialty: "Zumba", experience: "5 years" },
  ]

  const plans = [
    { name: "Basic", price: "$29.99/month", features: ["Access to gym", "2 classes/week"] },
    { name: "Pro", price: "$49.99/month", features: ["Access to gym", "Unlimited classes", "1 personal training session/month"] },
    { name: "Elite", price: "$99.99/month", features: ["Access to gym", "Unlimited classes", "4 personal training sessions/month", "Nutrition consultation"] },
  ]

  const features = [
    { icon: <Dumbbell className="w-12 h-12 mb-4 text-primary" />, title: "State-of-the-art Equipment", description: "Access to the latest fitness technology and equipment" },
    { icon: <Users className="w-12 h-12 mb-4 text-primary" />, title: "Expert Trainers", description: "Guidance from certified fitness professionals" },
    { icon: <Calendar className="w-12 h-12 mb-4 text-primary" />, title: "Flexible Class Schedule", description: "Wide range of classes to fit your busy lifestyle" },
  ]

  const testimonials = [
    { name: "Sarah J.", quote: "FitZone transformed my life! I've never felt healthier or more confident.", rating: 5 },
    { name: "Mike T.", quote: "The trainers here are top-notch. They really know how to push you to your limits.", rating: 5 },
    { name: "Emily R.", quote: "I love the variety of classes. There's always something new to try!", rating: 4 },
  ]

  return (
    (<div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4 sticky top-0 z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">FitZone Gym</h1>
          <div className="space-x-4">
            {['home', 'classes', 'trainers', 'membership', 'contact'].map((tab) => (
          <Button
          key={tab}
          variant={activeTab === tab ? "default" : "ghost"} // eslint-disable-line react/no-unescaped-entities
          onClick={() => setActiveTab(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </Button>
        
            ))}
          </div>
        </nav>
      </header>
      <main className="flex-grow">
        {activeTab === 'home' && (
          <>
            <section className="bg-gray-900 text-white py-20">
              <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold mb-4">Transform Your Body, Transform Your Life</h2>
                <p className="text-xl mb-8">Join FitZone Gym and start your fitness journey today!</p>
                <Button
                  size="lg"
                  onClick={() => setActiveTab('membership')}
                  className="bg-primary hover:bg-primary/90">Get Started Now</Button>
              </div>
            </section>

            <section className="py-16">
              <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Why Choose FitZone?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="text-center">
                      {feature.icon}
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="bg-gray-100 py-16">
              <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Featured Classes</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {classes.map((cls, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-2">{cls.name}</h3>
                      <p className="mb-2"><Calendar className="inline mr-2" />{cls.time}</p>
                      <p><Users className="inline mr-2" />Instructor: {cls.instructor}</p>
                      <Button className="mt-4" onClick={() => setActiveTab('classes')}>Learn More</Button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-16">
              <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">What Our Members Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="mb-4 italic">"{testimonial.quote}"</p>
                      <p className="font-semibold">- {testimonial.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="bg-primary text-white py-16">
              <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Fitness Journey?</h2>
                <p className="text-xl mb-8">Join FitZone today and get your first month at 50% off!</p>
                <Button size="lg" variant="secondary" onClick={() => setActiveTab('membership')}>
                  Claim Your Offer
                </Button>
              </div>
            </section>
          </>
        )}

        {activeTab === 'classes' && (
          <section className="py-12">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Classes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {classes.map((cls, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">{cls.name}</h3>
                    <p className="mb-2"><Calendar className="inline mr-2" />{cls.time}</p>
                    <p><Users className="inline mr-2" />Instructor: {cls.instructor}</p>
                    <Button className="mt-4">Book Class</Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'trainers' && (
          <section className="py-12 bg-gray-100">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Trainers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {trainers.map((trainer, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">{trainer.name}</h3>
                    <p className="mb-2"><Dumbbell className="inline mr-2" />Specialty: {trainer.specialty}</p>
                    <p>Experience: {trainer.experience}</p>
                    <Button className="mt-4">Book Session</Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'membership' && (
          <section className="py-12">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Membership Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <p className="text-2xl font-bold mb-4">{plan.price}</p>
                    <ul className="mb-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center mb-2">
                          <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">Choose Plan</Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'contact' && (
          <section className="py-12 bg-gray-100">
            <div className="container mx-auto max-w-md">
              <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </section>
        )}
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">FitZone Gym</h3>
              <p>Transforming lives through fitness since 2010.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Button
                  variant="link"
                  className="p-0 h-auto text-white"
                  onClick={() => setActiveTab('home')}>Home</Button></li>
                <li><Button
                  variant="link"
                  className="p-0 h-auto text-white"
                  onClick={() => setActiveTab('classes')}>Classes</Button></li>
                <li><Button
                  variant="link"
                  className="p-0 h-auto text-white"
                  onClick={() => setActiveTab('trainers')}>Trainers</Button></li>
                <li><Button
                  variant="link"
                  className="p-0 h-auto text-white"
                  onClick={() => setActiveTab('membership')}>Membership</Button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>123 Fitness Street, Gymville, GY 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@fitzonegym.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 FitZone Gym. All rights reserved.</p>
            <p className="mt-2">Sponsored by Promptflow</p>
          </div>
        </div>
      </footer>
    </div>)
  );
}