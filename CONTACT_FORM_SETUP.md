# Contact Form Setup Guide - EmailJS + Google Sheets

This guide will help you set up the contact form to send emails via EmailJS and save data to Google Sheets.

---

## Part 1: EmailJS Setup

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** (recommended)
4. Click **Connect Account** and authorize with `techcolabplatform@gmail.com`
5. Give it a Service Name (e.g., "Colab Contact Form")
6. Copy the **Service ID** (you'll need this)

### Step 3: Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. **Subject Line**: `🔔 New Contact Form Submission - {{subject}}`
4. **Email Body** - Switch to HTML mode and paste this beautiful template:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        
        <!-- Main Container -->
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
          
          <!-- Header with Gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                New Contact Form Submission
              </h1>
              <p style="margin: 10px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">
                Colab Platform - Contact Form
              </p>
            </td>
          </tr>
          
          <!-- Alert Banner -->
          <tr>
            <td style="background-color: #f0f9ff; padding: 20px 30px; border-left: 4px solid #3b82f6;">
              <p style="margin: 0; color: #1e40af; font-size: 14px; font-weight: 600;">
                📬 A new message has been received. Please respond at your earliest convenience.
              </p>
            </td>
          </tr>
          
          <!-- Sender Info Card -->
          <tr>
            <td style="padding: 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0;">
                <tr>
                  <td style="vertical-align: top; width: 60px;">
                    <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
                      👤
                    </div>
                  </td>
                  <td style="vertical-align: top; padding-left: 15px;">
                    <h2 style="margin: 0 0 5px 0; color: #1e293b; font-size: 20px; font-weight: 700;">
                      {{from_name}}
                    </h2>
                    <p style="margin: 0; color: #64748b; font-size: 13px;">
                      Submitted on {{timestamp}}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Contact Details -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                
                <!-- Email -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="width: 30px; vertical-align: top;">
                          <span style="font-size: 18px;">📧</span>
                        </td>
                        <td>
                          <p style="margin: 0; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                          <p style="margin: 5px 0 0 0; color: #1e293b; font-size: 15px; font-weight: 500;">
                            <a href="mailto:{{from_email}}" style="color: #a855f7; text-decoration: none;">{{from_email}}</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Phone -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="width: 30px; vertical-align: top;">
                          <span style="font-size: 18px;">📱</span>
                        </td>
                        <td>
                          <p style="margin: 0; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</p>
                          <p style="margin: 5px 0 0 0; color: #1e293b; font-size: 15px; font-weight: 500;">
                            <a href="tel:{{phone}}" style="color: #a855f7; text-decoration: none;">{{phone}}</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Subject -->
                <tr>
                  <td style="padding: 12px 0;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="width: 30px; vertical-align: top;">
                          <span style="font-size: 18px;">📋</span>
                        </td>
                        <td>
                          <p style="margin: 0; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Subject</p>
                          <p style="margin: 5px 0 0 0; color: #1e293b; font-size: 15px; font-weight: 500;">{{subject}}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
              </table>
            </td>
          </tr>
          
          <!-- Message Content -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background-color: #fafafa; border-radius: 12px; padding: 25px; border-left: 4px solid #a855f7;">
                <p style="margin: 0 0 10px 0; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                  💬 Message
                </p>
                <p style="margin: 0; color: #1e293b; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">{{message}}</p>
              </div>
            </td>
          </tr>
          
          <!-- Action Button -->
          <tr>
            <td style="padding: 0 30px 40px 30px; text-align: center;">
              <a href="mailto:{{from_email}}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); color: #ffffff; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 12px rgba(168, 85, 247, 0.3);">
                Reply to {{from_name}}
              </a>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0 0 10px 0; color: #64748b; font-size: 13px;">
                This message was sent via <strong style="color: #a855f7;">Colab Platform</strong> Contact Form
              </p>
              <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                © 2024 Colab Platform. All rights reserved.
              </p>
              <div style="margin-top: 15px;">
                <a href="https://colabplatform.com" style="color: #a855f7; text-decoration: none; font-size: 12px; margin: 0 8px;">Website</a>
                <span style="color: #cbd5e1;">•</span>
                <a href="#" style="color: #a855f7; text-decoration: none; font-size: 12px; margin: 0 8px;">LinkedIn</a>
                <span style="color: #cbd5e1;">•</span>
                <a href="#" style="color: #a855f7; text-decoration: none; font-size: 12px; margin: 0 8px;">Twitter</a>
              </div>
            </td>
          </tr>
          
        </table>
        
      </td>
    </tr>
  </table>
</body>
</html>
```

5. In the **To Email** field, enter: `techcolabplatform@gmail.com`
6. **Template Variables** to use:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
   - `{{timestamp}}` - Current date/time
7. Save the template and copy the **Template ID**

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (starts with something like "user_...")
3. Copy this key

### Step 5: Update Contact.tsx
Open `src/pages/Contact.tsx` and replace these values (around line 30):

```typescript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

---

## Part 2: Google Sheets Setup

### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Colab Contact Form Submissions"
4. In the first row, add these headers:
   - A1: `Name`
   - B1: `Email`
   - C1: `Phone`
   - D1: `Subject`
   - E1: `Message`
   - F1: `Timestamp`

### Step 2: Create Google Apps Script
1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Append the data to the sheet
    sheet.appendRow([
      data.name,
      data.email,
      data.phone,
      data.subject,
      data.message,
      data.timestamp
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Contact Form API is running");
}
```

4. Click **Save** (💾 icon)
5. Name your project (e.g., "Contact Form Handler")

### Step 3: Deploy the Script
1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure:
   - Description: "Contact Form API"
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to [Project Name] (unsafe)**
9. Click **Allow**
10. Copy the **Web app URL** (it will look like: `https://script.google.com/macros/s/...`)

### Step 4: Update Contact.tsx
Open `src/pages/Contact.tsx` and replace this value (around line 70):

```typescript
const scriptUrl = 'YOUR_GOOGLE_APPS_SCRIPT_URL'; // Paste your Web app URL here
```

---

## Part 3: Testing

### Test the Form
1. Run your development server: `npm run dev`
2. Go to the Contact page
3. Fill out the form with test data
4. Click "Send Message"
5. Check:
   - ✅ You should see a success message
   - ✅ Email should arrive at `techcolabplatform@gmail.com`
   - ✅ Data should appear in your Google Sheet

### Troubleshooting

**Email not sending?**
- Check your EmailJS Service ID, Template ID, and Public Key
- Make sure you authorized Gmail in EmailJS
- Check EmailJS dashboard for error logs

**Google Sheets not updating?**
- Make sure the Apps Script is deployed as "Anyone" can access
- Check the script URL is correct
- Open the script URL in browser - it should say "Contact Form API is running"
- Check Apps Script logs: **Executions** tab in Apps Script editor

**Form shows error?**
- Open browser console (F12) to see detailed error messages
- Check network tab to see if requests are being sent

---

## Security Notes

1. **EmailJS Public Key**: It's safe to expose in frontend code - EmailJS has rate limiting
2. **Google Apps Script**: The URL is public but only accepts POST requests with specific data
3. **Email Protection**: Consider adding reCAPTCHA if you get spam (optional)

---

## Optional: Add reCAPTCHA (Spam Protection)

If you want to add Google reCAPTCHA:

1. Go to [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Register your site with reCAPTCHA v3
3. Install package: `npm install react-google-recaptcha-v3`
4. Add reCAPTCHA to the form (I can help with this if needed)

---

## Summary

After completing all steps:
- ✅ Contact form sends emails to `techcolabplatform@gmail.com`
- ✅ All submissions are saved in Google Sheets
- ✅ Users get instant feedback (success/error messages)
- ✅ Form has loading state while submitting

**Need Help?** If you encounter any issues during setup, let me know which step you're stuck on!
