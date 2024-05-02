import Image from "next/image";
import { Button } from "@/components/ui/button";
import Goal from "@/components/layout/goals";
import {
  IoChatbubbleEllipsesOutline,
  IoCashOutline,
  IoHeartOutline,
  IoUmbrellaOutline,
  IoImagesOutline,
  IoHomeOutline,
  IoGlobeOutline,
  IoWaterOutline,
} from "react-icons/io5";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-primary flex flex-col items-center justify-center p-8 text-center">
      <div className="pt-[75px] lg:pt-[150px] flex flex-col justify-center items-center">
        <h3 className="text-2xl lg:text-3xl ">CODE CRAFTERS</h3>
        <div className="p-2 flex flex-row justify-center">
          <hr className="w-[75px] border-gray-300" />
        </div>

        <h3 className="text-2xl lg:text-3xl ">به فارسی کدنویسان</h3>
        <br />
        <h1 className="text-4xl lg:text-5xl font-medium">
          به جامعه Code Crafters خوش آمدید!
        </h1>
        <br />
        <div className="max-w-[700px] lg:text-lg text-secondary">
          <p className="">
            Code Crafters یک جامعه از برنامه‌نویسان پرشور است که در زمینه‌های
            متعددی فعالیت می‌کنند و به بهبود مهارت‌های برنامه‌نویسی و اشتراک
            تجربیات می‌پردازند.
          </p>
          <br />
          <p>
            در Code Crafters، ما به ارتقاء هنر کدنویسی و ارتباط با اعضا اهمیت
            می‌دهیم. از طریق این جامعه متنوع، می‌توانید با برنامه‌نویسان حرفه‌ای
            در حوزه‌های گوناگون ارتباط برقرار کنید و از دانش و تجربیات آنان
            بهره‌مند شوید.
          </p>
          <br />

          <p>
            اعضای Code Crafters در زمینه‌های مختلفی مانند توسعه وب، هوش مصنوعی،
            اپلیکیشن‌های مختلف، داده‌کاوی، و غیره فعالیت می‌کنند. ما به
            اشتراک‌گذاری پروژه‌های مشترک، یادگیری مستمر و حل مشکلات برنامه‌نویسی
            متمرکز هستیم.
          </p>
          <br />
          <p>
            اگر به دنبال یک جامعه پویا از برنامه‌نویسان هستید یا می‌خواهید
            تجربیات خود را با دیگران به اشتراک بگذارید، ما به شما خوشحالیم. همین
            حالا به ما بپیوندید و با ما در سفر هیجان‌انگیز Code Crafters شرکت
            کنید!
          </p>
          <br />
          <br />
          <br />
          <Link
            href="/contact"
            className="bg-primary rounded-full p-4 text-white text-xl hover:bg-secondary"
          >
            عضویت در Code Crafters
          </Link>
        </div>
      </div>
      <div className="pt-[75px] lg:pt-[150px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <Goal
          text="ارتقا مهارت‌های فنی، ایجاد ارتباط مستدام و حل چالش‌های برنامه‌نویسی"
          icon={IoUmbrellaOutline}
        ></Goal>
        <Goal
          text="اشتیاق به کدنویسی، ارتقاء دانش فنی، یک محیط پویا برای تجربیات فنی"
          icon={IoHeartOutline}
        ></Goal>
        <Goal
          text="شما می توانید به نمونه‌کارها و پروژه‌های متوع اعضا دسترسی پیدا کنید"
          icon={IoCashOutline}
        ></Goal>
        <Goal
          text="از تجربیات هم برنامه‌نویسان خود بهره‌مند شوید"
          icon={IoImagesOutline}
        ></Goal>
        <Goal
          text="جامعه فعال از برنامه‌نویسان در حوزه های متعددی از توسعه نرم‌افزار"
          icon={IoHomeOutline}
        ></Goal>
        <Goal
          text="یک محیط پویا و انگیزشی برای توسعه حرفه‌ای خود و لذت از دنیای برنامه نویسی"
          icon={IoGlobeOutline}
        ></Goal>
        <Goal
          text="یک جرعه فراتر یک قطره بیشتر از روزمرگی"
          icon={IoWaterOutline}
        ></Goal>
        <Goal
          text="در گفتگوها و تالارها شرکت کنید"
          icon={IoChatbubbleEllipsesOutline}
        ></Goal>
      </div>
    </main>
  );
}
