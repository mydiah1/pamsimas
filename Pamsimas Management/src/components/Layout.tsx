/**
 * Komponen Layout - Template utama untuk semua halaman
 */
import React from 'react';
import { Droplets, Home, Users, CreditCard, BarChart3 } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  judulHalaman: string;
}

export default function Layout({ children, judulHalaman }: LayoutProps) {
  const menuNavigasi = [
    { nama: 'Dashboard', ikon: Home, href: '#/', aktif: true },
    { nama: 'Pelanggan', ikon: Users, href: '#/pelanggan', aktif: false },
    { nama: 'Tagihan', ikon: CreditCard, href: '#/tagihan', aktif: false },
    { nama: 'Laporan', ikon: BarChart3, href: '#/laporan', aktif: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Droplets className="h-8 w-8 text-blue-600" />
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-900">Manajemen Pamsimas</h1>
                <p className="text-sm text-gray-500">Sistem Pengelolaan Air Minum Perdesaan</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Admin Desa</span>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Navigasi */}
          <nav className="lg:w-64 bg-white shadow rounded-lg border border-gray-200 h-fit">
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Navigasi</h2>
              <ul className="space-y-2">
                {menuNavigasi.map((menu, index) => {
                  const IconComponent = menu.ikon;
                  return (
                    <li key={index}>
                      <a
                        href={menu.href}
                        className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                          menu.aktif
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <IconComponent className="h-5 w-5 mr-3" />
                        {menu.nama}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          {/* Konten Utama */}
          <main className="flex-1">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">{judulHalaman}</h1>
              <p className="text-gray-600 mt-1">
                Kelola sistem Pamsimas Anda dengan mudah dan efisien
              </p>
            </div>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
