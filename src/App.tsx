/**
 * Aplikasi Manajemen Pamsimas
 * Sistem pengelolaan air minum perdesaan berbasis komunitas
 */
import { HashRouter, Route, Routes } from 'react-router'
import Dashboard from './pages/Dashboard'
import Pelanggan from './pages/Pelanggan'
import Tagihan from './pages/Tagihan'
import Laporan from './pages/Laporan'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pelanggan" element={<Pelanggan />} />
        <Route path="/tagihan" element={<Tagihan />} />
        <Route path="/laporan" element={<Laporan />} />
      </Routes>
    </HashRouter>
  )
}
