import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, unique, serial, varchar, timestamp, json, tinyint, int, decimal, text, mysqlEnum } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const addresses = mysqlTable("addresses", {
	id: serial("id").notNull(),
	line1: varchar("line1", { length: 191 }),
	line2: varchar("line2", { length: 191 }),
	city: varchar("city", { length: 191 }),
	state: varchar("state", { length: 191 }),
	postalCode: varchar("postalCode", { length: 191 }),
	country: varchar("country", { length: 191 }),
	createdAt: timestamp("createdAt", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updatedAt", { mode: 'string' }).onUpdateNow(),
},
(table) => {
	return {
		addressesIdPk: primaryKey({ columns: [table.id], name: "addresses_id_pk"}),
		id: unique("id").on(table.id),
	}
});

export const carts = mysqlTable("carts", {
	id: serial("id").notNull(),
	paymentIntentId: varchar("paymentIntentId", { length: 191 }),
	clientSecret: varchar("clientSecret", { length: 191 }),
	items: json("items").default('null'),
	closed: tinyint("closed").default(0).notNull(),
	createdAt: timestamp("createdAt", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updatedAt", { mode: 'string' }).onUpdateNow(),
},
(table) => {
	return {
		cartsIdPk: primaryKey({ columns: [table.id], name: "carts_id_pk"}),
		id: unique("id").on(table.id),
	}
});

export const emailPreferences = mysqlTable("email_preferences", {
	id: serial("id").notNull(),
	userId: varchar("userId", { length: 191 }),
	email: varchar("email", { length: 191 }).notNull(),
	token: varchar("token", { length: 191 }).notNull(),
	newsletter: tinyint("newsletter").default(0).notNull(),
	marketing: tinyint("marketing").default(0).notNull(),
	transactional: tinyint("transactional").default(0).notNull(),
	createdAt: timestamp("createdAt", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updatedAt", { mode: 'string' }).onUpdateNow(),
},
(table) => {
	return {
		emailPreferencesIdPk: primaryKey({ columns: [table.id], name: "email_preferences_id_pk"}),
		id: unique("id").on(table.id),
	}
});

export const orders = mysqlTable("orders", {
	id: serial("id").notNull(),
	storeId: int("storeId").notNull(),
	items: json("items").default('null'),
	quantity: int("quantity"),
	amount: decimal("amount", { precision: 10, scale: 2 }).default('0.00').notNull(),
	stripePaymentIntentId: varchar("stripePaymentIntentId", { length: 191 }).notNull(),
	stripePaymentIntentStatus: varchar("stripePaymentIntentStatus", { length: 191 }).notNull(),
	name: varchar("name", { length: 191 }),
	email: varchar("email", { length: 191 }),
	addressId: int("addressId"),
	createdAt: timestamp("createdAt", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updatedAt", { mode: 'string' }).onUpdateNow(),
},
(table) => {
	return {
		ordersIdPk: primaryKey({ columns: [table.id], name: "orders_id_pk"}),
		id: unique("id").on(table.id),
	}
});

export const payments = mysqlTable("payments", {
	id: serial("id").notNull(),
	storeId: int("storeId").notNull(),
	stripeAccountId: varchar("stripeAccountId", { length: 191 }).notNull(),
	stripeAccountCreatedAt: int("stripeAccountCreatedAt"),
	stripeAccountExpiresAt: int("stripeAccountExpiresAt"),
	detailsSubmitted: tinyint("detailsSubmitted").default(0).notNull(),
	createdAt: timestamp("createdAt", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updatedAt", { mode: 'string' }).onUpdateNow(),
},
(table) => {
	return {
		paymentsIdPk: primaryKey({ columns: [table.id], name: "payments_id_pk"}),
		id: unique("id").on(table.id),
	}
});

export const products = mysqlTable("products", {
	id: serial("id").notNull(),
	name: varchar("name", { length: 191 }).notNull(),
	description: text("description"),
	images: json("images").default('null'),
	category: mysqlEnum("category", ['skateboards','clothing','shoes','accessories']).default('skateboards').notNull(),
	subcategory: varchar("subcategory", { length: 191 }),
	price: decimal("price", { precision: 10, scale: 2 }).default('0.00').notNull(),
	inventory: int("inventory").default(0).notNull(),
	rating: int("rating").default(0).notNull(),
	tags: json("tags").default('null'),
	storeId: int("storeId").notNull(),
	createdAt: timestamp("createdAt", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updatedAt", { mode: 'string' }).onUpdateNow(),
},
(table) => {
	return {
		productsIdPk: primaryKey({ columns: [table.id], name: "products_id_pk"}),
		id: unique("id").on(table.id),
	}
});

export const stores = mysqlTable("stores", {
	id: serial("id").notNull(),
	userId: varchar("userId", { length: 191 }).notNull(),
	name: varchar("name", { length: 191 }).notNull(),
	description: text("description"),
	slug: text("slug"),
	active: tinyint("active").default(0).notNull(),
	stripeAccountId: varchar("stripeAccountId", { length: 191 }),
	createdAt: timestamp("createdAt", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updatedAt", { mode: 'string' }).onUpdateNow(),
},
(table) => {
	return {
		storesIdPk: primaryKey({ columns: [table.id], name: "stores_id_pk"}),
		id: unique("id").on(table.id),
	}
});