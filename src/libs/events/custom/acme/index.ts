import { z } from 'zod';
import { clientCreatedDetailSchema } from './client-created';
import { clientUpdatedDetailSchema } from './client-updated';

export const schema = z.discriminatedUnion('detailType', [
    // Client Created Schema
    z.object({
        source: z.literal('acme'),
        detailType: z.literal('client-created'),
        detail: clientCreatedDetailSchema,
    }),
    // Client Updated Schema
    z.object({
        source: z.literal('acme'),
        detailType: z.literal('client-updated'),
        detail: clientUpdatedDetailSchema,
    }),
]);

export type ClientCreated = z.infer<typeof schema>;
export type ClientUpdated = z.infer<typeof schema>;
