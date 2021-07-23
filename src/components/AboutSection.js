import React from "react"
import AboutIllustration from "../svg/illustration1.svg"
import ScrollAnimation from "react-animate-on-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"

export default function AboutSection(props) {
  // const imgContainer = useImage();
  let content = {
    EN: {
      title1: "In need of transporting oversized cargoes?", //From Ocean to Air",
      title2: "Sovi is here to help!", //"We've got your back",
      link: "More about us",
      content1: "We consult and provide transportation services, " +  
                "even for the oversized cargoes, by using specialized " + 
                "containers such as Flat-rack (FR) and Open-top (OT). " +
                "For cargoes which are unable to load on container, we " +
                "also provide efficient & cost-saving transportation " +
                "solutions to/from domestic & overseas.",
      content2: "We also offer supporting services including: domestic " +
                "transportation, loading and discharging, cargoes lashing " +
                "and securing, lashing certificate (inspected & issued by " +
                "reputable inspection companies), etc."
    },

    VI: {
      title1: "Hàng quá khổ, làm sao vận chuyển?", //"Từ biển đến hàng không"
      title2: "Chúng tôi ở đây để hỗ trợ bạn!", //"Chúng tôi luôn hỗ trợ bạn"
      link: "Tìm hiểu thêm về công ty SOVI",
      content1: "SOVI chuyên tư vấn và cung cấp dịch vụ vận chuyển " + 
                "các kiện hàng này bằng container đặc biệt Flat-rack " + 
                "(FR); Open-top (OT). Với các lô hàng không phù hợp " + 
                "đóng trên container, chúng tôi chuyên cung cấp các "+ 
                "giải pháp tiết kiệm, hiệu quả để giải quyết viêc vận " + 
                "chuyển các kiện hàng này đi/đến trong và ngoài nước.",
      content2: "Bên cạnh đó, chúng tôi cung cấp các dịch vụ hỗ trợ đi " + 
                "kèm như: vận chuyển nội địa; đóng/dỡ hàng; chằng buộc " + 
                "hàng hóa trên container; chứng thư chằng buộc (được giám " + 
                "định và cấp bởi các công ty giám định uy tín)…"
    },
  }
  // console.log(content);
  props.language === "en" ? (content = content.EN) : (content = content.VI)

  return (
    <div className="about-sec">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-12 header">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
              <h2 className="heading-one">{content.title1}</h2>
              <h2 className="heading-two">{content.title2}</h2>
              <p className="mr-5 mt-4">
              {content.content1}
              <br></br>
              <br></br>
              {content.content2}
              </p>
              <a href="/about" className="about-link">
                {content.link}{" "}
                <FontAwesomeIcon
                  style={{ paddingTop: "3px" }}
                  icon={faCaretRight}
                />
              </a>
            </ScrollAnimation>
          </div>
          <div className="col-xl-6 col-lg-12">
            <ScrollAnimation animateIn="pulse" animateOnce={true}>
              <AboutIllustration className="illustration" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  )
}
