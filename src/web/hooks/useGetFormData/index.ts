import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { get, logger } from '@/utils';
import { PageConfiguration } from '@/types/page.config';

type FormResponse = { form: PageConfiguration[] };

async function queryFn(formKey: string) {
  try {
    const { ok, data, error } = await get<FormResponse>(
      `http://localhost:3000/forms/inventory/${formKey}`,
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

export const useGetFormData = function (formKey: string) {
  const queryOptions: UseQueryOptions<FormResponse | undefined> = {
    queryFn: () => queryFn(formKey),
    queryKey: ['forms', formKey],
  };
  return useQuery(queryOptions);
};
