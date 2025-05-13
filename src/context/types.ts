import { ReactNode } from 'react';
import { IProfile } from '@/types/profile';

export interface IAppContext {
  showTabBar: boolean;
  setShowTabBar: (value: boolean) => void;
  profile: IProfile | null;
  setProfile: (value: IProfile | null) => void;
}

export interface AppProviderProps {
  children: ReactNode;
}
