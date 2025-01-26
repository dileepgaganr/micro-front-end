'use-client';
import { useEffect, useRef } from 'react';

const vueApp = import('vueRemote/createVueApp').then((mod) => ({ default: mod.createVueApp, destroy: mod.destroy }));

const Vue = () => {
  const ref = useRef<HTMLDivElement>(null);
  const instance = useRef<any>(null)
  useEffect(() => {
    if (typeof window !== undefined && typeof document !== undefined) {
      const mountVueApp = async () => {
        if (ref.current) {
          try {
            const { default: createVueApp } = await vueApp;
            if (!instance.current) {
              instance.current = createVueApp(ref.current)
            }
          }
          catch (error) {
            console.error('Error loading Vue app:', error);
          }
        }
      };
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        mountVueApp();
      }
      const cleanupVueApp = async () => {
        if (instance.current) {
          const { destroy: destroy } = await vueApp;
          destroy(instance.current);
          instance.current = null;
        }
        if (ref.current) { ref.current.innerHTML = ''; }
      };
      return () => {
        cleanupVueApp();
      }
    }
  }, []);
  return (
    <div ref={ref} id="vueApp"></div>
  );
}

export default Vue;

