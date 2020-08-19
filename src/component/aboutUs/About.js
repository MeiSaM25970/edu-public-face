import React, { Component } from "react";
import "./about.css";
export class About extends Component {
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  componentDidMount() {
    this.scrollTop();
  }
  render() {
    return (
      <div className="container" style={{ marginTop: 20 }}>
        <h3 className="titr">بسمه تعالی </h3>

        <h3
          style={{
            fontSize: "30px",
            textAlign: "center",
            lineHeight: "45px",
            color: "#000",
          }}
        >
          اصل اول : تمام فعالیت های این سامانه ، براساس قوانین جمهوری اسلامی
          ایران بوده و رعایت آن برای تمام کابران این سامانه اعم از مدرس و متقاضی
          و سایرین الزامی میباشد ، لذا هرگونه فعالیت مغایر با موازین قانونی ،
          مستوجب تعقیب قضایی خواهد بود .
        </h3>

        <div className="container featured text-center">
          {/* <video controls="" __idm_id__="199918593">
            <source
              src="/Content/Videos/OnlineAamoozan720.mp4"
              type="video/mp4"
            >
              این ویدیو در بروزر شما قابل پخش نیست!
            </source>
          </video> */}
        </div>

        <h3 style={{ marginTop: 40 }}>
          {" "}
          Learningage، پیشتاز در ارائه خدمات و بستر آموزشی آنلاین
        </h3>
        <br />
        <p style={{ lineHeight: 2 }}>
          ارائه دهندگان خدمات آموزشی (معلمان، مدرسین، اساتید، مدارس، موسسات
          آموزشی، دانشگاهها، ادارات و سازمانها، آموزشگاه ها و ...) با هر تخصصی و
          از هرکجای دنیا بدون نیاز به صرف هزینه و زمان برای آماده سازی کلاس و
          تبلیغات و ...، می توانند در هر ساعت و از هر مکانی، کلاسهای آنلاین
          (همزمان) تعریف کنند، به بازدید کنندگان نمایش دهند و به صورت اینترنتی
          دانش پذیر جذب نمایند و علی النهایه در همین سایت کلاس تشکیل دهند. در
          دهکده جهانی نت، بدون محدودیت وارد شوید و ظرفیت پذیرش و ثبت نام را به
          بی نهایت ارتقا دهید. از طرفی جویندگان خدمات آموزشی (محصلین، دانشجویان،
          کنکوری ها، کارمندان و همه اقشار جامعه) از هرکجا، هر مکان و با هر سنی و
          در هر شرایطی، هرگونه کلاس آموزشی خود را در سامانه ما جستجو کرده و ثبت
          نمام نمایند و در کلاسهای اینترنتی همزمان شرکت نمایند .
        </p>

        <h3 className="titr"> Learningage ، چیست؟</h3>
        <p>
          سامانه ما ، یک سایت اینترنت است که بستری ایجاد کرده تا در آن تمامی
          ارائه دهندگان خدمات آموزشی از جمله معلمان، دبیران، اساتید، متخصصان،
          مدارس، آموزشگاههای علمی و آزاد، موسسات آموزشی، انتشارات کتب آموزشی،
          مشاوران تحصیلی، سازمانها و ادارات و شرکتها و هر شخص یا ارگانی،خدمات
          آموزشی خود از قبیل کلاس آنلاین، آزمون آنلاین، مشاوره آنلاین، کلاس زبان
          آنلاین، فروشگاه کتاب آنلاین، محتویات کمک آموزشی و ... را در اینترنت به
          صورت خصوصی یا عمومی ارائه نمایند. هیچ محدودیتی برای تعریف و معرفی
          کلاسها و آزمونها و خدمات آموزشی وجود ندارد و تعریف کلاس و آزمون و
          معرفی خدمات و ایجاد پروفایل در این سایت رایگان می باشد. با توجه به
          مزایای فراوان آموزش مجازی برای اقشار مختلف درگیر ، شامل والدین، دانش
          آموزان، دانشجویان، مدرسین، موسسات و مدارس، ترافیک و محیط زیست و
          ........، و از طرفی پیشرفت روز افزون تکنولوزی و گسترش نفوذ اینترنت در
          جامعه و افزایش خدمات اینترنتی، لازم است تا از این طریق چشم انداز جدیدی
          به دنیای زیبای آموزش و یادگیری گشوده شود. تقریبا تمامی آموزشها و
          آزمونهای حضوری را می توان در بستر اینترنت ارائه نمود و از مزایای آن
          بهره جست. به عنوان مثال: مدارس می توانند کلاسهای فوق برنامه و آزمونهای
          دوره ای خود و ... را در بستر این سامانه تعریف و تشکیل نمایند تا در
          هزینه های خود صرفه جویی کنند ضمن اینکه دانش آموزان در منزل می توانند ،
          در کمال آرامش در کلاس فوق برنامه یا آزمون اینترنتی شرکت می نمایند ..
          شرکت ها و سازمانها به جای آنکه همکاران خود را از سراسر کشور یا استان
          برای شرکت در یک دوره آموزشی فراخوان نمایند و هزینه های گزاف متقبل
          شوند، می توانند با تعریف کلاس در سامانه و بدون جابجایی همکاران ،
          آموزشهای لازم را در اسرع وقت و به بهترین نحو به پرسنل ارائه نمایند.
          موسسات هنری، قرانی و دینی و مراکز فرهنگی می توانند کلاسهای آنلاین
          برگزار نمایند. . برای آموزشگاهها در شهرهای شلوغ و پرترافیک، شهرها و
          استانهای خیلی گرم که در تابستان تقریبا کلاسهای حضوری تعطیل هستند و
          برای آموزشگاه های قوی و مشهور که در سطح کشور شناخته شده هستند این
          سامانه فرصتی طلایی درجهت پیشرفت و جذب متقاضی بیشتر و درآمد بیشتر خواهد
          بود
        </p>

        <p className="text-center" style={{ marginTop: 15 }}>
          در پایان بر آنیم تا با ارائه خدمات نوین در بستر آموزش های آنلاین در
          جهت اعتلا و سرافرازی و توسعه ایران عزیز سهمی هر چند اندک را داشته و به
          هموطنان مان افتخار خدمتگزاری داشته باشیم.
        </p>
        <br />
      </div>
    );
  }
}
