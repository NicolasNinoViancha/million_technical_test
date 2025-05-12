import {z} from 'zod';

export const DETAILS_SCHEMES = z.object({
  cryptoID: z.string({
    required_error: 'cryptoID is required',
    invalid_type_error: 'cryptoID must be a string',
  }),
});
