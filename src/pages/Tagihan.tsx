/**
 * Halaman Manajemen Tagihan - Kelola tagihan dan pembayaran air
 */
import React, { useState } from 'react';
import { Search, Plus, FileText, CheckCircle, XCircle, Clock } from 'lucide-react';
import Layout from '../components/Layout';

interface Tagihan {
  id: number;
  nomorTagihan: string;
  namaPelanggan: string;
  periode: string;
  totalTagihan: number;
  status: 'lunas' | 'belum_bayar' | 'terlambat';
  tanggalJatuhTempo: string;
  tanggalBayar?: string;
}

export default function Tagihan() {
  const [pencarian, setPencarian] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  // Data contoh tagihan
  const daftarTagihan: Tagihan[] = [
    {
      id: 1,
      nomorTagihan: 'INV-2024-001',
      namaPelanggan: 'Budi Santoso',
      periode: 'Januari 2024',
      totalTagihan: 150000,
      status: 'lunas',
      tanggalJatuhTempo: '2024-01-31',
      tanggalBayar: '2024-01-28'
    },
    {
      id: 2,
      nomorTagihan: 'INV-2024-002',
      namaPelanggan: 'Sari Wijaya',
      periode: 'Januari 2024',
      totalTagihan: 120000,
      status: 'belum_bayar',
      tanggalJatuhTempo: '2024-01-31'
    },
    {
      id: 3,
      nomorTagihan: 'INV-2024-003',
      namaPelanggan: 'Dewi Lestari',
      periode: 'Januari 2024',
      totalTagihan: 180000,
      status: 'terlambat',
      tanggalJatuhTempo: '2024-01-31'
    },
    {
      id: 4,
      nomorTagihan: 'INV-2023-012',
      namaPelanggan: 'Ahmad Hidayat',
      periode: 'Desember 2023',
      totalTagihan: 95000,
      status: 'terlambat',
      tanggalJatuhTempo: '2023-12-31'
    }
  ];

  const tagihanTersaring = daftarTagihan.filter(tagihan => {
    const cocokPencarian = tagihan.namaPelanggan.toLowerCase().includes(pencarian.toLowerCase()) ||
                          tagihan.nomorTagihan.toLowerCase().includes(pencarian.toLowerCase());
    const cocokStatus = !filterStatus || tagihan.status === filterStatus;
    return cocokPencarian && cocokStatus;
  });

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(angka);
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'lunas':
        return 'bg-green-100 text-green-800 border border-green-200';
      case 'belum_bayar':
        return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
      case 'terlambat':
        return 'bg-red-100 text-red-800 border border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'lunas':
        return <CheckCircle className="h-4 w-4 mr-1" />;
      case 'belum_bayar':
        return <Clock className="h-4 w-4 mr-1" />;
      case 'terlambat':
        return <XCircle className="h-4 w-4 mr-1" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'lunas':
        return 'Lunas';
      case 'belum_bayar':
        return 'Belum Bayar';
      case 'terlambat':
        return 'Terlambat';
      default:
        return status;
    }
  };

  return (
    <Layout judulHalaman="Manajemen Tagihan">
      {/* Statistik Cepat */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-gray-900">{daftarTagihan.length}</div>
          <div className="text-gray-600 text-sm">Total Tagihan</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-green-600">
            {daftarTagihan.filter(t => t.status === 'lunas').length}
          </div>
          <div className="text-gray-600 text-sm">Lunas</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-yellow-600">
            {daftarTagihan.filter(t => t.status === 'belum_bayar').length}
          </div>
          <div className="text-gray-600 text-sm">Belum Bayar</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-red-600">
            {daftarTagihan.filter(t => t.status === 'terlambat').length}
          </div>
          <div className="text-gray-600 text-sm">Terlambat</div>
        </div>
      </div>

      {/* Pencarian dan Filter */}
      <div className="mb-6">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Cari tagihan berdasarkan nomor atau nama pelanggan..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={pencarian}
                onChange={(e) => setPencarian(e.target.value)}
              />
            </div>
            <select 
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="">Semua Status</option>
              <option value="lunas">Lunas</option>
              <option value="belum_bayar">Belum Bayar</option>
              <option value="terlambat">Terlambat</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              Buat Tagihan
            </button>
          </div>
        </div>
      </div>

      {/* Tabel Tagihan */}
      <div className="bg-white shadow rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Daftar Tagihan ({tagihanTersaring.length})
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nomor Tagihan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pelanggan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Periode
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Tagihan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Jatuh Tempo
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
              {tagihanTersaring.map((tagihan) => (
                <tr key={tagihan.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">
                      {tagihan.nomorTagihan}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{tagihan.namaPelanggan}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tagihan.periode}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">
                      {formatRupiah(tagihan.totalTagihan)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(tagihan.tanggalJatuhTempo).toLocaleDateString('id-ID')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${getStatusStyle(tagihan.status)}`}>
                      {getStatusIcon(tagihan.status)}
                      {getStatusText(tagihan.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-3">
                      <button className="text-blue-600 hover:text-blue-900 flex items-center">
                        <FileText className="h-4 w-4 mr-1" />
                        Detail
                      </button>
                      {tagihan.status !== 'lunas' && (
                        <button className="text-green-600 hover:text-green-900 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Bayar
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* State Kosong */}
        {tagihanTersaring.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <p className="text-gray-500 text-lg">Tidak ada tagihan yang ditemukan</p>
            <p className="text-gray-400 mt-2">Coba ubah kata kunci pencarian atau filter status</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
