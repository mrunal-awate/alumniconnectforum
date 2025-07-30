import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fnyccpubltqaibefivib.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZueWNjcHVibHRxYWliZWZpdmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MDQyNTQsImV4cCI6MjA2OTQ4MDI1NH0.PW7YyEI4ic-k9qM9yF2P_ASYsljnc9NYk6OrClXqhc0';

export const supabase = createClient(supabaseUrl, supabaseKey);
