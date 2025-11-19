// Google Apps Script for Contact Form
// Copy this EXACT code to your Google Apps Script Editor

function doPost(e) {
  try {
    // Log incoming request for debugging
    Logger.log('=== Received POST request ===');
    Logger.log('postData: ' + JSON.stringify(e.postData));
    Logger.log('parameter: ' + JSON.stringify(e.parameter));
    Logger.log('parameters: ' + JSON.stringify(e.parameters));
    
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get parameters - try both e.parameter and e.parameters
    var params = e.parameter || {};
    
    // If parameters is an object with arrays, get first value
    if (e.parameters) {
      Object.keys(e.parameters).forEach(function(key) {
        if (Array.isArray(e.parameters[key])) {
          params[key] = e.parameters[key][0];
        } else {
          params[key] = e.parameters[key];
        }
      });
    }
    
    Logger.log('Processed params: ' + JSON.stringify(params));
    
    // Append data to sheet
    var row = [
      params.name || 'N/A',
      params.email || 'N/A',
      params.phone || 'N/A',
      params.subject || 'N/A',
      params.message || 'N/A',
      params.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    ];
    
    Logger.log('Appending row: ' + JSON.stringify(row));
    sheet.appendRow(row);
    Logger.log('✅ Data appended successfully');
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'Data saved successfully',
        'data': params
      }))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('❌ Error: ' + error.toString());
    Logger.log('Error stack: ' + error.stack);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'message': error.toString(),
        'stack': error.stack
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    // Check if parameters exist
    if (!e.parameter || Object.keys(e.parameter).length === 0) {
      return ContentService.createTextOutput("✅ Contact Form API is running! Ready to receive data.");
    }
    
    // Log incoming request
    Logger.log('=== Received GET request ===');
    Logger.log('Parameters: ' + JSON.stringify(e.parameter));
    
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var params = e.parameter;
    
    // Append data to sheet
    var row = [
      params.name || 'N/A',
      params.email || 'N/A',
      params.phone || 'N/A',
      params.subject || 'N/A',
      params.message || 'N/A',
      params.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    ];
    
    Logger.log('Appending row: ' + JSON.stringify(row));
    sheet.appendRow(row);
    Logger.log('✅ Data appended successfully via GET');
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'Data saved successfully via GET'
      }))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('❌ Error in GET: ' + error.toString());
    
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function - Run this to test if script has access to sheet
function testSheetAccess() {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    Logger.log('Sheet name: ' + sheet.getName());
    Logger.log('Sheet access: SUCCESS');
    
    // Test write
    sheet.appendRow(['Test', 'test@example.com', '1234567890', 'Test Subject', 'Test Message', new Date().toLocaleString()]);
    Logger.log('Test data written successfully');
    
  } catch (error) {
    Logger.log('Error accessing sheet: ' + error.toString());
  }
}
