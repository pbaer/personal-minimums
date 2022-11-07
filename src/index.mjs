import { SecretClient } from '@azure/keyvault-secrets';
import { DefaultAzureCredential } from '@azure/identity';

export const test = async () => {
    const credential = new DefaultAzureCredential();
    const client = new SecretClient('https://pbaer.vault.azure.net', credential);
    const secret = await client.getSecret('metar-taf-api');
    return `secret is ${secret ? secret.length : 'no-secret'} chars long, value is ${(secret && secret.value) ? secret.value.length : 'no-value'} chars long`;
};
