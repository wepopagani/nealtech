import { notFound } from 'next/navigation';
import { getApartmentById, apartments } from '@/data/apartments';
import ApartmentDetailClient from './ApartmentDetailClient';

// Genera le pagine statiche per ogni appartamento
export function generateStaticParams() {
  return apartments.map((apartment) => ({
    id: apartment.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ApartmentDetailPage({ params }: PageProps) {
  const { id } = await params;
  const apartment = getApartmentById(id);

  if (!apartment) {
    notFound();
  }

  return <ApartmentDetailClient apartment={apartment} />;
}
