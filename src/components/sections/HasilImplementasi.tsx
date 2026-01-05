'use client';

import { useState } from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import ImageModal from '@/components/ui/ImageModal';
import { hasilImplementasiContent } from '@/data/content';

export default function HasilImplementasi() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '' });

  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setModalOpen(true);
  };

  return (
    <Section id="hasil-implementasi" background="cream">
      <SectionTitle
        title="Hasil Implementasi"
        subtitle="Tampilan aplikasi Dompet Warga"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hasilImplementasiContent.map((screenshot) => (
          <div
            key={screenshot.id}
            className="group cursor-pointer"
            onClick={() => openModal(screenshot.src, screenshot.alt)}
          >
            <div className="bg-white rounded-xl p-4 shadow-md border border-[var(--cream-dark)] card-hover">
              <div className="relative aspect-[9/16] mb-4 overflow-hidden rounded-lg bg-[var(--cream)]">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[var(--primary)]/0 group-hover:bg-[var(--primary)]/20 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[var(--primary)]"
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
              </div>
              <h4 className="text-center font-semibold text-[var(--text-dark)]">
                {screenshot.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Click instruction */}
      <p className="text-center text-[var(--text-muted)] mt-8 text-sm">
        Klik gambar untuk memperbesar
      </p>

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
