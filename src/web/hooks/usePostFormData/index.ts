import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { post, logger } from '@/utils';

async function queryFn(formData: unknown) {
  try {
    const { ok, data, error } = await post<{}, unknown>(
      `http://localhost:3000/forms/submit`,
      formData,
      {}
    );
    if (error) {
      throw error;
    }
    if (!ok) {
      throw new Error('IndiscernibleError: Check Log Output.');
    }
    return data;
  } catch (e) {
    logger.error(e);
  }
}

export const usePostFormData = function () {
  const mutOptions: UseMutationOptions<unknown, unknown, Map<string, unknown>, unknown> = {
    mutationFn: (formData) => queryFn(formData),
    mutationKey: ['forms', 'post'],
  };
  return useMutation(mutOptions);
};
