import React from "react";

function ProfileCard({ name, description, linkedinLink,Email }) {
  return (
    <>
      <a
        href={linkedinLink}
        className="flex flex-col items-start text-white bg-blue-900 border-2 border-black rounded-lg shadow md:flex-row md:max-w-xl"
      >
        <div className="flex flex-col justify-between p-4 leading-normal">
          <div className="flex justify-start items-center gap-1 flex-col mb-2 py-2">
          <h5 className=" text-2xl font-bold tracking-tight">{name}</h5>
          <h5 className="text-l font-semibold tracking-tight">{Email}</h5>

          </div>
          <p className="mb-3 font-normal ">{description}</p>
        </div>
      </a>
    </>
  );
}

export default ProfileCard;
