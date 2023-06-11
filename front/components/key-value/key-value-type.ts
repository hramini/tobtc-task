import { ReactNode } from 'react';

export interface IKeyValueProps {
  key?: string | number;
  keyText: string;
  value: ReactNode;
}
