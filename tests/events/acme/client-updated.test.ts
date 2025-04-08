import { Acme } from '@events/custom';
import { describe, expect, it } from 'vitest';

  describe('Acme - Client Updated Event Validation', () => {
    const validClientUpdatedEvent = {
      source: 'acme',
      detailType: 'client-updated',
      detail: {
        metadata: {
          clientId: '550e8400-e29b-41d4-a716-446655440000',
          employeeId: '550e8400-e29b-41d4-a716-446655440001',
          timestamp: '2025-04-04T18:03:24.464Z',
        },
        payload: {
          clientId: '550e8400-e29b-41d4-a716-446655440000',
          employeeId: '550e8400-e29b-41d4-a716-446655440001',
          updatedAt: '2025-04-04T18:03:24.464Z',
          difference: {
            fieldName: 'newValue',
          },
        },
      },
    };

    it('should validate a correct client-updated event', () => {
      const result = Acme.schema.safeParse(validClientUpdatedEvent);
      expect(result.success).toBe(true);
    });

    it('should invalidate a client-updated event with invalid timestamp format', () => {
      const invalidEvent = {
        ...validClientUpdatedEvent,
        detail: {
          ...validClientUpdatedEvent.detail,
          metadata: {
            ...validClientUpdatedEvent.detail.metadata,
            timestamp: 'invalid-timestamp',
          },
        },
      };
      const result = Acme.schema.safeParse(invalidEvent);
      expect(result.success).toBe(false);
    });

    // Add more tests as needed
  });
  