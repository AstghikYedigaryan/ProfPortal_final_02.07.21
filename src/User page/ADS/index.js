import React from "react";
import "./../../Style/StyleUserPage/ADS.css";
import Advertising from "./advertising";
import { SRC_1, COMPANI_1, HREF_1, SRC_2, COMPANI_2, HREF_2,
     SRC_3, COMPANI_3, HREF_3, SRC_4, COMPANI_4, HREF_4} from "./../../constaat/constantAdvertising"

const ADS = () => {

return (
    <div className = "wrap_ADS">
        <h3>Our partners</h3>
<Advertising src = {SRC_1}  COMPANI = {COMPANI_1} HREF = {HREF_1} />
<Advertising src = {SRC_2}  COMPANI = {COMPANI_2} HREF = {HREF_2} />
<Advertising src = {SRC_3}  COMPANI = {COMPANI_3} HREF = {HREF_3} />
<Advertising src = {SRC_4}  COMPANI = {COMPANI_4} HREF = {HREF_4} />
    </div>

)

}

export default ADS;
