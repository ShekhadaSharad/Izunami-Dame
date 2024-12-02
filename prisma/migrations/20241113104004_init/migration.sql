/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Quotes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Address] DROP CONSTRAINT [Address_userId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Profile] DROP CONSTRAINT [Profile_userId_fkey];

-- AlterTable
ALTER TABLE [dbo].[User] DROP COLUMN [name];
ALTER TABLE [dbo].[User] ADD [createdAt] DATETIME2 NOT NULL CONSTRAINT [User_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
[isVerified] BIT NOT NULL CONSTRAINT [User_isVerified_df] DEFAULT 0,
[password] NVARCHAR(1000) NOT NULL,
[updatedAt] DATETIME2 NOT NULL;

-- DropTable
DROP TABLE [dbo].[Address];

-- DropTable
DROP TABLE [dbo].[Employee];

-- DropTable
DROP TABLE [dbo].[Profile];

-- DropTable
DROP TABLE [dbo].[Quotes];

-- CreateTable
CREATE TABLE [dbo].[Payee] (
    [PayeeId] INT NOT NULL,
    [Payee] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Payee_pkey] PRIMARY KEY CLUSTERED ([PayeeId])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
