/**
 * Pamsimas Management System - Home Page
 * Main dashboard for community water supply management
 */
import React from 'react';
import { Users, Droplets, CreditCard, BarChart3 } from 'lucide-react';

export default function Home() {
  // Mock data for dashboard
  const stats = [
    { 
      title: 'Total Customers', 
      value: '1,247', 
      icon: Users, 
      color: 'bg-blue-500' 
    },
    { 
      title: 'Water Usage', 
      value: '45,230 L', 
      icon: Droplets, 
      color: 'bg-cyan-500' 
    },
    { 
      title: 'Pending Payments', 
      value: 'Rp 12.5M', 
      icon: CreditCard, 
      color: 'bg-orange-500' 
    },
    { 
      title: 'Monthly Revenue', 
      value: 'Rp 28.7M', 
      icon: BarChart3, 
      color: 'bg-green-500' 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Droplets className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">
                Pamsimas Manager
              </h1>
            </div>
            <nav className="flex space-x-8">
              <a href="#" className="text-blue-600 font-medium">Dashboard</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">Customers</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">Billing</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">Reports</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome to Pamsimas Management
            </h2>
            <p className="text-gray-600">
              Manage your community water supply system efficiently with real-time monitoring and automated billing.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-0">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 rounded-md p-3 ${stat.color}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {stat.title}
                        </dt>
                        <dd className="text-lg font-semibold text-gray-900">
                          {stat.value}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 px-4 sm:px-0">
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <button className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Add New Customer
                </button>
                <button className="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Generate Bills
                </button>
                <button className="bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  View Reports
                </button>
                <button className="bg-orange-600 text-white px-4 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                  Send Notifications
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 px-4 sm:px-0">
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { action: 'Payment Received', customer: 'Budi Santoso', amount: 'Rp 150,000', time: '2 hours ago' },
                  { action: 'New Customer', customer: 'Sari Wijaya', amount: '-', time: '4 hours ago' },
                  { action: 'Bill Generated', customer: 'Monthly Billing', amount: '1,247 bills', time: '1 day ago' },
                  { action: 'Maintenance', customer: 'Water Pump', amount: 'Completed', time: '2 days ago' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <div>
                      <p className="font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{activity.amount}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
