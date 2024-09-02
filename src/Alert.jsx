import React from "react";
import { RiInformationFill } from "@remixicon/react";

const Alert = ({ alert }) => {
        return(
            alert!=null && (
                <div className={`alert alert-${alert.type} d-flex gap-2`}>
                    <RiInformationFill />
                    {alert.msg}
                </div>
            )
        );
}

export default Alert 