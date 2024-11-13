/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Joel Benson</h1>
          <p className="text-xl text-gray-600 mb-4">Electronics and Computer Science Engineer</p>
          <div className="flex justify-center space-x-4 mb-4">
            <Button variant="outline" size="icon" className="bg-white hover:bg-gray-100">
              <Phone className="h-4 w-4" />
              <span className="sr-only">Phone</span>
            </Button>
            <Button variant="outline" size="icon" className="bg-white hover:bg-gray-100">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
            <Button variant="outline" size="icon" className="bg-white hover:bg-gray-100">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="outline" size="icon" className="bg-white hover:bg-gray-100">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </div>
          <Link href="/" passHref>
            <Button variant="outline" className="bg-white hover:bg-gray-100">
              Back to Home
            </Button>
          </Link>
        </header>

        <main className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Education</h2>
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Bachelor of Engineering in Electronics and Computer Science</CardTitle>
                <CardDescription>Fr. Conceicao Rodrigues College of Engineering, Bandra(W), Mumbai</CardDescription>
              </CardHeader>
              <CardContent>
                <p>CGPA – 7.4 /10</p>
                <p>Nov 14 - Present</p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Industrial Experience</h2>
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Python Intern</CardTitle>
                <CardDescription>17th June 2024 -8th July 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Developed a software which will recognise emotion based on the Amazon Product Review</p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Projects</h2>
            <div className="space-y-4">
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Anti-Corruption Website (Google Developers Student Club)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Created an impactful website as part of the GDSC Hackathon with functionalities like chatbot for customer service</li>
                    <li>Integrated APIs like GeoTag and Encryption services</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Canteen Website Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>As a key member I contributed to the development of a user-friendly website for the College canteen</li>
                    <li>We used PHP for our backend and connected it to the MySQL database using xampp</li>
                    <li>We added functions like add to cart Retrieving data from database and integrated API of Razorpay for payment purposes</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technical Skills</h2>
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <p><strong>Experienced:</strong> C++, HTML, CSS, PHP, MySQL, Javascript, Python</p>
                <p><strong>Familiar:</strong> Java, C, Verilog, System Verilog, React</p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Positions of Responsibility</h2>
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>GDA – Junior Webmaster:</strong> Developed and maintained web content including website navigation, images, text, and multimedia.</li>
                  <li><strong>GDA – Senior Technical Head:</strong> Senior Committee Member in the Technical Team</li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </main>

        {/* Download Resume Button */}
        <div className="mt-12 text-center">
          <Link href="/resume.pdf" download>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Download Resume
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
