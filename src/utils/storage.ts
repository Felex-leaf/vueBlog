/* eslint-disable no-unused-vars */
interface IMap<T> {
  [key: string]: T;
}

interface ICache<T> {
  [key: string]: T;
}

const MAX_MEMORTY_VALUE_LENGTH = 300;
let store: Storage | null = window.localStorage;
let prefix = '_felex_blog_';
const cache: ICache<any> = {};

try {
  // IE 8 或移动端的隐身模式 下直接调用 window.localStorage 会报错（其实也不用支持 IE8）
  store.setItem('bs_:)_', '__');
  store.removeItem('bs_:)_');
} catch {
  /* istanbul ignore next */
  store = null;
}

export interface IStorage {
    sync?: (products: string[], fn: <T>(...arg: T[]) => void) => void;
    set: <T>(key: string, val: T, seconds?: number) => void;
    setAll?: <T>(map: IMap<T>) => void;
    get: <T>(key: string, defaultValue?: T) => T | undefined;
    del: (key: string) => void;
    clear: () => void;
    has: (key: string) => boolean;
}

function getStorage(): IStorage {
  if (store) {
    return {
      // 同时更新不同的 Product 下的 storage
      sync(products, fn): void {
        const lastPrefix = prefix;

        products.forEach((product) => {
          prefix = `__ta/${product}_`;
          fn();
        });
        prefix = lastPrefix;
      },
      set(key, val, seconds): void {
        const expiredAt = seconds ? Date.now() + seconds * 1000 : 0;
        const valMod = JSON.stringify([val, expiredAt]);
        if (valMod.length <= MAX_MEMORTY_VALUE_LENGTH) cache[key] = valMod;
        else delete cache[key];
        store?.setItem(prefix + key, valMod);
      },
      setAll(map): void {
        Object.keys(map).forEach((key) => {
          this.set(key, map[key]);
        });
      },
      get<T>(key: string, defaultValue?: T): T | undefined {
        // const rawVal = cache[key] || store.getItem(prefix + key); // 从cache取token会无法更新新的token
        const rawVal = store?.getItem(prefix + key);
        if (!rawVal) return defaultValue;

        try {
          const [val, expiredAt] = JSON.parse(rawVal);
          if (expiredAt && Date.now() > expiredAt) {
            return defaultValue;
          }
          return val;
        } catch (e) {
          return defaultValue;
        }
      },

      del(key): void {
        delete cache[key];
        if (key.indexOf(prefix) > -1) {
          store?.removeItem(key);
        } else {
          store?.removeItem(prefix + key);
        }
      },
      clear(): void {
        Object.keys(cache).forEach((key) => delete cache[key]);
        // 防止同源情况清空其他项目存储的数据
        Object.keys(store || {}).forEach((key) => {
          if (key.indexOf(prefix) > -1) {
            this.del(key);
          }
        });
      },
      has(key: string): boolean {
        return key in cache || !!store?.getItem(prefix + key);
      },
    };
  }
  return {
    set<T>(key: string, val: T): void {
      cache[key] = val;
    },
    get<T>(key: string): T {
      return cache[key];
    },
    del(key: string): void {
      delete cache[key];
    },
    clear(): void {
      Object.keys(cache).forEach((key) => delete cache[key]);
    },
    has(key: string): boolean {
      return key in cache;
    },
  };
}
const storage = getStorage();
export default storage;
