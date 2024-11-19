// THIS AREA NEEDS API TO BE COMPLETED
import React from 'react';

const UserSettings: React.FC = () => {
  return (
      <main className="p-6 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Personal Information Section */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name
                </label>
                <input
                    type="text"
                    id="first-name"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    defaultValue="John"
                />
              </div>

              <div>
                <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <input
                    type="text"
                    id="last-name"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    defaultValue="Doe"
                />
              </div>
            </div>
          </section>

          {/* Account Details Section */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Account Details</h2>
            <div>
              <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                  type="email"
                  id="email"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  defaultValue="john@example.com"
              />
            </div>

            <div className="mt-6 flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Change Email
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
                Change Password
              </button>
            </div>
          </section>

          {/* Display Settings and Other Options */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Display Settings</h2>
            <div>
              <label
                  htmlFor="font-size"
                  className="block text-sm font-medium text-gray-700 mb-1"
              >
                Font Size
              </label>
              <select
                  id="font-size"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  defaultValue="Normal"
              >
                <option value="Small">Small</option>
                <option value="Normal">Normal</option>
                <option value="Large">Large</option>
              </select>
            </div>

            <div className="mt-8">
              <label
                  htmlFor="pronouns"
                  className="block text-sm font-medium text-gray-700 mb-1"
              >
                Pronouns
              </label>
              <input
                  type="text"
                  id="pronouns"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  defaultValue="Sir/Mr"
              />
            </div>
          </section>
        </div>
      </main>
  );
};

export default UserSettings;
