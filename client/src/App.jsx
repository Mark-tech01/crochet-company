// src/App.jsx
import React from 'react';
import Navbar from './layout/Navbar/Navbar';
import Footer from './layout/Footer/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
      <div className="app-shell">
            <Navbar />
                  <main className="main-content">
                          <AppRoutes />
                                </main>
                                      <Footer />
                                          </div>
                                            );
                                            }

          export default App;
