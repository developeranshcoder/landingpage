const index2 = {
  dashboard: {
    heading: 'Dashboard – Your Central Command Center',
    description: 'Get a complete overview of campaigns, contacts, emails sent, engagement metrics and recent activity.',
    cards: [
      { title: 'Stats Cards', desc: 'Real-time metrics for campaigns, contacts and emails.', color: 'bg-blue-100' },
      { title: 'Weekly Charts', desc: 'Visual trends of daily email sending activity.', color: 'bg-green-100' },
      { title: 'Recent Campaigns', desc: 'Quick access to latest campaign performance.', color: 'bg-purple-100' }
    ]
  },

  mailboxes: {
    heading: 'Mailboxes & SMTP Configuration',
    description: 'Connect Gmail, Outlook, Zoho or custom SMTP providers with full IMAP/SMTP testing and cross-send warmup support.',
    cards: [
      { title: 'OAuth Integration', desc: "One-click secure Gmail & Outlook connection.", color: 'bg-yellow-100' },
      { title: 'Custom SMTP', desc: 'Zoho, Yandex, Mail.ru and any SMTP provider.', color: 'bg-red-100' },
      { title: 'Connection Testing', desc: 'Test SMTP & IMAP before sending emails.', color: 'bg-blue-100' }
    ]
  },

  campaigns: {
    heading: 'Campaigns & Sequences',
    description: 'Create multi-step email campaigns with scheduling, mailbox rotation and real-time tracking.',
    items: [
      { title: 'Templates' },
      { title: 'Scheduling' },
      { title: 'Mailbox Rotation' },
      { title: 'Live Tracking' }
    ]
  },

  warmup: {
    heading: 'Email Warmup & Deliverability',
    description: 'Automatically warm up mailboxes using AI-generated replies, cross-mailbox sending and daily automation.',
    imageText: 'Warmup Flow Image'
  },

  featureBlocks: [
    { title: 'Everything You Need in One Place', subtitle: 'Dashboard Overview', imageLeft: true, bg: '' },
    { title: 'Build Sender Reputation Automatically', subtitle: 'Email Warmup', imageLeft: false, bg: 'py-32' },
    { title: 'Connect & Warm Multiple Mailboxes', subtitle: 'Smart Mailboxes', imageLeft: true, bg: 'bg-gray-50' }
  ],

  finalCTA: {
    heading: 'Scale Your Cold Email Outreach With Confidence',
    description: 'From mailbox setup to warmup, campaigns, AI writing and analytics — Tipsverse handles everything.',
    ctaText: 'Start Free →'
  }
}

