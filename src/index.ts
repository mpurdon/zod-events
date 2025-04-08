import { Acme } from '@events/custom';

const createdEventMessage = `{
    "source": "not-acme",
    "detailType": "client-created",
    "detail": {
        "metadata": {
            "clientId": "edbc4247-223d-4929-b325-1a39b8c01f04",
            "employeeId": "c717bead-86d8-4d1a-bd3c-20fcce19527d",
            "timestamp": "2025-04-04T18:03:24.464Z"
        },
        "payload": {
            "clientId": "edbc4247-223d-4929-b325-1a39b8c01f04",
            "employeeId": "67890",
            "createdAt": "2025-04-04"
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
