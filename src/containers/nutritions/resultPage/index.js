import { HeaderComponent } from "../../../layouts/header"
import { FooterComponent } from "../../../layouts/footer"

export const ResultPage = (props) => {
    return(
        <div className = "flex flex-col flex-grow">
            <HeaderComponent></HeaderComponent>
            <div className = "p-12">
                {
                    props.calories.map((data,index) => {
                        if(data.chosen) {
                            return(
                                <div key = {index}><b>{data.cal}</b></div>
                            )
                        }
                        return(
                            <div key = {index}>{data.cal}</div>
                        )
                    })
                }
            </div>
            <FooterComponent></FooterComponent>
        </div>
    )
}