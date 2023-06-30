-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_org_id_fkey";

-- AlterTable
ALTER TABLE "Pet" ALTER COLUMN "org_id" DROP NOT NULL,
ALTER COLUMN "org_id" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Org"("id") ON DELETE SET NULL ON UPDATE CASCADE;
