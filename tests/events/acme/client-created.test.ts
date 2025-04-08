import { Acme } from '@events/custom';
import { describe, expect, it } from 'vitest';

describe('Acme - Client Created Event Validation', () => {
  const validClientCreatedEvent = {
    source: 'acme',
    detailType: 'client-created',
    detail: {
      metadata: {
        clientId: '550e8400-e29b-41d4-a716-446655440000',
        employeeId: '550e8400-e29b-41d4-a716-446655440001',
        timestamp: '2025-04-04T18:03:24.464Z',
      },
      payload: {
        clientId: '550e8400-e29b-41d4-a716-446655440000',
        employeeId: '550e8400-e29b-41d4-a716-446655440001',
        createdAt: '2025-04-04T18:03:24.464Z',
      },
    },
  };

  it('should validate a correct client-created event', () => {
    const result = Acme.schema.safeParse(validClientCreatedEvent);
    expect(result.success).toBe(true);
  });

  it('should invalidate a client-created event with missing clientId in metadata', () => {
    const invalidEvent = { ...validClientCreatedEvent };
    // @ts-expect-error Deleting a required field
    delete invalidEvent.detail.metadata.clientId;
    const result = Acme.schema.safeParse(invalidEvent);
    expect(result.success).toBe(false);
  });
});
