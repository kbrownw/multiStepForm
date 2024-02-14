import ThankYouIcon from "../assets/images/icon-thank-you.svg";
import Title from "./Title";

const ThankYou = () => {
  return (
    <article className="flex flex-col gap-3 my-20 text-center justify-center items-center md:h-full md:my-0">
      <img src={ThankYouIcon} alt="Thank-you-icon" className="mb-5" />
      <Title>Thank you!</Title>
      <p className="text-cool-gray text-[18px]">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </article>
  );
};

export default ThankYou;
