import { useEffect } from 'react';
import { EventIo } from '../types';
import { socketIo } from '..';

export function useSocketEvents(events: EventIo[], dependencies: any[] = []) {
  useEffect(() => {
    for (const event of events) {
      socketIo?.on(event.name, event.handler);
    }
    return function () {
      for (const event of events) {
        socketIo?.off(event.name);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependencies]);
}
