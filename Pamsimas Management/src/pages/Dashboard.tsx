/**
 * Halaman Dashboard - Tampilan utama sistem manajemen Pamsimas
 */
import React from 'react';
import { Users, Droplets, CreditCard, BarChart3, AlertCircle } from 'lucide-react';
import Layout from '../components/Layout';

export default function Dashboard() {
  // Data statistik dashboard
  const statistik = [
    { 
      judul: 'Total Pelanggan', 
      nilai: '1.247', 
      ikon: Users, 
      warna: 'bg-blue-500',
      deskripsi: 'Pelanggan aktif'
    },
    { 
      judul: 'Pemakaian Air', 
      nilai: '45.230 L', 
      ikon: Droplets, 
      warna: 'bg-cyan-500',
      deskripsi: 'Bulan ini'
    },
    { 
      judul: 'Tagihan Tertunda', 
      nilai: 'Rp 12,5 Jt', 
      ikon: CreditCard, 
      warna: 'bg-orange-500',
      deskripsi: 'Belum dibayar'
    },
    { 
      judul: 'Pendapatan Bulanan', 
      nilai: 'Rp 28,7 Jt', 
      ikon: BarChart3, 
      warna: 'bg-green-500',
      deskripsi: 'Bulan berjalan'
    }
  ];

  // Aktivitas terbaru
  const aktivitasTerbaru = [
    { 
      aksi: 'Pembayaran Diterima', 
      pelanggan: 'Budi Santoso', 
      jumlah: 'Rp 150.000', 
      waktu: '2 jam lalu',
      tipe: 'success'
    },
    { 
      aksi: 'Pelanggan Baru', 
      pelanggan: 'Sari Wijaya', 
      jumlah: '-', 
      waktu: '4 jam lalu',
      tipe: 'info'
    },
    { 
      aksi: 'Tagihan Dibuat', 
      pelanggan: 'Tagihan Bulanan', 
      jumlah: '1.247 tagihan', 
      waktu: '1 hari lalu',
      tipe: 'warning'
    },
    { 
      aksi: 'Pemeliharaan', 
      pelanggan: 'Pompa Air', 
      jumlah: 'Selesai', 
      waktu: '2 hari lalu',
      tipe: 'info'
    }
  ];

  return (
    <Layout judulHalaman="Dashboard Pamsimas">
      {/* Statistik Utama */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {statistik.map((stat, index) => {
          const IconComponent = stat.ikon;
          return (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
              <div className="p-6">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 rounded-xl p-4 ${stat.warna}`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-5 flex-1">
                    <p className="text-sm font-medium text-gray-500 truncate">
                      {stat.judul}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.nilai}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {stat.deskripsi}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Aksi Cepat */}
        <div className="bg-white shadow rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Aksi Cepat</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 gap-4">
              <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors text-left flex items-center">
                <Users className="h-5 w-5 mr-3" />
                Tambah Pelanggan Baru
              </button>
              <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors text-left flex items-center">
                <CreditCard className="h-5 w-5 mr-3" />
                Buat Tagihan Bulanan
              </button>
              <button className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors text-left flex items-center">
                <BarChart3 className="h-5 w-5 mr-3" />
                Lihat Laporan Keuangan
              </button>
              <button className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg hover:bg-orange-700 transition-colors text-left flex items-center">
                <AlertCircle className="h-5 w-5 mr-3" />
                Kirim Pemberitahuan
              </button>
            </div>
          </div>
        </div>

        {/* Aktivitas Terbaru */}
        <div className="bg-white shadow rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Aktivitas Terbaru</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {aktivitasTerbaru.map((aktivitas, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      aktivitas.tipe === 'success' ? 'bg-green-500' :
                      aktivitas.tipe === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}></div>
                    <div>
                      <p className="font-medium text-gray-900">{aktivitas.aksi}</p>
                      <p className="text-sm text-gray-500">{aktivitas.pelanggan}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{aktivitas.jumlah}</p>
                    <p className="text-sm text-gray-500">{aktivitas.waktu}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Informasi Sistem */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-center">
          <Droplets className="h-8 w-8 text-blue-600 mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-blue-900">Sistem Pamsimas Siap Digunakan</h3>
            <p className="text-blue-700 mt-1">
              Sistem manajemen air minum perdesaan Anda berjalan dengan baik. 
              Pantau konsumsi air, kelola tagihan, dan lihat laporan keuangan dengan mudah.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
