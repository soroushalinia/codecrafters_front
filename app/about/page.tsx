import aboutImage from "@/image/about.jpg";
import Image from "next/image";

export default function About() {
  return (
    <div className="pt-24 p-12 flex flex-col gap-12 items-center justify-center">
      <Image className="rounded-lg" src={aboutImage} width={1024} height={1024} alt="About"></Image>

      <h1 className="text-3xl lg:text-5xl font-bold text-primary">
        به جامعه Code Crafters خوش آمدید!
      </h1>
      <div className="text-center text-secondary text-lg font-medium">
        <p>
          Code Crafters یک جامعه فعّال از برنامه‌نویسان به همراه محوریت بر کیفیت
          کد و اشتراک تجربیات فنی است.
        </p>
        <br />
        <p>
          اعضای این جامعه از سرتاسر جهان، با هدف به ارتقاء دانش مشترک، حل مسائل
          برنامه‌نویسی، و ایجاد یک ارتباط فعّال در زمینه توسعه نرم‌افزار مشغول
          به فعالیت هستند.
        </p>
        <br />
        <p>
          در Code Crafters، ما با افتخار به تفاوت‌های فردی و تخصص‌های متنوع اعضا
          احترام می‌گذاریم.
        </p>
        <br />
        <p>
          این جامعه یک فرصت مناسب برای یادگیری مداوم، اشتراک دانش، و تبادل نظرات
          میان برنامه‌نویسان حرفه‌ای ارائه می‌دهد.
        </p>
        <br />
        <p>
          ما در Code Crafters به ایجاد یک فضای دوستانه و انگیزشی برای توسعه
          حرفه‌ای هر برنامه‌نویس اعتقاد داریم.
        </p>
        <br />
        <p>
          از شما دعوت می‌کنیم تا به جمع ما بپیوندید و با انرژی مثبت Code
          Crafters، توانمندی‌های خود را به اشتراک بگذارید.
        </p>
        <br />
        <p>
          ما همیشه به دنبال جذب اعضای جدید و توسعه فعّال در این جامعه هستیم.
        </p>
        <br />
        <p>
          اگر علاقه‌مند به همکاری و یادگیری از هم‌برنامه‌نویسان هستید، ما منتظر
          حضور شما در Code Crafters هستیم.
        </p>
      </div>
    </div>
  );
}
