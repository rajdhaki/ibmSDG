import React from "react";

function ProfileCard({ name, description }) {
  return (
    <>
      <a
        href="#"
        className="flex flex-col items-start text-white bg-blue-900 border-2 border-black rounded-lg shadow md:flex-row md:max-w-xl"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="/docs/images/blog/image-4.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{name}</h5>
          <p className="mb-3 font-normal ">{description}</p>
        </div>
      </a>
    </>
  );
}

export default ProfileCard;
