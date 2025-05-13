import { IProfile } from '@/types/profile';

export type GetProfileParams = {
  profileId?: string;
};

export type PatchProfileParams = {
  profileId: string;
  profileData: Partial<IProfile>;
};
