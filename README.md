Dashboard
Your central command center

1.
Overview
The Dashboard provides a comprehensive view of your email outreach activities and key performance metrics.

View total campaigns, contacts, and emails sent
Monitor daily sending activity
Track open rates and engagement
Access recent campaigns quickly
✓
Stats Cards

Real-time metrics for campaigns, contacts, and emails

✓
Weekly Chart

Visual representation of email sending trends

✓
Recent Campaigns

Quick access to your latest campaign activities

Mailboxes
Connect and manage your email accounts

1.
Adding Mailboxes
Connect your email accounts to start sending campaigns. You can use OAuth for quick setup or manual configuration for custom providers.

OAuth (Recommended): Click "Connect Gmail" or "Connect Outlook" for one-click setup
Manual: Click "Add Manual" and fill in SMTP/IMAP settings
For custom providers: Enter SMTP Host, Port, Username, and Password
Test SMTP and IMAP connections before saving
✓
OAuth Integration

Secure connection with Gmail and Outlook

✓
Custom Providers

Support for Zoho, Yandex, Mail.ru, and custom SMTP

✓
Connection Testing

Test SMTP and IMAP connections before use

💡 Pro Tip:

Start with at least 2-3 mailboxes for cross-warmup functionality. Ensure all mailboxes have IMAP settings configured for Unibox integration.

2.
SMTP Settings
Configure SMTP (Simple Mail Transfer Protocol) settings for sending emails.

Enter SMTP Host (e.g., smtp.gmail.com)
Set SMTP Port (usually 587 for TLS or 465 for SSL)
Provide SMTP Username (usually your email address)
Enter SMTP Password (use App Password for Gmail/Zoho)
Click "Test SMTP Connection" to verify
3.
IMAP Settings
Configure IMAP (Internet Message Access Protocol) settings for receiving emails in Unibox.

Enter IMAP Host (e.g., imap.gmail.com)
Set IMAP Port (usually 993 for SSL or 143 for TLS)
Provide IMAP Username
Enter IMAP Password
Click "Test IMAP Connection" to verify
4.
Cross Send
Send emails from one mailbox to another for warmup purposes.

Click the email icon on any mailbox card
Select recipient mailbox from dropdown
Enter subject and message
Click "Send Email"
Contacts
Manage your contact lists and leads

1.
Contact Lists
Organize contacts into lists for better campaign targeting and management.

Click "Create List" to create a new contact list
Name your list (e.g., "Prospects", "Customers")
Assign contacts to lists when adding or importing
Filter contacts by list using the dropdown
2.
Adding Contacts
Add contacts manually or import in bulk from CSV files.

Manual: Click "Add Contact" and fill in details
CSV Import: Click "Import CSV" and upload your file
System automatically extracts emails from uploaded files
Duplicates are automatically removed
✓
CSV Import

Bulk import contacts from Excel, CSV, or TXT files

✓
Auto-tagging

System automatically tags contacts based on email domain

✓
Duplicate Detection

Automatic removal of duplicate contacts

3.
Filtering & Search
Find contacts quickly using filters and search functionality.

Use search bar to find contacts by name or email
Filter by status (Active, Bounced, Unsubscribed)
Filter by tags or lists
Combine multiple filters for precise results
4.
Tags
Tag contacts for better organization and segmentation.

Add tags when creating or editing contacts
Use bulk tagging to tag multiple contacts at once
Filter contacts by tags
Tags help in campaign targeting
Campaigns
Create and manage email campaigns

1.
Creating a Campaign
Campaigns are email sequences sent to your contact lists using templates.

Click "Create Campaign" button
Select a template or create a new one
Choose contact list(s) to send to
Select mailbox(es) to send from
Set schedule (immediate or scheduled)
Review and send
✓
Template Selection

Choose from saved templates or create new ones

✓
Multi-list Targeting

Send to multiple contact lists in one campaign

✓
Mailbox Rotation

Automatically rotate between multiple mailboxes

✓
Scheduling

Schedule campaigns for specific dates and times

2.
Campaign Status
Understanding different campaign states and what they mean.

Draft: Not sent yet, can be edited
Running: Currently sending emails
Paused: Temporarily stopped, can resume
Completed: All emails sent successfully
3.
Tracking
Monitor campaign performance with detailed analytics.

View sent count in real-time
Track open rates
Monitor click rates
See reply counts
Check bounce and unsubscribe rates
Templates
Create and manage email templates

1.
Creating Templates
Create reusable email templates for your campaigns.

Click "Create Template" button
Use AI Writer to generate content automatically
Or paste HTML/plain text directly
Add variables: {FIRST_NAME}, {COMPANY}, etc.
Save and organize by category
✓
AI Writer

Generate email content with AI assistance

✓
HTML Support

Create rich HTML emails with formatting

✓
Variables

Use dynamic variables for personalization

✓
Categories

Organize templates by category

2.
Warmup Templates
Pre-made templates for email warmup campaigns.

Select warmup day (Day 1-30)
View 3 variations for each day
Add templates to your collection
Use in warmup campaigns
3.
AI Features
Leverage AI-powered tools to enhance your templates.

Spam Check: Check spam score before sending
Tone Changer: Adjust email tone (professional, casual, etc.)
Subject Scorer: Rate your subject line effectiveness
HTML Cleaner: Clean and optimize HTML code
Email Warmup
Improve email deliverability

1.
What is Email Warmup?
Email warmup gradually increases your sending volume to build sender reputation and improve deliverability.

