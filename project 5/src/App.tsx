import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Aditya Madukuri
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              DevOps Engineer specializing in cloud infrastructure and automation
            </p>
            <div className="mt-5 max-w-md mx-auto flex justify-center space-x-4">
              <a href="https://www.linkedin.com/in/adityamadukuri/" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:adityachouda1y2020@gmail.com" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-3 text-gray-500">Cleveland, OH | 216-551-6948</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skills Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Programming & Scripting Languages</h3>
              <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {['Python', 'C', 'Bash', 'Shell Scripting', 'PowerShell Scripting'].map((skill) => (
                  <div key={skill} className="bg-white px-4 py-2 shadow rounded-lg text-center text-gray-800">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Cloud & DevOps Tools</h3>
              <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'Ansible', 'Terraform', 'JFrog'].map((skill) => (
                  <div key={skill} className="bg-white px-4 py-2 shadow rounded-lg text-center text-gray-800">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">Operating Systems & Version Control</h3>
              <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {['Ubuntu', 'Windows', 'MacOS', 'GitHub', 'GitLab'].map((skill) => (
                  <div key={skill} className="bg-white px-4 py-2 shadow rounded-lg text-center text-gray-800">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Professional Experience</h2>
          <div className="mt-6 space-y-8">
            <div className="bg-white shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  DevOps Engineer
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Foray Software (FIS Client) • Dec 2021 - Dec 2022
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <ul className="list-disc list-inside text-gray-500 space-y-2">
                  <li>Managed and maintained Azure DevOps services, ensuring high availability and performance</li>
                  <li>Expertise in provisioning and maintaining AWS instances using Terraform and automation scripts</li>
                  <li>Implemented build artifact management using JFrog Artifactory</li>
                  <li>Configured and optimized Azure CI/CD pipelines for continuous integration and deployment</li>
                  <li>Deployed and troubleshot Kubernetes clusters, ensuring efficient container orchestration</li>
                  <li>Automated infrastructure setup using Ansible for consistent deployment processes</li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  AWS DevOps Engineer
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Cognizant • July 2020 - Sep 2021
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <ul className="list-disc list-inside text-gray-500 space-y-2">
                  <li>Designed and implemented AWS Cloud Architecture with services such as EC2, VPC, RDS, S3, Route 53, and ELB</li>
                  <li>Automated deployment using Jenkins and Ansible, streamlining CI/CD pipelines</li>
                  <li>Created and managed security groups, IAM roles, and policies for secure AWS resource access</li>
                  <li>Monitored system performance using AWS CloudWatch and SNS, optimizing system efficiency</li>
                  <li>Developed and implemented cloud infrastructure automation and orchestration scripts, resulting in a 40% reduction in deployment time and a 25% increase in infrastructure efficiency</li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  L1 Support Engineer
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Cognizant • May 2018 - July 2020
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <ul className="list-disc list-inside text-gray-500 space-y-2">
                  <li>Provided technical support for Linux-based environments, ensuring stability and uptime</li>
                  <li>Managed user access controls, troubleshooting, and maintenance tasks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500">
            <p>© {new Date().getFullYear()} Aditya Madukuri. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;