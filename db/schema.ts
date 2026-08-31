// Single aggregate only: no answers, identifiers, or individual completion records.
export const counterSchema = `CREATE TABLE IF NOT EXISTS completion_counter (
 id INTEGER PRIMARY KEY CHECK (id = 1),
 total INTEGER NOT NULL DEFAULT 0 CHECK (total >= 0)
)`;
