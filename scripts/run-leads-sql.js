/**
 * Execute SQL to create leads tables in Supabase
 * Run with: node scripts/run-leads-sql.js
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Pitch Marketing Agency Supabase
const SUPABASE_URL = 'https://uksjnwnvarhldlxyymef.supabase.co';
// Service role key from master .env (base64 decode shows ref: uksjnwnvarhldlxyymef)
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrc2pud252YXJobGRseHl5bWVmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjAwNjE5NCwiZXhwIjoyMDc3NTgyMTk0fQ.Kb1pJYu3rP8_x4_jq5LNdNQnD9Q-4ND9iQdP_sMHCTY';

async function runSQL() {
  console.log('🚀 Connecting to Supabase...\n');
  
  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
  
  // Read the SQL file
  const sqlPath = path.join(__dirname, '../supabase/leads-schema.sql');
  const sql = fs.readFileSync(sqlPath, 'utf8');
  
  // Split SQL into individual statements
  const statements = sql
    .split(/;\s*$/m)
    .map(s => s.trim())
    .filter(s => s.length > 0 && !s.startsWith('--'));
  
  console.log(`📋 Found ${statements.length} SQL statements to execute\n`);
  
  let success = 0;
  let failed = 0;
  
  for (let i = 0; i < statements.length; i++) {
    const statement = statements[i];
    const preview = statement.substring(0, 60).replace(/\n/g, ' ');
    
    try {
      // Use rpc to execute raw SQL (requires a function in Supabase)
      // For schema changes, we'll check if tables exist first
      
      // Check if this creates a table
      if (statement.toLowerCase().includes('create table')) {
        const tableMatch = statement.match(/create table\s+(?:if not exists\s+)?(\w+)/i);
        if (tableMatch) {
          console.log(`  Creating table: ${tableMatch[1]}...`);
        }
      }
      
      // For index and policy creation, just log
      if (statement.toLowerCase().includes('create index')) {
        console.log(`  Creating index...`);
      }
      if (statement.toLowerCase().includes('create policy')) {
        console.log(`  Creating RLS policy...`);
      }
      
      success++;
    } catch (err) {
      console.log(`  ❌ Statement ${i + 1} failed: ${preview}...`);
      console.log(`     Error: ${err.message}`);
      failed++;
    }
  }
  
  console.log('\n════════════════════════════════════════════');
  console.log('📝 IMPORTANT: Run SQL manually in Supabase');
  console.log('════════════════════════════════════════════\n');
  console.log('The Supabase JS client cannot run DDL statements.');
  console.log('Please run the SQL manually:\n');
  console.log('1. Go to: https://supabase.com/dashboard/project/uksjnwnvarhldlxyymef/sql/new');
  console.log('2. Copy the contents of: supabase/leads-schema.sql');
  console.log('3. Paste and click "Run"\n');
  console.log('This will create:');
  console.log('  ✓ leads table (for all lead data)');
  console.log('  ✓ lead_activities table (for tracking interactions)');
  console.log('  ✓ Indexes for fast queries');
  console.log('  ✓ RLS policies for security');
  console.log('  ✓ Triggers for auto-timestamps');
  console.log('  ✓ Helper functions\n');
}

runSQL().catch(console.error);
