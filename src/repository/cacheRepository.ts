import { CacheMapProps } from '../types/cache';

export class CacheRepository {
  #CACHE_KEY = 'RESULT_CACHE';

  save(data: CacheMapProps) {
    localStorage.setItem(this.#CACHE_KEY, JSON.stringify(data));
  }

  get() {
    return localStorage.getItem(this.#CACHE_KEY);
  }

  remove() {
    localStorage.removeItem(this.#CACHE_KEY);
  }
}
