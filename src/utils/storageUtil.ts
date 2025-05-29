'use client';

import { getWindow } from './domUtil';

class StorageUtil {
  storage?: Storage;
  constructor(storage: Storage | undefined) {
    this.storage = storage;
  }

  get(key: string): string | undefined {
    return this.storage?.getItem(key) || undefined;
  }

  getArray<T>(key: string): T[] {
    return JSON.parse(this.get(key) || '[]');
  }

  getObject<T extends Record<string | number, any>>(key: string): T {
    const value = this.get(key);
    return value && value !== 'undefined' && JSON.parse(value);
  }

  set(key: string, value: string): void {
    this.storage?.setItem(key, value);
  }

  setObject<T extends Record<string | number, any>>(key: string, value: T): void {
    this.set(key, JSON.stringify(value));
  }

  remove(key: string): void {
    this.storage?.removeItem(key);
  }

  clear(): void {
    this.storage?.clear();
  }
}

export const localStorageUtil = new StorageUtil(getWindow()?.localStorage);
