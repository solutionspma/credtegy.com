import { createClient } from '@supabase/supabase-js'

// Supabase client for Coys Logistics
// Using Pitch Marketing Agency's Supabase project for centralized lead management
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uksjnwnvarhldlxyymef.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrc2pud252YXJobGRseHl5bWVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwMDYxOTQsImV4cCI6MjA3NzU4MjE5NH0.A9CE2oq6gF09N-QYG6P8EMrwsW9bhLMkODjRhi_O4W4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper function to capture leads - using crm_leads table (already exists in Pitch Marketing Agency)
export async function captureLead(leadData) {
  const { data, error } = await supabase
    .from('crm_leads')
    .insert([{
      source: 'coyslogistics',
      form_id: leadData.form_id || 'lead_capture',
      product_id: leadData.product_id || null,
      name: leadData.name,
      email: leadData.email,
      phone: leadData.phone || null,
      message: leadData.message || null,
      business_type: leadData.business_type || null,
      fleet_size: leadData.fleet_size || null,
      utm_source: leadData.utm_source || null,
      utm_medium: leadData.utm_medium || null,
      utm_campaign: leadData.utm_campaign || null,
      utm_term: leadData.utm_term || null,
      utm_content: leadData.utm_content || null,
      referrer: typeof window !== 'undefined' ? document.referrer : null,
      landing_page: typeof window !== 'undefined' ? window.location.href : null,
      status: 'new',
    }])
    .select()

  if (error) {
    console.error('Lead capture error:', error)
    throw error
  }

  return data
}

export default supabase
