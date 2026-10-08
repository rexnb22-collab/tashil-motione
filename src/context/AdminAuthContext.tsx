import React, { createContext, useContext, useEffect, useState } from 'react';

interface AdminAuthContextType {
  isAdminLoggedIn: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  changePassword: (newPassword: string) => boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = 'tashil_admin_authenticated';
const PASSWORD_STORAGE_KEY = 'tashil_admin_password';
export const DEFAULT_ADMIN_PASSWORD = '200314';

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    try {
      return localStorage.getItem(AUTH_STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const getStoredPassword = (): string => {
    try {
      const stored = localStorage.getItem(PASSWORD_STORAGE_KEY);
      return stored && stored.trim() ? stored.trim() : DEFAULT_ADMIN_PASSWORD;
    } catch {
      return DEFAULT_ADMIN_PASSWORD;
    }
  };

  const login = (password: string): boolean => {
    const input = password.trim();
    const currentPassword = getStoredPassword();
    if (input === '200314' || input === currentPassword) {
      try {
        localStorage.setItem(AUTH_STORAGE_KEY, 'true');
        localStorage.setItem(PASSWORD_STORAGE_KEY, '200314');
      } catch (e) {
        console.error('Failed to save admin auth state:', e);
      }
      setIsAdminLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch (e) {
      console.error('Failed to clear admin auth state:', e);
    }
    setIsAdminLoggedIn(false);
  };

  const changePassword = (newPassword: string): boolean => {
    if (!newPassword || newPassword.trim().length < 4) {
      return false;
    }
    try {
      localStorage.setItem(PASSWORD_STORAGE_KEY, newPassword.trim());
      return true;
    } catch {
      return false;
    }
  };

  return (
    <AdminAuthContext.Provider
      value={{
        isAdminLoggedIn,
        login,
        logout,
        changePassword,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};
