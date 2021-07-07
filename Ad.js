import { useEffect } from "react"
import style from "./styles/ad.module.css"

export default function Ad() {
    useEffect(() => {
        var ads = document.getElementsByClassName("adsbygoogle").length;
        console.log(ads)
    
        for (var i = 0; i < ads; i++) {
          try {
            (adsbygoogle = window.adsbygoogle || []).push({});
          } catch (e) { console.log(e) }
        }
      }, []);
    
    return (
      <div>
        <ins 
            /* className={style.adBlock} */
            className="adsbygoogle"
            styles="display:block; text-align:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-6752061057745278"
            data-ad-slot="6544449518"
        />
      </div>
    )
  }