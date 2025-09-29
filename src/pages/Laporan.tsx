/**
 * Halaman Laporan - Analisis dan laporan keuangan Pamsimas
 */
import React from 'react';
import { Download, TrendingUp, Users, CreditCard, Droplets } from 'lucide-react';
import Layout from '../components/Layout';

export default function Laporan() {
  // Data contoh untuk laporan
  const dataKeuangan = [
    { bulan: 'Jan 2024', pendapatan: 28750000, pelanggan: 1247, pemakaian: 45230 },
    { bulan: 'Des 2023', pendapatan: 26500000, pelanggan: 1235, pemakaian: 43890 },
    { bulan: 'Nov 2023', pendapatan: 25430000, pelanggan: 1220, pemakaian: 42560 },
    { bulan: 'Okt 2023', pendapatan: 24280000, pelanggan: 1208, pemakaian: 41230 },
  ];

  const laporanTersedia = [
    { nama: 'Laporan Keuangan Bulanan', periode: 'Januari 2024', format: 'PDF', ukuran: '2.4 MB' },
    { nama: 'Laporan Pelanggan', periode: 'Januari 2024', format: 'Excel', ukuran: '1.8 MB' },
    { nama: 'Laporan Pemakaian Air', periode: 'Januari 2024', format: 'PDF', ukuran: '3.1 MB' },
    { nama: 'Laporan Tahunan 2023', periode: 'Tahun 2023', format: 'PDF', ukuran: '15.2 MB' },
  ];

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(angka);
  };

  const formatAngka = (angka: number) => {
    return new Intl.NumberFormat('id-ID').format(angka);
  };

  return (
    <Layout judulHalaman="Laporan dan Analisis">
      {/* Ringkasan Keuangan */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Statistik Utama */}
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Ringkasan Keuangan</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-green-500 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">Pendapatan Bulan Ini</div>
                  <div className="text-sm text-gray-500">Januari 2024</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-green-600">
                  {formatRupiah(28750000)}
                </div>
                <div className="text-sm text-green-500">+8.5% dari bulan lalu</div>
              </div>
            </div>

            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-500 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">Total Pelanggan</div>
                  <div className="text-sm text-gray-500">Aktif</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-blue-600">1.247</div>
                <div className="text-sm text-blue-500">+12 dari bulan lalu</div>
              </div>
            </div>

            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <div className="flex items-center">
                <Droplets className="h-5 w-5 text-cyan-500 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">Pemakaian Air</div>
                  <div className="text-sm text-gray-500">Bulan ini</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-cyan-600">45.230 L</div>
                <div className="text-sm text-cyan-500">+3.1% dari bulan lalu</div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 text-orange-500 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">Tagihan Tertunda</div>
                  <div className="text-sm text-gray-500">Belum dibayar</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-orange-600">
                  {formatRupiah(12500000)}
                </div>
                <div className="text-sm text-orange-500">34 tagihan</div>
              </div>
            </div>
          </div>
        </div>

        {/* Riwayat Keuangan */}
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Riwayat Keuangan 4 Bulan Terakhir</h3>
          <div className="space-y-4">
            {dataKeuangan.map((data, index) => (
              <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-200 last:border-b-0 last:pb-0">
                <div>
                  <div className="font-medium text-gray-900">{data.bulan}</div>
                  <div className="text-sm text-gray-500">
                    {formatAngka(data.pelanggan)} pelanggan • {formatAngka(data.pemakaian)} L
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">
                    {formatRupiah(data.pendapatan)}
                  </div>
                  <div className={`text-sm ${index > 0 && data.pendapatan > dataKeuangan[index - 1].pendapatan ? 'text-green-500' : 'text-red-500'}`}>
                    {index > 0 && (
                      <>
                        {data.pendapatan > dataKeuangan[index - 1].pendapatan ? '+' : ''}
                        {((data.pendapatan - dataKeuangan[index - 1].pendapatan) / dataKeuangan[index - 1].pendapatan * 100).toFixed(1)}%
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Laporan Tersedia */}
      <div className="bg-white rounded-lg shadow border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">Laporan Tersedia</h3>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Generate Laporan Baru
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {laporanTersedia.map((laporan, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">{laporan.nama}</h4>
                    <p className="text-sm text-gray-500">{laporan.periode}</p>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded ${
                    laporan.format === 'PDF' 
                      ? 'bg-red-100 text-red-800 border border-red-200'
                      : 'bg-green-100 text-green-800 border border-green-200'
                  }`}>
                    {laporan.format}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{laporan.ukuran}</span>
                  <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
                    <Download className="h-4 w-4 mr-1" />
                    Unduh
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Informasi Export */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start">
          <Download className="h-6 w-6 text-blue-600 mr-4 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-blue-900">Ekspor Data</h3>
            <p className="text-blue-700 mt-2">
              Semua laporan dapat diunduh dalam format PDF atau Excel. 
              Untuk data mentah atau laporan khusus, hubungi administrator sistem.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PDF</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Excel</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">CSV</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
