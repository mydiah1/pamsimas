/**
 * Halaman Manajemen Pelanggan - Kelola data pelanggan Pamsimas
 */
import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, Phone, MapPin } from 'lucide-react';
import Layout from '../components/Layout';

interface Pelanggan {
  id: number;
  nama: string;
  alamat: string;
  telepon: string;
  tanggalBergabung: string;
  status: 'aktif' | 'nonaktif';
  meteranAwal: number;
  meteranAkhir: number;
}

export default function Pelanggan() {
  const [pencarian, setPencarian] = useState('');
  
  // Data contoh pelanggan
  const daftarPelanggan: Pelanggan[] = [
    {
      id: 1,
      nama: 'Budi Santoso',
      alamat: 'Jl. Merdeka No. 123, RT 01/RW 02',
      telepon: '081234567890',
      tanggalBergabung: '2024-01-15',
      status: 'aktif',
      meteranAwal: 0,
      meteranAkhir: 2450
    },
    {
      id: 2,
      nama: 'Sari Wijaya',
      alamat: 'Jl. Sudirman No. 45, RT 02/RW 02',
      telepon: '081298765432',
      tanggalBergabung: '2024-02-20',
      status: 'aktif',
      meteranAwal: 0,
      meteranAkhir: 1870
    },
    {
      id: 3,
      nama: 'Ahmad Hidayat',
      alamat: 'Jl. Gatot Subroto No. 67, RT 03/RW 02',
      telepon: '081112223344',
      tanggalBergabung: '2023-12-10',
      status: 'nonaktif',
      meteranAwal: 0,
      meteranAkhir: 0
    },
    {
      id: 4,
      nama: 'Dewi Lestari',
      alamat: 'Jl. Pahlawan No. 89, RT 01/RW 03',
      telepon: '081556677889',
      tanggalBergabung: '2024-03-05',
      status: 'aktif',
      meteranAwal: 0,
      meteranAkhir: 3120
    }
  ];

  const pelangganTersaring = daftarPelanggan.filter(pelanggan =>
    pelanggan.nama.toLowerCase().includes(pencarian.toLowerCase()) ||
    pelanggan.alamat.toLowerCase().includes(pencarian.toLowerCase())
  );

  return (
    <Layout judulHalaman="Manajemen Pelanggan">
      {/* Pencarian dan Filter */}
      <div className="mb-6">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Cari pelanggan berdasarkan nama atau alamat..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={pencarian}
                onChange={(e) => setPencarian(e.target.value)}
              />
            </div>
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">Semua Status</option>
              <option value="aktif">Aktif</option>
              <option value="nonaktif">Nonaktif</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              Tambah Pelanggan
            </button>
          </div>
        </div>
      </div>

      {/* Tabel Pelanggan */}
      <div className="bg-white shadow rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Daftar Pelanggan ({pelangganTersaring.length})
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Informasi Pelanggan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kontak
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal Bergabung
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Meteran
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pelangganTersaring.map((pelanggan) => (
                <tr key={pelanggan.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {pelanggan.nama}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {pelanggan.alamat}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      <Phone className="h-3 w-3 mr-1" />
                      {pelanggan.telepon}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(pelanggan.tanggalBergabung).toLocaleDateString('id-ID')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {pelanggan.meteranAkhir.toLocaleString('id-ID')} L
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                      pelanggan.status === 'aktif' 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : 'bg-red-100 text-red-800 border border-red-200'
                    }`}>
                      {pelanggan.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-3">
                      <button className="text-blue-600 hover:text-blue-900 flex items-center">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-900 flex items-center">
                        <Trash2 className="h-4 w-4 mr-1" />
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* State Kosong */}
        {pelangganTersaring.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <p className="text-gray-500 text-lg">Tidak ada pelanggan yang ditemukan</p>
            <p className="text-gray-400 mt-2">Coba ubah kata kunci pencarian atau filter</p>
          </div>
        )}
      </div>

      {/* Statistik Singkat */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-900">{daftarPelanggan.length}</div>
          <div className="text-blue-700">Total Pelanggan</div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-900">
            {daftarPelanggan.filter(p => p.status === 'aktif').length}
          </div>
          <div className="text-green-700">Pelanggan Aktif</div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-orange-900">
            {daftarPelanggan.filter(p => p.status === 'nonaktif').length}
          </div>
          <div className="text-orange-700">Pelanggan Nonaktif</div>
        </div>
      </div>
    </Layout>
  );
}
