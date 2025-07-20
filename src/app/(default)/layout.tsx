'use client';

import React, { ReactElement } from 'react';

import { useSidebarStore } from '@/lib/zustand/SidebarStore';
import AppHeader from '@/ui/layouts/AppHeader';
import AppSidebar from '@/ui/layouts/AppSidebar';
import Backdrop from '@/ui/layouts/Backdrop';

const AdminLayout = ({ children }: { children: React.ReactNode }): ReactElement => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebarStore();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? 'ml-0'
    : isExpanded || isHovered
      ? 'lg:ml-[290px]'
      : 'lg:ml-[90px]';

  return (
    <div className="min-h-screen xl:flex">
      {/* Sidebar and Backdrop */}
      <AppSidebar />
      <Backdrop />
      {/* Main Content Area */}
      <div className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}>
        {/* Header */}
        <AppHeader />
        {/* Page Content */}
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
