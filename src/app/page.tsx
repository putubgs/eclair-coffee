"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Coffee,
  ChevronRight,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MenuSection } from "@/components/menu-section";
import { CollapsibleMenuSection } from "@/components/collapsible-menu-section";
import { useState, useEffect } from "react";

const foodMenu = {
  mains: [
    { name: "SOTO AYAM", price: "25k" },
    { name: "NASI KULIT SAMBAL KOREK", price: "27k" },
    { name: "NASI KULIT SAMBAL GEPREK", price: "27k" },
    { name: "NASI KULIT SAMBAL HIJAU", price: "28k" },
    { name: "NASI GILA", price: "30k" },
    { name: "AYAM SAMBAL MATAH", price: "30k" },
    { name: "AYAM GEPREK", price: "30k" },
    { name: "AYAM KATSU", price: "31k" },
    { name: "NASI GORENG AYAM", price: "32k" },
    { name: "NASI GORENG KOMPLIT", price: "37k" },
    { name: "SPAGHETTI CARBONARA", price: "40k" },
    { name: "SPAGHETTI BOLOGNESE", price: "40k" },
  ],
  lightBites: [
    { name: "POTATO WEDGES", price: "20k" },
    { name: "FRENCH FRIES", price: "23k" },
    { name: "WONTON", price: "25k" },
    { name: "ÉCLAIR WINGS", price: "35k" },
    { name: "BARBECUE WINGS", price: "35k" },
    { name: "SOY GARLIC WINGS", price: "36k" },
    { name: "GORENGAN", price: "20k" },
  ],
  sweetBites: [
    { name: "PANCAKE COKLAT", price: "29k" },
    { name: "PANCAKE STRAWBERRY", price: "29k" },
    { name: "PANCAKE MATCHA GLAZE", price: "33k" },
    { name: "PANCAKE TIRAMISU GLAZE", price: "33k" },
  ],
};

const drinksMenu = {
  coffee: [
    { name: "PICCOLO", price: "18k" },
    { name: "ESPRESSO", price: "18k" },
    { name: "AMERICANO", price: "23k / 25k", description: "HOT / COLD" },
    { name: "CAPPUCCINO", price: "25k / 28k", description: "HOT / COLD" },
    { name: "LATTE", price: "25k / 28k", description: "HOT / COLD" },
  ],
  nonCoffee: [
    { name: "TEA", price: "15k" },
    { name: "LEMON TEA", price: "18k" },
    { name: "LYCHEE TEA", price: "21k" },
    { name: "BABYCINO", price: "17k" },
    { name: "CHOCOLATE", price: "25k / 27k", description: "HOT / COLD" },
    { name: "RED VELVET", price: "25k / 28k", description: "HOT / COLD" },
    { name: "MATCHA", price: "27k / 28k", description: "HOT / COLD" },
    { name: "REGAL ROYALÉ", price: "33k" },
    { name: "OREO MILK TEA", price: "36k" },
    { name: "AIR MINERAL", price: "10k" },
  ],
  flavoredLatte: [
    { name: "PANDAN LATTE", price: "33k" },
    { name: "SALTED CARAMEL", price: "35k" },
    { name: "BUTTERSCOTCH", price: "35k" },
  ],
  signature: [
    { name: "MANGGO PRO", price: "26k" },
    { name: "AMERICAN CRIMSON", price: "31k" },
    { name: "CINNAMON CREAM", price: "33k" },
    { name: "COOKIES & CREAM", price: "39k" },
  ],
  frappe: [
    { name: "CHOCOLATE FRAPPE", price: "32k" },
    { name: "RED VELVET FRAPPE", price: "32k" },
    { name: "CARAMEL FRAPPE", price: "34k" },
    { name: "MATCHA FRAPPE", price: "35k" },
  ],
};

const pastriesMenu = [
  { name: "PLAIN CROISSANT", price: "25k" },
  { name: "ALMOND CROISSANT", price: "27k" },
  { name: "PAIN AU CHOCOLATE", price: "27k" },
  { name: "SUISE ALMOND CHOCO", price: "30k" },
  { name: "SUICE CHOCO CHEESE", price: "30k" },
  { name: "HAM ON CHEESE", price: "35k" },
  { name: "CROOKIES", price: "35k" },
];

