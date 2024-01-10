import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qsfmcfrxjnbqapzyuksn.supabase.co";
const supabaseKey = "APIKEY-HERE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
