import { relations } from "drizzle-orm";
import {
  boolean,
  doublePrecision,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("emailVerified").notNull(),
  image: text("image"),
  createdAt: timestamp("createdAt").notNull(),
  updatedAt: timestamp("updatedAt").notNull(),
  role: text("role"),
  banned: boolean("banned"),
  banReason: text("banReason"),
  banExpires: timestamp("banExpires"),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expiresAt").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("createdAt").notNull(),
  updatedAt: timestamp("updatedAt").notNull(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
  userId: text("userId")
    .notNull()
    .references(() => user.id),
  impersonatedBy: text("impersonatedBy"),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  userId: text("userId")
    .notNull()
    .references(() => user.id),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  idToken: text("idToken"),
  accessTokenExpiresAt: timestamp("accessTokenExpiresAt"),
  refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("createdAt").notNull(),
  updatedAt: timestamp("updatedAt").notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expiresAt").notNull(),
  createdAt: timestamp("createdAt"),
  updatedAt: timestamp("updatedAt"),
});

export const hive = pgTable("hive", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  location: text("location"),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }), // Foreign key referencing 'user.id'
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

// Define the 'hiveData' table
export const hiveData = pgTable("hiveData", {
  id: text("id").primaryKey(),
  hiveId: text("hiveId")
    .notNull()
    .references(() => hive.id, { onDelete: "cascade" }), // Foreign key referencing 'hive.id'
  temperature: doublePrecision("temperature"),
  soundLevel: doublePrecision("soundLevel"),
  recordedAt: timestamp("recordedAt").notNull().defaultNow(),
});

// Define relationships for the 'user' table
export const userRelations = relations(user, ({ many }) => ({
  hives: many(hive),
}));

// Define relationships for the 'hive' table
export const hiveRelations = relations(hive, ({ one, many }) => ({
  owner: one(user, {
    fields: [hive.userId],
    references: [user.id],
  }),
  data: many(hiveData),
}));

// Define relationships for the 'hiveData' table
export const hiveDataRelations = relations(hiveData, ({ one }) => ({
  hive: one(hive, {
    fields: [hiveData.hiveId],
    references: [hive.id],
  }),
}));