const publicImages = [
  { src: '/image0.jpg', title: 'Workspace Snapshot', subtitle: 'Dashboard view', description: 'Overview snapshot showing key metrics and quick actions.' },
  { src: '/image1.png', title: 'Campaign Tile', subtitle: 'Campaign preview', description: 'Sample campaign card with performance highlights.' },
  { src: '/image10.png', title: 'Template Gallery', subtitle: 'Email templates', description: 'A selection of customizable templates for outreach.' },
  { src: '/image11.png', title: 'Export Panel', subtitle: 'Export & Reports', description: 'Export options and quick reports for campaign analytics.' },
  { src: '/image12.jpeg', title: 'Contact List', subtitle: 'Contacts', description: 'Contact management interface with import/export and filters.' },
  { src: '/image13.png', title: 'Sequence Builder', subtitle: 'Automation', description: 'Build multi-step sequences and automated follow-ups.' },
  { src: '/image14.png', title: 'Verification UI', subtitle: 'Email verifier', description: 'Verify deliverability and reduce bounce rates.' },
  { src: '/image15.png', title: 'Settings', subtitle: 'Account settings', description: 'Manage account preferences, billing, and integrations.' },
  { src: '/image16.png', title: 'Activity Feed', subtitle: 'Real-time activity', description: 'Recent activity feed showing sends and replies.' },
  { src: '/image17.png', title: 'Health Scores', subtitle: 'Deliverability', description: 'Monitor warmup and deliverability health scores.' },
  { src: '/image18.png', title: 'AI Writer', subtitle: 'Content assistant', description: 'Generate and personalize email copy with AI.' },
  { src: '/image19.png', title: 'Team Overview', subtitle: 'Collaborate', description: 'Team management and role permissions screen.' },
  { src: '/image2.jpg', title: 'Inbox View', subtitle: 'Replies', description: 'Unified inbox for replies and thread management.' },
  { src: '/image20.avif', title: 'Warmup Flow', subtitle: 'Automated warmup', description: 'Visual flow of automated warmup interactions.' },
  { src: '/image21.webp', title: 'Export CSV', subtitle: 'Data export', description: 'Export contacts or reports into CSV for analysis.' },
  { src: '/image22.jpg', title: 'Domain Setup', subtitle: 'DNS & Auth', description: 'Setup SPF, DKIM and tracking domains for deliverability.' },
  { src: '/image23.webp', title: 'Integrations', subtitle: 'Third-party', description: 'Connect to other apps and analytics platforms.' },
  { src: '/image24.jpg', title: 'Scheduler', subtitle: 'Send scheduling', description: 'Fine-grained scheduling and timezone-aware sending.' },
  { src: '/image25.png', title: 'Detailed Chart', subtitle: 'Analytics', description: 'Detailed charts visualizing opens, clicks and responses.' },
  { src: '/image26.avif', title: 'Mailbox Connect', subtitle: 'OAuth & SMTP', description: 'Connect Gmail, Outlook or custom SMTP providers.' },
  { src: '/image27.webp', title: 'A/B Testing', subtitle: 'Optimization', description: 'Run A/B tests on subject lines and templates.' },
  { src: '/image28.avif', title: 'Cross-Send', subtitle: 'Mailbox rotation', description: 'Rotate mailboxes to scale safely and evenly.' },
  { src: '/image29.webp', title: 'Onboarding', subtitle: 'Setup wizard', description: 'Guided onboarding steps to get started quickly.' },
  { src: '/image3.webp', title: 'Campaign Builder', subtitle: 'Composer', description: 'Drag-and-drop composer for building sequences.' },
  { src: '/image30.svg', title: 'Icon Set', subtitle: 'Design assets', description: 'Iconography and small illustrative assets used across the UI.' },
  { src: '/image31.png', title: 'Notification Center', subtitle: 'Alerts', description: 'System notifications and warnings in one place.' },
  { src: '/image32.avif', title: 'Hero Feature', subtitle: 'Marketing hero', description: 'Main hero illustration used for marketing pages.' },
  { src: '/image33.png', title: 'Profile', subtitle: 'User profile', description: 'Profile and user preferences UI.' },
  { src: '/image34.png', title: 'Team Chart', subtitle: 'Collaboration metrics', description: 'Performance metrics by team and user.' },
  { src: '/image35.png', title: 'Modal Examples', subtitle: 'Dialogs', description: 'Modal and dialog UI patterns used in flows.' },
  { src: '/image36.htm', title: 'Legacy Asset', subtitle: 'HTML snippet', description: 'Legacy HTML preview or snippet stored in public assets.' },
  { src: '/image37.jpg', title: 'Feature Closeup', subtitle: 'Detail', description: 'Closeup visual highlighting a product detail.' },
  { src: '/image4.webp', title: 'Illustration A', subtitle: 'Artwork', description: 'Decorative illustration used across landing sections.' },
  { src: '/image5.png', title: 'Illustration B', subtitle: 'Graphics', description: 'Secondary artwork to support visual layout.' },
  { src: '/image6.png', title: 'Icon Grid', subtitle: 'Components', description: 'Grid of icons demonstrating component variety.' },
  { src: '/image7.png', title: 'Empty State', subtitle: 'No data', description: 'Example empty state illustration and messaging.' },
  { src: '/image8.png', title: 'Success State', subtitle: 'Confirmation', description: 'Illustration for operation success states.' },
  { src: '/image9.png', title: 'Error State', subtitle: 'Alerts', description: 'Illustration for error or warning messages.' }
]

index2.publicImages = publicImages

export default index2
