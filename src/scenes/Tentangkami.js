import React from "react";

import Section from "elements/Section";
import Header from "parts/Header";
import Feature from "parts/Featurename";
import Footer from "parts/Footer";

export default function Tentangkami() {
  const features = [
    {
      imgAlt: "Muhammad Fadillah Arsa",
      title: "Muhammad Fadillah Arsa ",
      job: "FrontEnd",
      npm: "NPM. 140810170005",
    },
    {
      imgAlt: "Firmansyah Yanuar",
      title: "Firmansyah Yanuar",
      job: "BackEnd",
      npm: "NPM. 140810170051",
    },
    {
      imgAlt: "Kevin Akbar Adhiguna",
      title: "Kevin Akbar Adhiguna",
      job: "Database",
      npm: "NPM. 140810170055",
    },
  ];

  return (
    <div className="body-wrap">
      <Header></Header>
      <main className="site-content">
        <Section className="hero" isCenteredContent>
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <h1 className="mt-0 mb-16">Tentang Kami</h1>

                <div className="container-xs">
                  <p className="mt-0 mb-32">
                    Website ini disusun oleh tim Kudu Juara mata kuliah Semantik
                    Web Prodi S1 Teknik Informatika Universitas Padjadjaran.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section className="features-tiles">
          <div className="container">
            <div className="features-tiles-inner section-inner">
              <div className="tiles-wrap">
                {features.map((feature, index) => (
                  <Feature
                    key={index}
                    delayInMS={index * 500}
                    data={feature}
                  ></Feature>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer></Footer>
    </div>
  );
}
