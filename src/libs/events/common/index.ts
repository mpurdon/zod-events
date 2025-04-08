import { z } from 'zod';

// UUID v4 regex pattern
export const uuidV4Pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export const metadataSchema = z.object({
    clientId: z.string().regex(uuidV4Pattern, { message: 'Invalid UUID v4 format' }),
    employeeId: z.string().regex(uuidV4Pattern, { message: 'Invalid UUID v4 format' }).optional(),
    timestamp: z.string().datetime({ message: 'Invalid ISO 8601 datetime format' }).transform((str) => new Date(str)),
});

export const baseDetailSchema = z.object({
    metadata: metadataSchema,
    payload: z.unknown(), // Placeholder for specific payloads
});

export type Metadata = z.infer<typeof metadataSchema>;
