import { baseDetailSchema, uuidV4Pattern } from '@events/common';
import { z } from 'zod';

const clientCreatedPayloadSchema = z.object({
    clientId: z.string().regex(uuidV4Pattern, { message: 'Invalid UUID format' }),
    employeeId: z.string().regex(uuidV4Pattern, { message: 'Invalid UUID format' }),
    createdAt: z.string().datetime().transform((str) => new Date(str)),
});

export const clientCreatedDetailSchema = baseDetailSchema.extend({
    payload: clientCreatedPayloadSchema,
});

export type ClientCreatedDetail = z.infer<typeof clientCreatedDetailSchema>;
