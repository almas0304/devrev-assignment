const axios = require('axios');


const API_URL = 'https://api.devrev.ai/dev-users.get?id=self';
const API_TOKEN = 'eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtaW4tMTpkZXZvLzJZenRZb2hUc3M6ZGV2dS8xIiwiZXhwIjoxNzQ3NTQ5MzIwLCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VpZCI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by9zdXBlcjphdXRoMF91c2VyL2xpbmtlZGlufERMdmhhdGF5UUUiLCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VzZXJfaWQiOiJsaW5rZWRpbnxETHZoYXRheVFFIiwiaHR0cDovL2RldnJldi5haS9kZXZvX2RvbiI6ImRvbjppZGVudGl0eTpkdnJ2LWluLTE6ZGV2by8yWXp0WW9oVHNzIiwiaHR0cDovL2RldnJldi5haS9kZXZvaWQiOiJERVYtMll6dFlvaFRzcyIsImh0dHA6Ly9kZXZyZXYuYWkvZGV2dWlkIjoiREVWVS0xIiwiaHR0cDovL2RldnJldi5haS9kaXNwbGF5bmFtZSI6ImFsbWFzc2hhaWtoODQxIiwiaHR0cDovL2RldnJldi5haS9lbWFpbCI6ImFsbWFzc2hhaWtoODQxQGdtYWlsLmNvbSIsImh0dHA6Ly9kZXZyZXYuYWkvZnVsbG5hbWUiOiJBbG1hcyBTaGFpa2giLCJodHRwOi8vZGV2cmV2LmFpL2lzX3ZlcmlmaWVkIjp0cnVlLCJodHRwOi8vZGV2cmV2LmFpL3Rva2VudHlwZSI6InVybjpkZXZyZXY6cGFyYW1zOm9hdXRoOnRva2VuLXR5cGU6cGF0IiwiaWF0IjoxNzE2MDEzMzIwLCJpc3MiOiJodHRwczovL2F1dGgtdG9rZW4uZGV2cmV2LmFpLyIsImp0aSI6ImRvbjppZGVudGl0eTpkdnJ2LWluLTE6ZGV2by8yWXp0WW9oVHNzOnRva2VuL2lHZk1XbEk1Iiwib3JnX2lkIjoib3JnX3lKYWRzRzFzdEFDOHhJRzQiLCJzdWIiOiJkb246aWRlbnRpdHk6ZHZydi1pbi0xOmRldm8vMll6dFlvaFRzczpkZXZ1LzEifQ.p4ytAusOF_qaD6hIu_OgcE0YRNl2wGuMy_GKimfwaFWh-J5XLbg14ruy9JIKTCGSGX_K-OLHBQhkV4PBUSAaGIYIzPcT0eFVsoW0XUtaTi1Xm8TbNK5EjjMlO6RnlJVj0Ry38KE6dbh6_6CcJnXDlYDM5sV2ZKqRcZ1TxSKdDdt9ptW7rg1SDCPaBjyzRRbb6bQL5tYeTv4pzpnsppa0HP6T4u_OuV2O5W93ZIxLfp_kWaKIaLNEo9v_UTFAr8hsFCgSf9oLFovba9qkqfZMnT5drxxpQiT974g90MnSNWQ6Zta6HRnbcdjVYy89H67lY5gCbJ1n76iMQbB30RF3AA';

async function createWorkItem() {
    try {
        const response = await axios.post(API_URL, {
            
        }, {
            headers: {
                'Authorization': `Bearer ${API_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Work item created successfully:', response.data);
    } catch (error) {
        console.error('Failed to create work item:', error.response.status, error.response.data);
    }
}

createWorkItem();