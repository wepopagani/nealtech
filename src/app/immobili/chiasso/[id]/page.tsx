import { notFound } from 'next/navigation';
import { getApartmentById, apartments } from '@/data/apartments';
import ApartmentDetailClient from './ApartmentDetailClient';

// Forza la generazione statica
export const dynamic = 'force-static';
export const dynamicParams = false;

// Genera le pagine statiche per ogni appartamento
export async function generateStaticParams() {
  return apartments.map((apartment) => ({
    id: apartment.id,
  }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ApartmentDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const apartment = getApartmentById(resolvedParams.id);

  if (!apartment) {
    notFound();
  }

  return <ApartmentDetailClient apartment={apartment} />;
}
