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
    quads_beds_lost INT NOT NULL DEFAULT 0, -- Beds lost
    bw_level INT NOT NULL DEFAULT 0, -- Player Level
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP -- Timestamp of the stat entry
);

create policy "Insert"
on "public"."bedwars_stats"
as RESTRICTIVE
for INSERT
to service_role