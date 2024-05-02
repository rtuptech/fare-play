import Image from "next/image";
import style from "./styles.module.css"
import logo from "@/images/fareplay-logo.svg"
import skull from "@/images/skull.svg"
import clouds from "@/images/clouds.svg"
import cloud from "@/images/cloud.png"
import building from "@/images/Fareplaybuildings.svg"

export default function LandingPage() {
    return (
        <div className={style.landingpagebg}>
            <div className={style.header}>
                <Image
                    src={logo}
                    alt="fareplay logo"
                    className={style.logo}
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
                />
                <span className={style.nav}>
                    <a>ABOUT</a>
                    <a>POINTS</a>
                    <a>WAITLIST</a>
                </span>
            </div>
            <div className={style.clouds}>
                <Image src={clouds} alt="clouds" className={style.clouds1} style={{ objectFit: "cover" }} />
            </div>
            <div className={style.clouds}>
                <Image src={cloud} className={style.clouds2} alt="clouds" />
            </div>
            <div className={style.buildings}>
                <Image src={building} className={style.building} alt="buildings" />
            </div>
            <div className={style.menu}>
                <p style={{ fontSize: "48px" }}>GAMBLE FOR FREE</p>
                <p style={{ fontSize: "64px", color: "#4AF5D3", marginTop: "-30px" }}>EARN POINTS</p>
                <div style={{ marginTop: "-8px" }}>
                    <button><Image src={skull} alt="skull" /> Click LAUNCH APP</button>
                    <button><Image src={skull} alt="skull" /> Connect your wallet</button>
                    <button><Image src={skull} alt="skull" /> Enter your invite code</button>
                    <span className={style.bottombtns}>
                        <button style={{ display: "inline", fontSize: "12.14px", backgroundColor: "#4AF5D3", height: "34px", borderRadius: "1px" }}>LAUNCH APP</button>
                        <button style={{ display: "inline", fontSize: "12.14px", backgroundColor: "#410DFF", height: "34px", borderRadius: "1px" }}>LEARN MORE</button>
                    </span>
                </div>
            </div>
        </div>
    );
}