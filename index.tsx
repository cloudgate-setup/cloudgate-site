import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useCallback } from "react";
import Image from "next/image";

export default function CloudGateLandingPage() {
  const [form, setForm] = useState({ name: '', store: '', email: '', phone: '', interest: '', message: '' });

  const handleChange = useCallback((e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-gray-900 p-6 space-y-16 max-w-6xl mx-auto font-sans">
      <section className="text-center space-y-6">
        <div className="w-40 h-40 mx-auto relative">
          <Image src="/logo.png" alt="CloudGate Logo" fill sizes="160px" style={{ objectFit: "contain" }} priority />
        </div>
        <h1 className="text-5xl font-extrabold leading-tight text-green-600">CloudGate Supply</h1>
        <p className="text-xl text-gray-600">Premium THCA Flower | Wholesale Pricing | Fast Fulfillment</p>
        <div className="space-x-4">
          <Button className="text-lg px-6 py-3 bg-green-500 hover:bg-green-600 text-white border-none shadow-md">View Full Menu</Button>
          <Button variant="outline" className="text-lg px-6 py-3 border-green-500 text-green-600 hover:bg-green-100">Become a Partner</Button>
        </div>
      </section>

      <section className="grid md:grid-cols-4 gap-6 text-center">
        <Card className="shadow-md border-0 bg-white">
          <CardContent className="p-6">🔥 Premium flower direct from Fiji Flavorz</CardContent>
        </Card>
        <Card className="shadow-md border-0 bg-white">
          <CardContent className="p-6">📦 Reliable & fast shipping across the U.S.</CardContent>
        </Card>
        <Card className="shadow-md border-0 bg-white">
          <CardContent className="p-6">📈 Straightforward pricing & low minimums</CardContent>
        </Card>
        <Card className="shadow-md border-0 bg-white">
          <CardContent className="p-6">👊 Built by hustlers for real retailers</CardContent>
        </Card>
      </section>

      <section className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-green-600">🔥 Featured Pricing</h2>
        <p className="text-lg">Indoor 30%+ – <strong>$1,100/lb</strong></p>
        <p className="text-lg">Exotic 30%+ – <strong>$1,650/lb</strong></p>
        <p className="text-lg">Greenhouse, Smalls & Prepack Available</p>
        <Button className="mt-3 px-6 py-2 text-base bg-green-500 text-white hover:bg-green-600">📥 Download Full Menu</Button>
      </section>

      <section className="space-y-4 bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-2xl font-semibold text-green-600">How It Works</h2>
        <ol className="list-decimal list-inside space-y-1 text-gray-700">
          <li>Browse our menu and choose your products</li>
          <li>Submit your info to get verified</li>
          <li>Place your first wholesale order</li>
          <li>Product ships fast from our fulfillment center</li>
        </ol>
        <p className="text-sm text-gray-500">We accept payments via invoice, Zelle, or ACH. Licensed retailers only (21+).</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-green-600">Let’s Do Business</h2>
        <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2 bg-white p-6 rounded-xl shadow-lg">
          <Input placeholder="Your Name" name="name" onChange={handleChange} required className="bg-gray-100 text-black" aria-label="Your Name" />
          <Input placeholder="Store Name" name="store" onChange={handleChange} required className="bg-gray-100 text-black" aria-label="Store Name" />
          <Input placeholder="Email" type="email" name="email" onChange={handleChange} required className="bg-gray-100 text-black" aria-label="Email" />
          <Input placeholder="Phone" name="phone" onChange={handleChange} required className="bg-gray-100 text-black" aria-label="Phone" />
          <Textarea placeholder="What products are you interested in?" name="interest" onChange={handleChange} className="md:col-span-2 bg-gray-100 text-black" aria-label="Product Interest" />
          <Textarea placeholder="Any additional message (optional)" name="message" onChange={handleChange} className="md:col-span-2 bg-gray-100 text-black" aria-label="Additional Message" />
          <Button type="submit" className="md:col-span-2 py-3 text-lg bg-green-500 hover:bg-green-600">🚀 Submit Inquiry</Button>
        </form>
      </section>

      <footer className="text-center text-sm pt-10 border-t border-gray-300 mt-10 text-gray-500">
        <p>📍 Based in Charlotte, NC | IG: @cloudgatesupply</p>
        <p>Wholesale Only – 21+ Licensed Retailers</p>
        <p>© 2025 CloudGate Supply</p>
      </footer>
    </div>
  );
}
