import { baseDetailSchema, uuidV4Pattern } from '@events/common';
import { z } from 'zod';

const clientUpdatedPayloadSchema = z.object({
    clientId: z.string().regex(uuidV4Pattern, { message: 'Invalid UUID format' }),
    employeeId: z.string(),
    updatedAt: z.string().datetime().transform((str) => new Date(str)),
    difference: z.object({})
});

export const clientUpdatedDetailSchema = baseDetailSchema.extend({
    payload: clientUpdatedPayloadSchema,
});
