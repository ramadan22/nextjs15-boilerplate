import Calendar from '@/lib/full-calendar';
import PageBreadcrumb from '@/ui/components/common/PageBreadCrumb';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Calender | TailAdmin - Next.js Dashboard Template',
  description: 'This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template',
  // other metadata
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Calendar" />
      <Calendar />
    </div>
  );
}
