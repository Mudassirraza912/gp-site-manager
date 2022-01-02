-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Seeding', 'Contacted', 'Accepted', 'Declined', 'NoResponse');

-- CreateTable
CREATE TABLE "Sites" (
    "id" SERIAL NOT NULL,
    "dr" INTEGER NOT NULL,
    "da" INTEGER NOT NULL,
    "domain" TEXT NOT NULL,
    "traffic" INTEGER NOT NULL,
    "vendorPrice" INTEGER NOT NULL,
    "clientPrice" INTEGER NOT NULL,
    "contact" TEXT,
    "email" TEXT,
    "Category" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'Seeding',

    CONSTRAINT "Sites_pkey" PRIMARY KEY ("id")
);
