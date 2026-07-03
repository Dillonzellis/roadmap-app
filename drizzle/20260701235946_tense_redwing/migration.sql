CREATE TABLE `tracks` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text NOT NULL,
	`slug` text NOT NULL UNIQUE,
	`description` text
);
