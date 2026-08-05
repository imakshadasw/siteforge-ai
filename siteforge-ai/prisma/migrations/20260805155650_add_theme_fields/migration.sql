/*
  Warnings:

  - Added the required column `services` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `testimonials` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whyChooseUs` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "businessName" TEXT NOT NULL,
    "businessType" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "theme" TEXT NOT NULL DEFAULT 'Dark',
    "heroTitle" TEXT NOT NULL,
    "heroSubtitle" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "services" JSONB NOT NULL,
    "whyChooseUs" JSONB NOT NULL,
    "testimonials" JSONB NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "address" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Project" ("about", "businessName", "businessType", "city", "createdAt", "description", "heroSubtitle", "heroTitle", "id") SELECT "about", "businessName", "businessType", "city", "createdAt", "description", "heroSubtitle", "heroTitle", "id" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
