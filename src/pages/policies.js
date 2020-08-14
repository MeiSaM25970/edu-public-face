import React, { Component } from "react";
import { getPolicies } from "../service";

export class PoliciesPage extends Component {
  state = { text: "" };
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  componentDidMount() {
    this.scrollTop();
    getPolicies().then((res) => this.setState({ text: res.data }));
  }
  render() {
    return (
      <div className="container">
        <h1 class="page-title" style={{ marginTop: 10 }}>
          قوانین و مقررات
        </h1>
        <p
          dir="RTL"
          style={{ textAlign: "center", marginTop: 20, lineHeight: 3 }}
        >
          <span style={{ fontSize: "14.0pt" }}>
            <span style={{ fontFamily: "iransans-bold" }}>
              قوانین سایت برگ دانش
            </span>
          </span>
        </p>
        <div
          dir="RTL"
          style={{ textAlign: "justify" }}
          dangerouslySetInnerHTML={{ __html: this.state.text }}
        ></div>
        {/* <p dir="RTL" style="text-align:justify"><span style="font-size:14.0pt"><span style="font-family:&quot;B Nazanin&quot;">&nbsp;&nbsp;&nbsp; سایت آنلاین آموزان به عنوان بستری برای همه آموزش دهندگان و آموزش گیرندگان به صورت یک نمایشگاه دائمی، بازارچه خدمات آموزشی و هایپرمارکت موارد مرتبط با آموزش، فراهم کننده زمینه های مناسب و لازم برای آموزشگاهها و اساتید، مدرسان، مدارس و دارندگان مجوزهای آموزشی جهت ا</span></span><span style="font-size:14.0pt"><span style="font-family:&quot;B Nazanin&quot;">ر</span></span><span style="font-size:14.0pt"><span style="font-family:&quot;B Nazanin&quot;">ائه خدمات آموزشی می باشد و خود به تنهایی اقدام به تولید و ارائه هیچگونه خدمات آموزشی ننموده و نخواهد نمود. تنها وظیفه آنلاین آموزان در این خصوص دریافت و تایید مدارک و مجوزهای لازم از ارائه دهندگان خدمات آموزشی و نمایش آن به جستجو کنندگان و دریافت کنندگان خدمات آموزشی می باشد. لذا در همین راستا موارد ذیل به جهت عدم ایجاد اختلال و جلوگیری از تضییع حقوق هر یک از طرفین و رسیدن به اهداف عالیه آموزش، به عنوان الزامات و قوانین لازم الجرای استفاده کنندگان سایت تعیین می گردد و <u>از همه طرفین مطالعه دقیق و رعایت این قوانین اکیداً مورد انتظار می باشد</u> و درصورت بروز مشکل درصورت عدم رعایت این قوانین مسئولیت عواقب آن به عهده شخص ناآگاه و خاطی خواهد بود. استفاده از آنلاین آموزان به منزله‌ی قبول تمامی شرایط و قوانین ذیل است و هرگونه ادعا یا اعتراض آتی در این خصوص بلااعتبار خواهد بود. (در ادامه سایت به معنای سایت آنلاین آموزان و کاربر به معنای هر شخص حقیقی یا حقوقی استفاده کننده از هرگونه خدمات سایت می باشد)</span></span></p> */}
      </div>
    );
  }
}
