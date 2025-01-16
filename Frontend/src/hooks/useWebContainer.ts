import { useState, useEffect } from 'react';
import { WebContainer } from '@webcontainer/api';

export function useWebContainer() {
  const [webContainer, setWebContainer] = useState<WebContainer | undefined>(undefined);

  useEffect(() => {
    async function initWebContainer() {
      const container = await WebContainer.boot();
      setWebContainer(container);
    }

    initWebContainer();
  }, []);

  return webContainer;
}
