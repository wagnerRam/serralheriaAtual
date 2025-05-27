// src/components/layout.tsx
import { ReactNode } from 'react';
import { FaFileAlt, FaUser, FaCog } from 'react-icons/fa';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Menu lateral */}
      <aside className="w-64 bg-zinc-900 text-white p-6">
        <div className="text-2xl font-bold mb-8">
          <img src="/logo.png" alt="Serralheria Atual" className="mb-4" />
        </div>
        <nav className="space-y-6 text-lg">
          <div className="flex items-center gap-2 cursor-pointer">
            <FaFileAlt /> Orçamentos
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FaUser /> Clientes
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FaCog /> Configurações
          </div>
        </nav>
      </aside>

      {/* Conteúdo da página */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
