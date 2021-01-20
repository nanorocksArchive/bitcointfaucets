import * as React from "react";
import { SEO } from "gatsby-plugin-seo";
import Faucet from "../components/Faucet";
import Description from "../components/Description";
import { btcFaucets, randomFaucetsIndex } from "../data/btcFaucets";
import { descriptions } from "../data/descriptions";
import btcLogo from "../img/btc-logo.png";

const random = randomFaucetsIndex(btcFaucets);


// markup
const IndexPage = () => {
  return (
    <main>
      <SEO
        title="Bitcoint faucets for everyone"
        description="WebSite for active Bitcoint Faucets"
        pagePath="/"
        schema={`{
              "@type": "Bitcoint faucets for everyone",
              "mainEntity": {
                "@type": "Organization",
                "name": "bitcointfaucets.ml"
              }
            }`}
      />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DMS6ZZ37LV"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-DMS6ZZ37LV');
        `,
        }}
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full">
        <h1 className="md:pl-16 md:pr-16 md:pt-16 pl-4 pr-4 pt-10 pb-10 font-black text-white md:text-6xl text-3xl">
          <img src={btcLogo} className="md:w-24 w-16 inline-block" alt="logo" />
          <span className="relative top-2">itcoint Faucets</span>
          <small className="md:text-sm relative md:bottom-9 bottom-4 text-sm">
            {new Date().getFullYear()}
          </small>
        </h1>
      </div>
      {/* Faucets */}
      <div className="grid sm:grid-cols-12 md:grid-cols-4 gap-6 pt-4 pb-20 md:pl-16 md:pr-16 pl-4 pr-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        {btcFaucets.map((faucet, index) => {
          return (
            <Faucet
              key={index}
              data={faucet}
              scale={random.includes(faucet.id) ? `sm:col-span-2` : ""}
            />
          );
        })}
      </div>
      {/* ADS */}
      <div className="flex pt-4 md:pl-16 md:pr-16 pl-4 pr-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <iframe
          title="ad1"
          data-aa="1554738"
          src="//ad.a-ads.com/1554738?size=728x90"
          scrolling="no"
          className="flex-auto border-0 overflow-hidden p-0 w-full h-full block mx-auto"
          allowtransparency="true"
        ></iframe>
        <iframe
          title="ad2"
          data-aa="1555418"
          src="//ad.a-ads.com/1555418?size=728x90"
          scrolling="no"
          className="flex-auto relative border-0 overflow-hidden p-0 w-full h-full block mx-auto"
          allowtransparency="true"
        ></iframe>
      </div>
      {/* FAQ  */}
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full">
        <h1 className="md:pl-16 md:pr-16 pl-4 pr-4 pb-10 font-black text-white md:text-6xl text-3xl">
          <span className="relative top-2">FAQ</span>
        </h1>
      </div>
      {/* Descriptions */}
      <div className="pt-4 pb-20 md:pl-16 md:pr-16 pl-4 pr-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <figure className="md:flex bg-gray-200 rounded-xl md:p-0 p-8 shadow-md">
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              {descriptions.map((description, index) => {
                return <Description key={index} data={description} />;
              })}
            </blockquote>
          </div>
        </figure>
      </div>
    </main>
  );
};

export default IndexPage;
