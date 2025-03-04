import { pgTable, varchar} from "drizzle-orm/pg-core"

export const mymessages = pgTable("mymessages", {
    message: varchar("message").notNull(),
})