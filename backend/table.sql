CREATE TABLE bedwars_stats (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY, -- Unique ID for each stat entry
    solo_final_kills INT NOT NULL DEFAULT 0, -- Final kills
    solo_final_deaths INT NOT NULL DEFAULT 0, -- Final deaths
    solo_beds_broken INT NOT NULL DEFAULT 0, -- Beds broken
    solo_beds_lost INT NOT NULL DEFAULT 0, -- Beds lost
    duos_final_kills INT NOT NULL DEFAULT 0, -- Final kills
    duos_final_deaths INT NOT NULL DEFAULT 0, -- Final deaths
    duos_beds_broken INT NOT NULL DEFAULT 0, -- Beds broken
    duos_beds_lost INT NOT NULL DEFAULT 0, -- Beds lost
    triples_final_kills INT NOT NULL DEFAULT 0, -- Final kills
    triples_final_deaths INT NOT NULL DEFAULT 0, -- Final deaths
    triples_beds_broken INT NOT NULL DEFAULT 0, -- Beds broken
    triples_beds_lost INT NOT NULL DEFAULT 0, -- Beds lost
    quads_final_kills INT NOT NULL DEFAULT 0, -- Final kills
    quads_final_deaths INT NOT NULL DEFAULT 0, -- Final deaths
    quads_beds_broken INT NOT NULL DEFAULT 0, -- Beds broken
    quads_beds_lost INT NOT NULL DEFAULT 0,-- Beds lost
    two_four_final_kills INT NOT NULL DEFAULT 0,
    two_four_final_deaths INT NOT NULL DEFAULT 0,
    two_four_beds_broken INT NOT NULL DEFAULT 0,
    two_four_beds_lost INT NOT NULL DEFAULT 0,
    wins INT NOT NULL DEFAULT 0,
    losses INT NOT NULL DEFAULT 0,
    bw_level INT NOT NULL DEFAULT 0, -- Player Level
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP -- Timestamp of the stat entry
);

CREATE POLICY "Allow insert only from service_role"
ON "public"."bedwars_stats"
FOR INSERT
TO service_role
WITH CHECK (true);

CREATE POLICY "Allow read access to all users"
ON "public"."bedwars_stats"
FOR SELECT
TO anon
USING (true);

CREATE POLICY "Allow update only from service_role"
ON "public"."bedwars_stats"
FOR UPDATE
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow delete only from service_role"
ON "public"."bedwars_stats"
FOR DELETE
TO service_role
USING (true);



