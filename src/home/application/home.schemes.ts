import {z} from 'zod';

const MINIMUM_POSITION = 0;
export const HOME_SCHEMES = z.object({
  startItem: z
    .number({
      required_error: 'StartItem is required',
      invalid_type_error: 'StartItem must be a number',
    })
    .min(MINIMUM_POSITION, {
      message: `StartItem must be greater than or equal to ${MINIMUM_POSITION}`,
    }),
});
