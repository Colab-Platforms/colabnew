# EmailJS Template Variables Reference

## Variables Being Sent from Code:

```javascript
{
  from_name: "User's Name",
  from_email: "user@example.com",
  phone: "+91 1234567890",
  subject: "Subject Line",
  message: "User's message content",
  timestamp: "Dec 15, 2024, 10:30 AM",
  to_email: "techcolabplatform@gmail.com"
}
```

## How to Use in EmailJS Template:

In your EmailJS template, use these exact variable names with double curly braces:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{phone}}` - Sender's phone number
- `{{subject}}` - Message subject
- `{{message}}` - Full message content
- `{{timestamp}}` - Date and time of submission
- `{{to_email}}` - Recipient email (techcolabplatform@gmail.com)

## Important Notes:

1. **Variable names are case-sensitive** - Use exact names as shown above
2. **Use double curly braces** - `{{variable_name}}`
3. **Test with simple template first** - If complex template fails, try:

```
New message from {{from_name}}

Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

Sent at: {{timestamp}}
```

## Troubleshooting 400 Error:

If you get 400 error, check:

1. ✅ Service ID is correct: `service_gurheoj`
2. ✅ Template ID is correct: `template_jzovk2m`
3. ✅ Public Key is correct: `Zw0oX8ch-4XoOi5TF`
4. ❓ Template variables match exactly (most common issue)
5. ❓ Template is published/active in EmailJS dashboard
6. ❓ Email service is connected and verified

## Quick Test Template:

Try this simple template first to test if EmailJS is working:

**Subject:** New Contact from {{from_name}}

**Body:**
```
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
Sent: {{timestamp}}
```

Once this works, you can switch to the fancy HTML template!
