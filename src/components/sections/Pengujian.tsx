'use client';

import { useState } from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import ImageModal from '@/components/ui/ImageModal';
import { pengujianContent } from '@/data/content';

export default function Pengujian() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '' });

  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setModalOpen(true);
  };

  return (
    <Section id="pengujian" background="white">
      <SectionTitle
        title="Pengujian Sistem"
        subtitle="Hasil pengujian functional dan usability testing"
      />

      <div className="max-w-5xl mx-auto space-y-12">
        {/* Functional Testing */}
        <div>
          <h3 className="text-2xl font-bold text-[var(--primary)] mb-6 text-center">
            {pengujianContent.functionalTesting.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pengujianContent.functionalTesting.tables.map((table) => (
              <div
                key={table.id}
                className="group cursor-pointer"
                onClick={() => openModal(table.src, table.alt)}
              >
                <div className="bg-[var(--cream)] rounded-xl p-4 border border-[var(--cream-dark)] card-hover">
                  <div className="relative aspect-video mb-3 overflow-hidden rounded-lg bg-white">
                    <Image
                      src={table.src}
                      alt={table.alt}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Zoom icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[var(--primary)]/10">
                      <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-[var(--primary)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-center font-semibold text-[var(--text-dark)]">
                    {table.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Usability Testing */}
        <div>
          <h3 className="text-2xl font-bold text-[var(--primary)] mb-6 text-center">
            {pengujianContent.usabilityTesting.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pengujianContent.usabilityTesting.tables.map((table) => (
              <div
                key={table.id}
                className="group cursor-pointer"
                onClick={() => openModal(table.src, table.alt)}
              >
                <div className="bg-[var(--cream)] rounded-xl p-4 border border-[var(--cream-dark)] card-hover">
                  <div className="relative aspect-video mb-3 overflow-hidden rounded-lg bg-white">
                    <Image
                      src={table.src}
                      alt={table.alt}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Zoom icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[var(--primary)]/10">
                      <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-[var(--primary)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-center font-semibold text-[var(--text-dark)]">
                    {table.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-2">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-xl font-bold">Hasil Pengujian</span>
          </div>
          <p className="text-lg">{pengujianContent.conclusion}</p>
        </div>

        {/* Click instruction */}
        <p className="text-center text-[var(--text-muted)] text-sm">
          Klik tabel untuk memperbesar
        </p>
      </div>

      {/* Modal */}
      <ImageModal
        isOpen={modalOpen}
        imageSrc={selectedImage.src}
        imageAlt={selectedImage.alt}
        onClose={() => setModalOpen(false)}
      />
    </Section>
  );
}
