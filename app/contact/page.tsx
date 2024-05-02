import {
  IoChatbubbleEllipsesOutline,
  IoCashOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";

export default function Contact() {
  return (
    <div className="pt-24 p-12 flex flex-col gap-12 items-center justify-center">
      <h1 className="text-3xl lg:text-5xl font-bold text-primary">
        ارتباط با ما
      </h1>
      <br />
      <div className="flex flex-col gap-8 text-secondary">
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-center text-center">
          <a
            href="https://zarinp.al/codecrafters.ir"
            className="bg-gray-100 hover:bg-primary p-8 rounded-full hover:text-white text-primary"
          >
            <IoCashOutline className="w-12 h-12" />
          </a>
          <p className="text-lg font-medium">
            در صورتی که قصد دارید از گروه CodeCrafters حمایت کنید، می توانید از
            لینک پرداخت زیر استفاده کنید
          </p>
          <a
            className="p-4 bg-secondary text-white rounded-full"
            href="https://zarinp.al/codecrafters.ir"
          >
            https://zarinp.al/codecrafters.ir
          </a>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-center text-center">
          <div className="bg-gray-100 hover:bg-primary p-8 rounded-full hover:text-white text-primary">
            <IoChatbubbleEllipsesOutline className="w-12 h-12" />
          </div>
          <p className="text-lg font-medium">
            در صورتی که درخواست انجام پروژه دارید می توانید از طریق این لینک
            درخواست خود را ثبت کنید
          </p>
          <div className="flex flex-row gap-6 items-center justify-center">
            <a
              className="p-4 bg-secondary text-white rounded-full"
              href="https://t.me/soroush_pm"
            >
              Telegram
            </a>
            <a
              className="p-4 bg-secondary text-white rounded-full"
              href="mailto:soroushalinia.wm@gmail.com"
            >
              Email
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-center text-center">
          <div className="bg-gray-100 hover:bg-primary p-8 rounded-full hover:text-white text-primary">
            <IoHelpCircleOutline className="w-12 h-12" />
          </div>
          <p className="text-lg font-medium">
            در صورتی که انتقاد یا پیشنهادی دارید و یا سوالی وجود دارد می توانید
            از طریق این لینک با ما صحبت کنید
          </p>
          <div className="flex flex-row gap-6 items-center justify-center">
            <a
              className="p-4 bg-secondary text-white rounded-full"
              href="https://t.me/soroush_pm"
            >
              Telegram
            </a>
            <a
              className="p-4 bg-secondary text-white rounded-full"
              href="mailto:soroushalinia.wm@gmail.com"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
