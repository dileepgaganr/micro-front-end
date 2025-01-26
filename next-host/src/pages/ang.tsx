'use client';
import React, { useEffect, useRef } from "react";

const angularApp = import('angularRemote/bootstrap').then((mod) => (mod));

const Angular = () => {
  let angularInstance: any = null;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadAngularApp = async () => {
      if (ref.current) {
        try {
          const module = await angularApp;
          if (module.default) {
            module.default();
          } else {
            throw new Error("Module does not have a default export");
          }
        } catch (error) {
          console.error('Error loading Angular app:', error);
        }
      }
    };

    loadAngularApp();

    return () => {
      if (angularInstance && typeof angularInstance.destroy === 'function') {
        angularInstance.destroy();
      }
      if (ref.current) {
        ref.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div>
       <app-root></app-root>  
    </div>
  );
};

export default Angular;
