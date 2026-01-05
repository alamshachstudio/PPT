import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { downloadContent } from '@/data/content';

export default function DownloadQR() {
  return (
    <Section id="download" background="white">
      <SectionTitle
        title={downloadContent.title}
        subtitle={downloadContent.description}
      />

      <div className="max-w-md mx-auto text-center">
        {/* QR Code Card */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--cream-dark)]">
          <div className="relative w-64 h-64 mx-auto mb-6 bg-[var(--cream)] rounded-xl overflow-hidden">
            <Image
              src={downloadContent.qrImage}
              alt="QR Code Download Dompet Warga"
              fill
              className="object-contain p-4"
              priority
            />
          </div>

          {/* App name */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--primary)] flex items-center justify-center">
              <span className="text-white font-bold">DW</span>
            </div>
            <span className="text-xl font-bold text-[var(--primary)]">
              Dompet Warga
            </span>
          </div>

          {/* Instruction */}
          <p className="text-[var(--text-muted)] text-sm">
            Arahkan kamera ponsel Anda ke QR Code di atas untuk mengunduh
            aplikasi
          </p>
        </div>

        {/* Platform badges */}
        <div className="flex justify-center gap-4 mt-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-[var(--cream)] rounded-lg">
            <span className="text-2xl">📱</span>
            <span className="text-sm font-medium text-[var(--text-dark)]">
              Android
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
