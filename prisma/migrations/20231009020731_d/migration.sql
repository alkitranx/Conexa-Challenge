-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(50) NOT NULL,
    "sys_creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sys_update_date" TIMESTAMP(6),

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "id_role" INTEGER NOT NULL DEFAULT 1,
    "sys_creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sys_update_date" TIMESTAMP(6),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_id_role_fkey" FOREIGN KEY ("id_role") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
