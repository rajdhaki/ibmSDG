import React from "react";

function ProfileCard({ name, description, linkedinLink }) {
  return (
    <>
      <a
        href={linkedinLink}
        className="flex flex-col items-start text-white bg-blue-900 border-2 border-black rounded-lg shadow md:flex-row md:max-w-xl"
      >
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{name}</h5>
          <p className="mb-3 font-normal ">{description}</p>
        </div>
      </a>
    </>
  );
}

export default ProfileCard;