export default function Home() {
  const placeImages = [
    { src: "/coffee-shop-3.jpg", alt: "Éclair Coffee Shop - 1" },
    { src: "/coffee-place.jpg", alt: "Éclair Coffee Shop - 2" },
    { src: "/coffee-food.jpg", alt: "Éclair Coffee Shop - 3" },
    { src: "/coffee-shop-2.jpg", alt: "Éclair Coffee Shop - 4" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % placeImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, placeImages.length]);

  return (
    <div className="flex min-h-screen flex-col bg-[#FDF5E6]">
      <header className="sticky top-0 z-50 w-full border-b bg-[#F9F0D9]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F9F0D9]/60">
        <div className="container flex h-20 items-center justify-between mx-auto px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/eclair-logo.png"
              alt="Éclair Logo"
              width={120}
              height={48}
              className="h-12 w-auto"
            />
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#menu"
              className="text-sm font-medium text-[#8B4513] hover:text-[#5D2E0D] transition-colors"
            >
              Menu
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-[#8B4513] hover:text-[#5D2E0D] transition-colors"
            >
              About
            </Link>
            <Link
              href="https://maps.app.goo.gl/ssfYUvqh2jgQCNjr5"
              className="text-sm font-medium text-[#8B4513] hover:text-[#5D2E0D] transition-colors"
              target="_blank"
            >
              Location
            </Link>
          </nav>
          <Button
            className="bg-[#8B4513] hover:bg-[#5D2E0D] text-white"
            asChild
          >
            <Link
              href="https://wa.me/6282236674035"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl text-[#8B4513]">
                  Start Your Day at{" "}
                  <span className="text-[#5D2E0D]">Éclair</span>
                </h1>
                <p className="max-w-[600px] text-[#5D2E0D] text-xl md:text-2xl">
                  Experience our signature Breakfast Bundle featuring premium
                  coffee and freshly baked croissants.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="bg-[#8B4513] hover:bg-[#5D2E0D] text-white text-lg"
                    asChild
                  >
                    <Link
                      href="https://maps.app.goo.gl/ssfYUvqh2jgQCNjr5"
                      target="_blank"
                    >
                      Visit Us
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white text-lg"
                    asChild
                  >
                    <Link href="#menu">View Menu</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/coffee-shop-1.jpg"
                  alt="Breakfast Bundle - Coffee and Croissant"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-[#8B4513] font-bold">Breakfast Bundle</p>
                  <p className="text-[#5D2E0D]">Only 32k</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Coffee className="h-16 w-16 text-[#8B4513]" />
                <h3 className="text-2xl font-bold text-[#5D2E0D]">
                  Premium Coffee
                </h3>
                <p className="text-[#8B4513] text-lg">
                  Made from 100% Arabica beans with double shots of ristretto
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Clock className="h-16 w-16 text-[#8B4513]" />
                <h3 className="text-2xl font-bold text-[#5D2E0D]">
                  Special Morning Deals
                </h3>
                <p className="text-[#8B4513] text-lg">
                  Breakfast Bundle available Monday 8AM-10AM
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <GraduationCap className="h-16 w-16 text-[#8B4513]" />
                <h3 className="text-2xl font-bold text-[#5D2E0D]">
                  Student Discount
                </h3>
                <p className="text-[#8B4513] text-lg">
                  15% off with valid student ID, Tue-Fri 12PM-5PM
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Preview Section */}
        <section id="menu" className="w-full py-20 md:py-32 bg-[#F5E5D3]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl text-center mb-16 text-[#5D2E0D]">
              Our Menu
            </h2>

            {/* Mobile Menu */}
            <div className="md:hidden space-y-4">
              <CollapsibleMenuSection
                title="Food Menu"
                subtitle="Mains"
                items={foodMenu.mains}
              />
              <CollapsibleMenuSection
                title="Light Bites"
                items={foodMenu.lightBites}
              />
              <CollapsibleMenuSection
                title="Sweet Bites"
                items={foodMenu.sweetBites}
              />
              <CollapsibleMenuSection
                title="Coffee"
                description="Made from 100% Arabica beans, freshmilk, with double shots of ristretto."
                items={drinksMenu.coffee}
              />
              <CollapsibleMenuSection
                title="Non Coffee"
                items={drinksMenu.nonCoffee}
              />
              <CollapsibleMenuSection
                title="Flavored Latte"
                description="Crafted with passion by our skilled baristas. Every sip is a taste of perfection!"
                items={drinksMenu.flavoredLatte}
              />
              <CollapsibleMenuSection
                title="Signature Drinks"
                items={drinksMenu.signature}
              />
              <CollapsibleMenuSection
                title="Frappe"
                items={drinksMenu.frappe}
              />
              <CollapsibleMenuSection title="Pastries" items={pastriesMenu} />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-12">
                <MenuSection
                  title="Food Menu"
                  subtitle="Mains"
                  items={foodMenu.mains}
                />
                <MenuSection title="Light Bites" items={foodMenu.lightBites} />
                <MenuSection title="Sweet Bites" items={foodMenu.sweetBites} />
              </div>
              <div className="space-y-12">
                <MenuSection
                  title="Drinks Menu"
                  subtitle="Coffee"
                  description="Made from 100% Arabica beans, freshmilk, with double shots of ristretto."
                  items={drinksMenu.coffee}
                />
                <MenuSection title="Non Coffee" items={drinksMenu.nonCoffee} />
                <MenuSection
                  title="Flavored Latte"
                  description="Crafted with passion by our skilled baristas. Every sip is a taste of perfection!"
                  items={drinksMenu.flavoredLatte}
                />
              </div>
              <div className="space-y-12">
                <MenuSection
                  title="Signature Drinks"
                  items={drinksMenu.signature}
                />
                <MenuSection title="Frappe" items={drinksMenu.frappe} />
                <MenuSection title="Pastries" items={pastriesMenu} />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative h-[400px] md:h-[600px] w-full max-w-[600px] mx-auto">
                {placeImages.map((image, index) => (
                  <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={600}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                      index === currentIndex
                        ? "opacity-100 z-10"
                        : index === previousIndex
                        ? "opacity-0 z-10"
                        : "opacity-0 z-0"
                    } rounded-2xl object-cover shadow-2xl`}
                  />
                ))}
                <div className="absolute -bottom-6 md:-right-6 -right-4 bg-[#F5E5D3] p-4 rounded-lg shadow-lg z-20">
                  <p className="text-[#8B4513] font-bold">Cozy Atmosphere</p>
                  <p className="text-[#5D2E0D]">Perfect for any occasion</p>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-[#5D2E0D]">
                  Discover the Essence of Éclair
                </h2>
                <p className="text-[#8B4513] text-xl">
                  At Éclair, we create unforgettable moments with every sip and
                  bite. From expertly brewed coffee to freshly baked pastries,
                  each offering is crafted with precision, passion, and care.
                </p>
                <p className="text-[#8B4513] text-xl">
                  Whether you&apos;re here for a delightful breakfast, a quiet
                  workspace, or quality time with friends, Éclair is more than
                  just a coffee shop—it&apos;s an experience you&apos;ll
                  cherish.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="w-full py-20 md:py-32 bg-[#F9F0D9]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-[#5D2E0D]">
                Visit Us Today
              </h2>
              <p className="max-w-[600px] text-[#8B4513] text-xl">
                Experience the perfect blend of coffee and comfort
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-center">
                <Button
                  size="lg"
                  className="bg-[#8B4513] hover:bg-[#5D2E0D] text-white text-lg gap-2"
                  asChild
                >
                  <Link
                    href="https://maps.app.goo.gl/ssfYUvqh2jgQCNjr5"
                    target="_blank"
                  >
                    <MapPin className="h-5 w-5" />
                    Find Us on Maps
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white text-lg gap-2"
                  asChild
                >
                  <Link
                    href="https://wa.me/6282236674035"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-[#F9F0D9]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4 py-8 md:py-12">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/eclair-logo.png"
              alt="Éclair Logo"
              width={120}
              height={48}
              className="h-12 w-auto"
            />
          </div>

          {/* Text */}
          <div className="flex justify-center md:justify-end">
            <p className="text-sm text-[#8B4513] md:text-base">
              © 2024 Éclair. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
