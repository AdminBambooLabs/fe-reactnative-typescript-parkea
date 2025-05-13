import { api } from '@/api/api';
import { IProfile } from '@/types/profile';
import { GetProfileParams, PatchProfileParams } from './types';

const PROFILE = 'parking-lot';

export function getProfile({ profileId }: GetProfileParams) {
  const response = api.get<IProfile>(`/${PROFILE}/${profileId}`);
  return response;
}

export function postProfile(profile: Partial<IProfile> = {}) {
  const payload = { ...profile, streetNumber: Number(profile.streetNumber) };

  const response = api.post<IProfile>(`/${PROFILE}`, payload);

  return response;
}

export function patchProfile({ profileData: profile, profileId }: PatchProfileParams) {
  const response = api.patch<IProfile>(`/${PROFILE}/${profileId}`, profile);
  return response;
}

export function deleteProfileService(profileId: string) {
  const response = api.delete<IProfile>(`/${PROFILE}/${profileId}`);
  return response;
}
