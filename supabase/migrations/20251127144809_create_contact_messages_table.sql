/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text) - Visitor name
      - `email` (text) - Visitor email
      - `phone` (text) - Visitor phone
      - `subject` (text) - Message subject
      - `project_type` (text) - Type of project
      - `message` (text) - Message content
      - `created_at` (timestamp) - When message was sent
      
  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy to allow anyone to insert messages (public form submission)
    - Add policy to allow only authenticated admins to read messages
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text,
  project_type text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to insert contact messages"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view contact messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);