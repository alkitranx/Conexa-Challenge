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

-- CreateTable
CREATE TABLE "Specie" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "classification" VARCHAR(50) NOT NULL,
    "average_height" VARCHAR(50) NOT NULL,
    "skin_colors" VARCHAR(50) NOT NULL,
    "hair_colors" VARCHAR(50) NOT NULL,
    "eye_colors" VARCHAR(50) NOT NULL,
    "average_lifespan" VARCHAR(50) NOT NULL,
    "homeworld" VARCHAR(50),
    "language" VARCHAR(50) NOT NULL,
    "sys_creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sys_update_date" TIMESTAMP(6),
    "designation" VARCHAR(50) NOT NULL,

    CONSTRAINT "Specie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "height" VARCHAR(50) NOT NULL,
    "mass" VARCHAR(50) NOT NULL,
    "hair_color" VARCHAR(50) NOT NULL,
    "skin_color" VARCHAR(50) NOT NULL,
    "eye_color" VARCHAR(50) NOT NULL,
    "birth_year" VARCHAR(50) NOT NULL,
    "gender" VARCHAR(50) NOT NULL,
    "sys_creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sys_update_date" TIMESTAMP(6),

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Film" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "opening_crawl" VARCHAR(1000) NOT NULL,
    "director" VARCHAR(50) NOT NULL,
    "producer" VARCHAR(50) NOT NULL,
    "release_date" DATE NOT NULL,
    "sys_creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sys_update_date" TIMESTAMP(6),
    "episode_id" INTEGER NOT NULL,

    CONSTRAINT "Film_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Planet" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "rotation_period" VARCHAR(50) NOT NULL,
    "orbital_period" VARCHAR(50) NOT NULL,
    "diameter" VARCHAR(50) NOT NULL,
    "climate" VARCHAR(50) NOT NULL,
    "gravity" VARCHAR(50) NOT NULL,
    "terrain" VARCHAR(50) NOT NULL,
    "surface_water" VARCHAR(50) NOT NULL,
    "population" VARCHAR(50) NOT NULL,
    "sys_creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sys_update_date" TIMESTAMP(6),

    CONSTRAINT "Planet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Starship" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "model" VARCHAR(50) NOT NULL,
    "manufacturer" VARCHAR(50) NOT NULL,
    "cost_in_credits" VARCHAR(50) NOT NULL,
    "length" VARCHAR(50) NOT NULL,
    "max_atmosphering_speed" VARCHAR(200) NOT NULL,
    "crew" VARCHAR(50) NOT NULL,
    "passengers" VARCHAR(50) NOT NULL,
    "cargo_capacity" VARCHAR(50) NOT NULL,
    "consumables" VARCHAR(50) NOT NULL,
    "hyperdrive_rating" VARCHAR(50) NOT NULL,
    "MGLT" VARCHAR(50) NOT NULL,
    "starship_class" VARCHAR(50) NOT NULL,
    "sys_creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sys_update_date" TIMESTAMP(6),

    CONSTRAINT "Starship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "model" VARCHAR(50) NOT NULL,
    "manufacturer" VARCHAR(50) NOT NULL,
    "cost_in_credits" VARCHAR(50) NOT NULL,
    "length" VARCHAR(50) NOT NULL,
    "max_atmosphering_speed" VARCHAR(50) NOT NULL,
    "crew" VARCHAR(50) NOT NULL,
    "passengers" VARCHAR(50) NOT NULL,
    "cargo_capacity" VARCHAR(50) NOT NULL,
    "consumables" VARCHAR(50) NOT NULL,
    "vehicle_class" VARCHAR(50) NOT NULL,
    "sys_creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sys_update_date" TIMESTAMP(6),

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Film_Vehicles" (
    "id" SERIAL NOT NULL,
    "id_vehicle" INTEGER NOT NULL,
    "id_film" INTEGER NOT NULL,
    "sys_creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sys_update_date" TIMESTAMP(6),

    CONSTRAINT "Film_Vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicle_character" (
    "id" SERIAL NOT NULL,
    "id_vehicle" INTEGER NOT NULL,
    "id_character" INTEGER NOT NULL,
    "sys_creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sys_update_date" TIMESTAMP(6),

    CONSTRAINT "Vehicle_character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Film_character" (
    "id" SERIAL NOT NULL,
    "id_film" INTEGER NOT NULL,
    "id_character" INTEGER NOT NULL,
    "sys_creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sys_update_date" TIMESTAMP(6),

    CONSTRAINT "Film_character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Film_planet" (
    "id" SERIAL NOT NULL,
    "id_film" INTEGER NOT NULL,
    "id_planet" INTEGER NOT NULL,
    "sys_creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sys_update_date" TIMESTAMP(6),

    CONSTRAINT "Film_planet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Film_starship" (
    "id" SERIAL NOT NULL,
    "id_film" INTEGER NOT NULL,
    "id_starship" INTEGER NOT NULL,
    "sys_creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sys_update_date" TIMESTAMP(6),

    CONSTRAINT "Film_starship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Film_specie" (
    "id" SERIAL NOT NULL,
    "id_film" INTEGER NOT NULL,
    "id_specie" INTEGER NOT NULL,
    "sys_creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sys_update_date" TIMESTAMP(6),

    CONSTRAINT "Film_specie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character_specie" (
    "id" SERIAL NOT NULL,
    "id_character" INTEGER NOT NULL,
    "id_specie" INTEGER NOT NULL,
    "sys_creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sys_update_date" TIMESTAMP(6),

    CONSTRAINT "Character_specie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Starship_character" (
    "id" SERIAL NOT NULL,
    "id_starship" INTEGER NOT NULL,
    "id_character" INTEGER NOT NULL,
    "sys_creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sys_update_date" TIMESTAMP(6),

    CONSTRAINT "Starship_character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Planet_character" (
    "id" SERIAL NOT NULL,
    "id_planet" INTEGER NOT NULL,
    "id_character" INTEGER NOT NULL,
    "sys_creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sys_update_date" TIMESTAMP(6),

    CONSTRAINT "Planet_character_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_id_role_fkey" FOREIGN KEY ("id_role") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Film_Vehicles" ADD CONSTRAINT "Film_Vehicles_id_film_fkey" FOREIGN KEY ("id_film") REFERENCES "Film"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Film_Vehicles" ADD CONSTRAINT "Film_Vehicles_id_vehicle_fkey" FOREIGN KEY ("id_vehicle") REFERENCES "Vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Vehicle_character" ADD CONSTRAINT "Vehicle_character_id_character_fkey" FOREIGN KEY ("id_character") REFERENCES "Character"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Vehicle_character" ADD CONSTRAINT "Vehicle_character_id_vehicle_fkey" FOREIGN KEY ("id_vehicle") REFERENCES "Vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Film_character" ADD CONSTRAINT "Film_character_id_character_fkey" FOREIGN KEY ("id_character") REFERENCES "Character"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Film_character" ADD CONSTRAINT "Film_character_id_film_fkey" FOREIGN KEY ("id_film") REFERENCES "Film"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Film_planet" ADD CONSTRAINT "Film_planet_id_film_fkey" FOREIGN KEY ("id_film") REFERENCES "Film"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Film_planet" ADD CONSTRAINT "Film_planet_id_planet_fkey" FOREIGN KEY ("id_planet") REFERENCES "Planet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Film_starship" ADD CONSTRAINT "Film_starship_id_film_fkey" FOREIGN KEY ("id_film") REFERENCES "Film"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Film_starship" ADD CONSTRAINT "Film_starship_id_starship_fkey" FOREIGN KEY ("id_starship") REFERENCES "Starship"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Film_specie" ADD CONSTRAINT "Film_specie_id_film_fkey" FOREIGN KEY ("id_film") REFERENCES "Film"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Film_specie" ADD CONSTRAINT "Film_specie_id_specie_fkey" FOREIGN KEY ("id_specie") REFERENCES "Specie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Character_specie" ADD CONSTRAINT "Character_specie_id_character_fkey" FOREIGN KEY ("id_character") REFERENCES "Character"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Character_specie" ADD CONSTRAINT "Character_specie_id_specie_fkey" FOREIGN KEY ("id_specie") REFERENCES "Specie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Starship_character" ADD CONSTRAINT "Starship_character_id_character_fkey" FOREIGN KEY ("id_character") REFERENCES "Character"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Starship_character" ADD CONSTRAINT "Starship_character_id_starship_fkey" FOREIGN KEY ("id_starship") REFERENCES "Starship"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Planet_character" ADD CONSTRAINT "Planet_character_id_character_fkey" FOREIGN KEY ("id_character") REFERENCES "Character"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Planet_character" ADD CONSTRAINT "Planet_character_id_planet_fkey" FOREIGN KEY ("id_planet") REFERENCES "Planet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
