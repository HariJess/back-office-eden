"use client";

import React from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import CardDataWorkers from "./CardDataWorkers";

const Workers: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Workers" />
      <div className="flex items-center justify-between">
        <div className="flex space-x-5">
          <span className="flex items-center text-black md:text-base lg:text-lg">
            <div className="mr-2 h-2 w-2 rounded-full bg-success"></div>Presents
            6
          </span>
          <span className="flex items-center text-black md:text-base lg:text-lg">
            <div className="mr-2 h-2 w-2 rounded-full bg-gray-3"></div>Absents 2
          </span>
        </div>

        <div className="ml-auto flex space-x-2">
          <button className="  flex h-10 items-center rounded bg-white p-3 font-medium text-black hover:bg-opacity-90">
            <img src="images/icon/Import.png" alt="#" />
            <strong>Import</strong>
          </button>

          <button className="flex h-10 items-center rounded bg-primary p-3 font-medium text-white hover:bg-opacity-90">
            <img src="images/icon/add_worker.png" alt="#" />{" "}
            <strong>Add employees</strong>
          </button>
        </div>
      </div>

      <div className="mt-9 grid grid-cols-1 gap-2 md:grid-cols-1 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataWorkers
          status="Present"
          name="Laura Martin"
          image="/images/user/user-01.png"
          role="Directrice des opérations"
          phone_number="+261 34 00 000 01"
          email="laura.martin@gmail.com"
        />
        <CardDataWorkers
          status="Present"
          name="Mathieu Dubois"
          image="/images/user/user-02.png"
          role="Responsable marketing digital"
          phone_number="+261 34 00 000 02"
          email="mathieu.dubois@gmail.com"
        />
        <CardDataWorkers
          status="Present"
          name="Sophie Leblanc"
          image="/images/user/user-03.png"
          role="Gestionnaire de projet"
          phone_number="+261 34 00 000 03"
          email="sophie.leblanc@gmail.com"
        />
        <CardDataWorkers
          status="Absent"
          name="Thomas Moreau"
          image="/images/user/user-04.png"
          role="Analyste financier"
          phone_number="+261 34 00 000 04"
          email="thomas.moreau@gmail.com"
        />
        <CardDataWorkers
          status="Absent"
          name="Elodie Bernard"
          image="/images/user/user-05.png"
          role="Chef de produit"
          phone_number="+261 34 00 000 05"
          email="elodie.bernard@gmail.com"
        />
        <CardDataWorkers
          status="Present"
          name="Yannick Petit"
          image="/images/user/user-06.png"
          role="Directeur commercial"
          phone_number="+261 34 00 000 06"
          email="yannick.petit@gmail.com"
        />
        <CardDataWorkers
          status="Present"
          name="Camille Dupont"
          image="/images/user/user-07.png"
          role="Ingénieure en développement logiciel"
          phone_number="+261 34 00 000 07"
          email="camille.dupont@gmail.com"
        />
        <CardDataWorkers
          status="Present"
          name="Antoine Lefèvre"
          image="/images/user/user-08.png"
          role="Responsable des ressources humaines"
          phone_number="+261 34 00 000 08"
          email="antoine.lefevre@gmail.com"
        />
      </div>
    </>
  );
};

export default Workers;
