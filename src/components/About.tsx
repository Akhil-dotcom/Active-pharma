import { FC } from "react";

const About: FC = () => {
  return (
    <div className="bg-emerald-200 p-5 py-[6rem]">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <h3 className="pb-2 font-medium">About Us</h3>
        <h1 className="text-3xl xl:text-5xl font-copse text-center">
          We are the herbal hub. Your health is our Priority.
        </h1>
        <p className="max-w-screen-lg pt-5 text-lg text-center">
          Founded in the year 1997, with the expertise of eminent Ayurveda
          doctors and traditional vaidyas, Active Pharma commenced its
          operations with a single unit in Kerala, manufacturing herbal oils and
          traditional ayurvedic preparations.
          <br /> As an Ayurvedic manufacturing company we stand out now with a
          wider portfolio covering Herbal patent medicines (both external and
          internal medicines), Ayurveda food, Nutraceutics, Health supplements,
          Herbal cosmetics, Skin care and Hair care products.
          <br /> A technical know-how about the active ingredients and specialty
          formulations backed up by the time tested Knowledge of Ayurveda makes
          us the unique one in the group. We are inclined to improve the quality
          of human life through innovative and advanced health care products.
          <br /> We collaborate with physicians and global innovators to
          identify unmet clinical needs and develop safe herbal medicines.
        </p>
      </div>
    </div>
  );
};

export default About;