System sends emails between your mailboxes
Gradually increases sending volume
Simulates real conversations
Builds sender reputation with ISPs
2.
Getting Started
Start warming up your mailboxes to improve deliverability.

Add at least 2 active mailboxes
Select mailboxes to warmup
Click "Start Selected" or "Run Daily Warmup"
System automatically sends emails between mailboxes
Monitor warmup scores and health status
✓
Cross-Warmup

Mailboxes send emails to each other

✓
AI Replies

Automatic realistic replies generated with AI

✓
Daily Automation

Automatically runs daily at 9 AM

✓
Health Monitoring

Track warmup scores and health status

3.
Warmup Score
Understanding your mailbox health score.

0-49: Red - Needs attention, start warmup
50-79: Yellow - Moderate health, continue warmup
80-100: Green - Healthy mailbox, ready for campaigns
4.
Warmup Flow
Create custom warmup flows with specific templates and schedules.

Click "Create Warmup Flow"
Select mailboxes and templates
Set schedule for each day
Automate the entire warmup process
Email Verifier
Verify email addresses for accuracy

1.
Verification Modes
Choose between free and premium verification based on your needs.

Free: 80% accuracy, unlimited verifications
Premium: 100% accuracy, requires credits (AI + Premium API)
Free mode includes: syntax check, DNS validation, basic SMTP verification
Premium mode includes: all free features + AI analysis + premium API integration
2.
Single Verification
Verify one email at a time with instant results.

Enter email address in the input field
Select verification mode (Free or Premium)
Click "Verify Email"
View detailed results with validation checks
3.
Bulk Verification
Verify multiple emails at once from files or pasted text.

Choose "Paste Emails" or "Browse Files"
Paste emails or upload CSV/Excel/TXT file
System extracts emails automatically
Removes duplicates before verification
View progress in real-time
Download results when complete
✓
File Support

Upload CSV, Excel, or TXT files

✓
Auto Extraction

Automatically extracts emails from files

✓
Duplicate Removal

Removes duplicate emails before verification

✓
Progress Tracking

Real-time progress updates

4.
Verification Checks
Understanding what gets checked during verification.

Syntax Validation: Checks email format
MX Record Check: Verifies domain mail servers
SMTP Connection: Tests if email can receive messages
Domain Validation: Checks if domain exists
Role Address Detection: Identifies generic emails (info@, support@)
5.
Results
Understanding verification results.

Valid: Email exists and can receive emails
Invalid: Email doesn't exist or can't receive
Risky: Maybe valid (50% score)
Role: Generic email address
💡 Pro Tip:

Free verification results expire after 5-30 minutes. Premium results are saved for 7 days. Always verify emails before adding to campaigns for better deliverability.

Unibox
Unified inbox for all your mailboxes

1.
What is Unibox?
Unibox is a unified inbox that fetches emails from all your connected mailboxes in one place.

View all emails from all mailboxes in one interface
Organized in conversation threads
Reply directly from Unibox
AI-powered categorization and tagging
2.
Setup
Connect your mailboxes to Unibox.

Add mailboxes with IMAP settings (Host, Port, Username, Password)
Ensure mailboxes are marked as "Active"
Click "Fetch Emails" to retrieve emails
System automatically fetches new emails periodically
✓
IMAP Integration

Connects to mailboxes via IMAP protocol

✓
Auto-Fetch

Automatically fetches new emails

✓
Thread Organization

Groups related emails in threads

3.
Viewing Emails
View and manage emails in Unibox.

All emails organized in threads
HTML emails render properly
Plain text emails formatted with line breaks
Search by subject, sender, or content
Filter by mailbox or tags
4.
Replying
Send replies directly from Unibox.

Click "Reply" button on any thread
Compose your reply message
Click "Send Reply"
Replies are sent from the original mailbox
5.
AI Tags
AI automatically categorizes emails for better organization.

Interested: Positive response indicating interest
Positive: Good engagement and response
Negative: Unfavorable or negative response
AI Features
AI-powered tools for email outreach

1.
AI Email Writer
Generate professional emails with AI assistance.

Enter a one-line idea or description
AI generates professional email content
Multiple variations available
Edit generated content before saving
Save emails for future use
Organize by categories and favorites
2.
AI Leads
Find and extract leads using AI.

Enter business type or search query
AI finds relevant leads with contact info
Includes company name, email, phone
Export or add directly to contacts
✓
Business Data Import

Import business data from CSV/Excel

✓
Email Extraction

Automatically extracts emails from data

✓
Contact Enrichment

Enriches leads with additional information

3.
AI Stats
Track AI feature usage and performance.

View AI feature usage statistics
Track credits consumed
Monitor AI-generated content quality
Analyze performance metrics
Analytics
Track and analyze email performance

1.
Key Metrics
Monitor important email performance indicators.

Total Sent: All emails sent across campaigns
Opened: Number of emails opened
Clicked: Number of links clicked
Replied: Number of replies received
2.
Performance Rates
Calculate and track email engagement rates.

Open Rate: % of emails opened
Click Rate: % of emails with clicks
Reply Rate: % of emails with replies
Compare rates across different campaigns
3.
Charts & Graphs
Visual representation of email performance over time.

View sending trends over time
Track engagement patterns
Identify best performing campaigns
Compare performance across periods
4.
Time Filters
Filter analytics by different time periods.

Today: Current day statistics
Week: Last 7 days
Month: Last 30 days
Custom: Select specific date range# landingpage
