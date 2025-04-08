import { Acme } from '@events/custom';

const createdEventMessage = `{
    "source": "acme",
    "detailType": "client-created",
    "detail": {
        "metadata": {
            "clientId": "12345",
            "employeeId": "67890",
            "timestamp": "2025-04-04T18:03:24.464Z"
        },
        "payload": {
            "clientId": "12345",
            "employeeId": "67890",
            "createdAt": "2025-04-04T18:03:24.464Z"
        }
    }
}`

const createdEvent: Acme.ClientCreated = JSON.parse(createdEventMessage);
const validationResult = Acme.schema.safeParse(createdEvent);

if (validationResult.success) {
    const validData = validationResult.data;
    console.log('Validated data:', validData);
    console.log('Is it a Acme.ClientCreated event?', typeof(validData));
} else {
    console.error('Validation errors:', validationResult.error.errors);
}
