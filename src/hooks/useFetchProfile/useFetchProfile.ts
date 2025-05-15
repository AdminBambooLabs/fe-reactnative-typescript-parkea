import { useEffect, useState } from 'react';
import {
  deleteProfileService,
  getProfile,
  patchProfile,
  PatchProfileParams,
  postProfile,
} from '@/api/services/profile';
import { IProfile, PROFILE_STORAGE_KEY } from '@/types/profile';
import { useCustomAsyncStorage } from '../useCustomAsyncStorage';

function useFetchProfile() {
  const [profile, setProfile] = useState<IProfile | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { setValue, remove, value } = useCustomAsyncStorage(PROFILE_STORAGE_KEY);

  async function fetchProfile(profileId?: string) {
    const id = profileId || value;

    try {
      setIsLoading(true);
      const { data, status } = await getProfile({ profileId: id });
      if (status === 200) {
        setProfile(data);
      }
    } catch {
      setProfile(null);
    } finally {
      setIsLoading(false);
    }
  }

  async function createProfile(profileData: Partial<IProfile>) {
    try {
      setIsLoading(true);

      const payload: Partial<IProfile> = { ...profileData };
      const createdProfile = await postProfile(payload);

      if (createdProfile.status === 201) {
        remove();
        setProfile(createdProfile.data);
        setValue(createdProfile.data.id);
        return createdProfile.data;
      }
    } catch (err) {
      return null;
    } finally {
      setIsLoading(false);
    }
  }

  async function updateProfile({ profileData, profileId }: Partial<PatchProfileParams>) {
    if (!profileData) {
      return;
    }

    try {
      const id = profileId || value;
      console.log('[id]', id);
      setIsLoading(true);
      const updatedProfile = await patchProfile({ profileData, profileId: id });
      console.log('[updatedProfile]', updatedProfile);

      if (updatedProfile.status === 200) {
        return updatedProfile.data;
      }
    } catch (err) {
      console.log('[err]', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteProfile(profileId: string) {
    try {
      const id = profileId || value;
      setIsLoading(true);
      const deletedProfile = await deleteProfileService(id);

      if (deletedProfile.status === 200) {
        return deletedProfile.data;
      }

      return null;
    } catch {
      return null;
    } finally {
      setIsLoading(false);
    }
  }

  // useEffect(() => {
  //   if (!profile) {
  //     fetchProfile();
  //   }
  // }, [value]);

  return {
    fetchProfile,
    createProfile,
    updateProfile,
    deleteProfile,
    profile,
    setProfile,
    isLoading,
  };
}

export default useFetchProfile;
