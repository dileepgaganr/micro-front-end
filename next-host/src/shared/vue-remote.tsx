'use-client';
import React, { Suspense, useEffect, useRef } from 'react';
const vueApp = import('vueRemote/createVueApp').then((mod) => ({ default: mod.createVueApp }));

const VueRemote = () => {
  let vueInstance: { destroy: any };
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== undefined && typeof document !== undefined) {
      console.log('window is present', window)
      if (ref?.current) {
        console.log('ref is present', ref?.current)
        vueApp.then((mod: any) => {
          console.log('module vue', mod);
          if (mod) {
            vueInstance = mod.default(ref.current?.id);
          }else{
            console.log('unable to find module')
          }
        }).catch((error)=>{
          console.log("Error loading app", error)
        })
      }
      return () => {
        if (vueInstance && typeof vueInstance.destroy === 'function') {
          vueInstance.destroy();
        }
        if (ref?.current) {
          ref.current.innerHTML = '';
        }
      }
    }
  }, []);

  return (
    <Suspense>
      <div id="app" ref={ref}></div>
    </Suspense>
  );
}

export default VueRemote;