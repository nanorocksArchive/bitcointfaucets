import * as React from "react";

const Faucet = (props) => {
  const {
    id,
    name,
    img,
    link,
    claim_time,
    minimal_claim,
    maximum_claim,
    referral_comm_rate,
    description,
  } = props.data;

  return (
    <a
      href={link}
      target="_blank"
      className={`${props.scale} bg-gray-100 rounded-xl md:p-0 p-8 shadow-md hover:opacity-95`}
      key={id}
    >
      <img
        className="w-24 h-24 rounded-full block mx-auto mt-5"
        src={`/img/btcfaucets/${img}`}
        alt={name}
      />
      <div className="pt-6 md:p-4 text-center md:text-left space-y-4">
        <figcaption className="font-medium">
          <div className="text-cyan-600 text-lg text-center font-extrabold">
            {name}
          </div>
          <div className="text-center text-base">{claim_time} claim</div>
          <div
            className={
              props.scale === ""
                ? `grid pt-2 text-center`
                : `grid grid-cols-2 pt-2 text-center`
            }
          >
            <p className="text-sm text-center font-extralight p-1">
              <span className="font-bold">Min: {minimal_claim}</span>
            </p>
            <p className="text-sm text-center font-extralight p-1">
              <span className="font-bold">Max: {maximum_claim}</span>
            </p>
          </div>

          <p className="text-sm pt-4 text-center font-extralight">
            {referral_comm_rate} referrals commission rate
          </p>
          <p className="text-sm pt-4 text-justify font-light">{description}</p>
        </figcaption>
      </div>
    </a>
  );
};

export default Faucet;
